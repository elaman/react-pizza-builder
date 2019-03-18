import React from 'react';
import classes from './PizzaControls.module.css';
import PizzaControl from './PizzaControl/PizzaControl';

function PizzaControls(props) {
  const ingredients = Object
    .keys(props.ingredients)
    .map(ingredient => {
      return <PizzaControl
        key={ingredient}
        ingredient={ingredient}
        count={props.ingredients[ingredient]}
        lessHandler={props.lessHandler}
        moreHandler={props.moreHandler} />;
    });

  return (
    <div className={classes.PizzaControls}>
      {ingredients}
    </div>
  );
}

export default PizzaControls;