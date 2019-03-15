import React from 'react';
import classes from './PizzaControls.module.css';
import PizzaControl from './PizzaControl/PizzaControl';

function PizzaControls(props) {
  return (
    <div class={classes.PizzaControls}>
      <PizzaControl ingredient="salami" moreHandler={props.moreHandler} />
    </div>
  );
}

export default PizzaControls;