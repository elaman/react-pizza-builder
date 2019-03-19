import React, { Component } from 'react';
import PizzaPreview from '../../components/Pizza/PizzaPreview/PizzaPreview';
import PizzaControls from '../../components/Pizza/PizzaControls/PizzaControls';

import classes from './PizzaBuilder.module.css';

const INGREDIENT_PRICES = {
  tomato: 5,
  salami: 5,
  blackOlive: 2,
  greenOlive: 2,
  redPepper: 3,
  yellowPepper: 3,
};

class PizzaBuilder extends Component {
  state = {
    ingredients: {
      tomato: 0,
      salami: 0,
      blackOlive: 0,
      greenOlive: 0,
      redPepper: 0,
      yellowPepper: 0,
    },
    price: 200
  }

  lessHandler = (ingredient) => {
    const ingredients = {...this.state.ingredients};
    let price = this.state.price;
    
    if (ingredients[ingredient]) {
      ingredients[ingredient]--;
      price -= INGREDIENT_PRICES[ingredient];
    }

    this.setState({ ingredients, price });
  }

  moreHandler = (ingredient) => {
    const ingredients = {...this.state.ingredients};
    let price = this.state.price;

    ingredients[ingredient]++;
    // price = price + INGREDIENT_PRICES[ingredient];
    price += INGREDIENT_PRICES[ingredient];

    this.setState({ ingredients, price });
  }

  render() {
    return (
      <div className={classes.PizzaBuilder}>
        <PizzaPreview
          price={this.state.price}
          ingredients={this.state.ingredients} />
        <PizzaControls
          ingredients={this.state.ingredients}
          moreHandler={this.moreHandler}
          lessHandler={this.lessHandler} />
      </div>
    );
  }
}

export default PizzaBuilder;