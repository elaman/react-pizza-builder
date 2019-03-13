import React, { Component } from 'react';
import PizzaPreview from '../../components/Pizza/PizzaPreview/PizzaPreview';
import PizzaControls from '../../components/Pizza/PizzaControls/PizzaControls';

class PizzaBuilder extends Component {
  state = {
    ingredients: {
      tomato: 2,
      salami: 1,
      blackOlive: 2,
      greenOlive: 2,
      redPepper: 0,
      yellowPepper: 0
    }
  }

  render() {
    return (
      <div className='PizzaBuilder'>
        <PizzaPreview
          ingredients={this.state.ingredients} />
        <PizzaControls />
      </div>
    );
  }
}

export default PizzaBuilder;