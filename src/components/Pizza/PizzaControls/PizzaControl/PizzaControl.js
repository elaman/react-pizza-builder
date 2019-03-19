import React from 'react';
import classes from './PizzaControl.module.css';

import PizzaIngredient from '../../PizzaPreview/PizzaIngredient/PizzaIngredient';

function PizzaControl(props) {
  return (
    <div className={classes.PizzaControl}>
      <button
        className={classes.Less}
        disabled={!props.count}
        onClick={() => props.lessHandler(props.ingredient)}></button>
      <PizzaIngredient type={props.ingredient} />
      <button
        className={classes.More}
        disabled={props.count >= 20}
        onClick={() => props.moreHandler(props.ingredient)}></button>
    </div>
  );
}

export default PizzaControl;