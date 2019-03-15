import React from 'react';
import classes from './PizzaControl.module.css';

import PizzaIngredient from '../../PizzaPreview/PizzaIngredient/PizzaIngredient';

function PizzaControl(props) {
  return (
    <div class={classes.PizzaControl}>
      <PizzaIngredient type={props.ingredient} />
      <button
        disabled={props.ingredients[props.ingredient] >= 20}
        onClick={() => props.moreHandler(props.ingredient)}>More</button>
      <button
        disabled={!props.ingredients[props.ingredient]}
        onClick={() => props.lessHandler(props.ingredient)}>Less</button>
    </div>
  );
}

export default PizzaControl;