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

  const ingredientCount = Object
    .values(props.ingredients)
    .reduce((a, b) => a + b);

  return (
    <div className={classes.PizzaControls}>
      {ingredients}
      <div className={classes.PizzaOrder}>
        <button
          disabled={!ingredientCount}
          onClick={props.orderingToggleHandler}>Order</button>
      </div>
    </div>
  );
}

export default PizzaControls;