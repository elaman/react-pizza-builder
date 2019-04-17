import React, { Component } from 'react';
import { connect } from 'react-redux';

import PizzaPreview from '../../components/Pizza/PizzaPreview/PizzaPreview';
import PizzaControls from '../../components/Pizza/PizzaControls/PizzaControls';

import classes from './PizzaBuilder.module.css';
import Modal from '../../components/UI/Modal/Modal';
import PizzaOrder from '../../components/Pizza/PizzaOrder/PizzaOrder';

import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';

class PizzaBuilder extends Component {
  state = {
    information: null,
    ordering: false,
    loading: false,
  }

  orderingToggleHandler = () => {
    this.setState({
      ordering: !this.state.ordering
    });
  }
  
  checkoutHandler = () => {
    const query = [];

    for (let ingredient in this.props.ingredients) {
      if (this.props.ingredients[ingredient] > 0) {
        const name = encodeURIComponent(ingredient);
        const value = encodeURIComponent(this.props.ingredients[ingredient]);
  
        query.push(`${name}=${value}`);
      }
    }
    query.push(`price=${encodeURIComponent(this.props.price)}`);

    this.props.history.push({
      pathname: '/checkout',
      search: `?${query.join('&')}`
    });
  }

  componentDidMount() {
    axios.get('information.json')
      .then(response => {
        this.setState({
          information: response.data
        });
      });
  }

  render() {
    let modalContent = <Spinner />;
    if (this.state.ordering && !this.state.loading) {
      modalContent = (
        <PizzaOrder
          information={this.state.information}
          ingredients={this.props.ingredients}
          price={this.props.price}
          checkoutHandler={this.checkoutHandler}
          cancelHandler={this.orderingToggleHandler} />
      );
    }

    let content = <Spinner />;
    if (this.state.information) {
      content = (
        <div className={classes.PizzaBuilder}>
          <PizzaPreview
            price={this.props.price}
            ingredients={this.props.ingredients} />
          <PizzaControls
            ingredients={this.props.ingredients}
            information={this.state.information}
            orderingToggleHandler={this.orderingToggleHandler} />

          <Modal
            open={this.state.ordering}
            toggleHandler={this.orderingToggleHandler}>
            {modalContent}
          </Modal>
        </div>
      );
    }

    return content;
  }
}

const mapStateToProps = state => {
  return {
    // this.props.ingredients: reducer.js/state.ingredients
    ingredients: state.ingredients,
    price: state.price
  };
}

export default connect(
  mapStateToProps, null
)(withErrorHandler(PizzaBuilder, axios));