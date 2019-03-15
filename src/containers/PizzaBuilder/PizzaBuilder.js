import React, { Component } from 'react';
import PizzaPreview from '../../components/Pizza/PizzaPreview/PizzaPreview';
import PizzaControls from '../../components/Pizza/PizzaControls/PizzaControls';

class PizzaBuilder extends Component {
  state = {
    ingredients: {
      tomato: 2,
      salami: 0,
      blackOlive: 2,
      greenOlive: 2,
      redPepper: 2,
      yellowPepper: 2,
      meat: 2
    }
  }

  lessHandler = (ingredient) => {
    const ingredients = {...this.state.ingredients};
    
    if (ingredients[ingredient]) {
      ingredients[ingredient]--;
    }

    this.setState({ ingredients: ingredients });
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
          ingredients={this.state.ingredients}
          moreHandler={this.moreHandler}
          lessHandler={this.lessHandler} />
      </div>
    );
  }
}

export default PizzaBuilder;