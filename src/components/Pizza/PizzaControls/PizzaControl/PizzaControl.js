import React from 'react';
import classes from './PizzaControl.module.css';

import PizzaIngredient from '../../PizzaPreview/PizzaIngredient/PizzaIngredient';

function PizzaControl(props) {
  return (
    <div className={classes.PizzaControl}>
      <PizzaIngredient type={props.ingredient} />
      <button
        disabled={props.count >= 20}
        onClick={() => props.moreHandler(props.ingredient)}>More</button>
      <button
        disabled={!props.count}
        onClick={() => props.lessHandler(props.ingredient)}>Less</button>
    </div>
  );
}

export default PizzaControl;