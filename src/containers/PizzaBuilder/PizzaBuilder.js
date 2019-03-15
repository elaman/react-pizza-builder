import React, { Component } from 'react';
import PizzaPreview from '../../components/Pizza/PizzaPreview/PizzaPreview';
import PizzaControls from '../../components/Pizza/PizzaControls/PizzaControls';

class PizzaBuilder extends Component {
  state = {
    ingredients: {
      tomato: 2,
      salami: 2,
      blackOlive: 2,
      greenOlive: 2,
      redPepper: 2,
      yellowPepper: 2
    }
  }

  moreHandler = (ingredient) => {
    const ingredients = {...this.state.ingredients};
    ingredients[ingredient]++; 

    this.setState({ ingredients: ingredients });
  }

  render() {
    return (
      <div class='PizzaBuilder'>
        <PizzaPreview
          ingredients={this.state.ingredients} />
        <PizzaControls
          moreHandler={this.moreHandler} />
      </div>
    );
  }
}

export default PizzaBuilder;