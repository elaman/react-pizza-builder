import React, { Component } from 'react';
import classes from './Checkout.module.css';

import PizzaPreview from '../../components/Pizza/PizzaPreview/PizzaPreview';
import CheckoutForm from '../../components/Checkout/CheckoutForm/CheckoutForm';

class Checkout extends Component {
  state = {
    ingredients: {},
    price: 0
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