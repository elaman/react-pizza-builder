import React from 'react';
import classes from './PizzaOrder.module.css';

function PizzaOrder(props) {
  const ingredients = Object
    .keys(props.ingredients)
    .map(ingredient => {
      return (
        <li key={ingredient}>
          <strong>{props.information[ingredient].title}</strong>: {props.ingredients[ingredient]}
        </li>
      );
    });

  return (
    <div className={classes.PizzaOrder}>
      <ul>
        {ingredients}
      </ul>
      {props.price}

      <button onClick={props.checkoutHandler}>Checkout</button>
      <button onClick={props.cancelHandler}>Cancel</button>
    </div>
  );
}

export default PizzaOrder;