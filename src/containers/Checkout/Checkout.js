import React, { Component } from "react";
import classes from "./Checkout.module.css";

import PizzaPreview from "../../components/Pizza/PizzaPreview/PizzaPreview";
import CheckoutForm from "../../components/Checkout/CheckoutForm/CheckoutForm";

import axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler";

class Checkout extends Component {
  state = {
    ingredients: {},
    price: 0,
    customer: {
      name: "",
      phone: "",
      address: ""
    }
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;

    // [['ingredient', 'count'], ['price', '0']]
    for (let parameter of query.entries()) {
      if (parameter[0] === "price") {
        price = +parameter[1];
      } else {
        ingredients[parameter[0]] = +parameter[1];
      }
    }

    this.setState({ ingredients, price });
  }

  submitHandler = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      customer: this.state.customer
    };

    if (order.customer.name.length > 5
      && order.customer.phone.length > 5
      && order.customer.address.length > 5) {
      axios
        .post("orders.json", order)
        .then(response => {
          if (response.status === 200) {
            this.props.history.replace('/orders');
          }
        });
    }
    else {
      alert('Fill all the data!');
    }
  };

  cancelHandler = () => {
    this.props.history.goBack();
  };

  changeHandler = (field, value) => {
    const customer = this.state.customer;

    customer[field] = value;

    this.setState({ customer });
  }

  render() {
    return (
      <div className={classes.Checkout}>
        <PizzaPreview
          ingredients={this.state.ingredients}
          price={this.state.price}
        />
        <CheckoutForm
          submitHandler={this.submitHandler}
          cancelHandler={this.cancelHandler}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default withErrorHandler(Checkout, axios);
