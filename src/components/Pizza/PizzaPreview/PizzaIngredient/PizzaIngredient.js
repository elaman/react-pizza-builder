import React from 'react';
import classes from './PizzaIngredient.module.css';

function PizzaIngredient(props) {
  return (
    <div class={classes.PizzaIngredient}>
      {props.type}
    </div>
  );
}

export default PizzaIngredient;