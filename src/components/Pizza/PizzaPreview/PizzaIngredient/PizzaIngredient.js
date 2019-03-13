import React from 'react';
import classes from './PizzaIngredient.module.css';

function PizzaIngredient(props) {
  return (
    <div className={classes.PizzaIngredient}>
      {props.type}
    </div>
  );
}

export default PizzaIngredient;