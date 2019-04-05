import React, { Component } from 'react';
import classes from './Checkout.module.css';

import PizzaPreview from '../../components/Pizza/PizzaPreview/PizzaPreview';
import CheckoutForm from '../../components/Checkout/CheckoutForm/CheckoutForm';

class Checkout extends Component {
  state = {
    ingredients: {},
    price: 0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;

    // [['ingredient', 'count'], ['price', '0']]
    for (let parameter of query.entries()) {
      if (parameter[0] === 'price') {
        price = +parameter[1];
      }
      else {
        ingredients[parameter[0]] = +parameter[1];
      }
    }

    this.setState({ ingredients, price });
  }

  render() {
    return (
      <div className={classes.Checkout}>
        <PizzaPreview ingredients={this.state.ingredients} price={this.state.price} />
        <CheckoutForm />
      </div>
    );
  }
}

export default Checkout;