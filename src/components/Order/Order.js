import React from 'react';
import classes from './Order.module.css';

function Order(props) {
  const ingredients = [];
  for (let ingredient in props.ingredients) {
    ingredients.push(
      <><strong>{ingredient}: </strong> {props.ingredients[ingredient]}<br /></>
    );
  }

  return (
    <li className={classes.Order}>
      <div className={classes.OrderPrice}>
        <h4>Price</h4>
        {props.price} som
      </div>
      <div className={classes.OrderCustomer}>
        <h4>Customer</h4>
        <strong>Name: </strong> {props.customer.name}<br />
        <strong>Phone: </strong> {props.customer.phone}<br />
        <strong>Address: </strong> {props.customer.address}
      </div>
      <div className={classes.OrderIngredients}>
        <h4>Ingredients</h4>
        {ingredients}
      </div>
    </li>
  );
}

export default Order;