import React from 'react';
import classes from './PizzaControl.module.css';

import PizzaIngredient from '../../PizzaPreview/PizzaIngredient/PizzaIngredient';

function PizzaControl(props) {
  return (
    <div class={classes.PizzaControl}>
      <PizzaIngredient type={props.ingredient} />
      <button
        onClick={() => props.moreHandler(props.ingredient)}>
        More
      </button>
      <button>Less</button>
    </div>
  );
}

export default PizzaControl;