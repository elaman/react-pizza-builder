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
    price: 200,
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
    query.push(`price=${encodeURIComponent(this.state.price)}`);

    this.props.history.push({
      pathname: '/checkout',
      search: `?${query.join('&')}`
    });
  }

  lessHandler = (ingredient) => {
    const ingredients = {...this.props.ingredients};
    let price = this.state.price;
    
    if (ingredients[ingredient]) {
      ingredients[ingredient]--;
      price -= this.state.information[ingredient].price;
    }

    this.props.onRemoveIngredient(ingredient);
    this.setState({ price });
  }

  moreHandler = (ingredient) => {
    const ingredients = {...this.props.ingredients};
    let price = this.state.price;

    ingredients[ingredient]++;
    price += this.state.information[ingredient].price;

    this.props.onAddIngredient(ingredient);
    this.setState({ price });
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
          price={this.state.price}
          checkoutHandler={this.checkoutHandler}
          cancelHandler={this.orderingToggleHandler} />
      );
    }

    let content = <Spinner />;
    if (this.state.information) {
      content = (
        <div className={classes.PizzaBuilder}>
          <PizzaPreview
            price={this.state.price}
            ingredients={this.props.ingredients} />
          <PizzaControls
            ingredients={this.props.ingredients}
            moreHandler={this.moreHandler}
            lessHandler={this.lessHandler}
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
    ingredients: state.ingredients
  };
}
const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (ingredient) => dispatch({ type: 'ADD_INGREDIENT', ingredient }),
    onRemoveIngredient: (ingredient) => dispatch({ type: 'REMOVE_INGREDIENT', ingredient })
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(withErrorHandler(PizzaBuilder, axios));