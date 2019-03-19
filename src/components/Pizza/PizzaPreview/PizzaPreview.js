import React from 'react';
import classes from './PizzaPreview.module.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

import cheeseSvg from '../../../assets/images/cheese.svg';

function PizzaPreview(props) {
  const ingredients = Object
    .keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <PizzaIngredient
          key={ingredient + i}
          type={ingredient}
          randomPosition />;
      });
    });

  return (
    <div className={classes.PizzaPreview}>
      <div className={classes.Pizza}>
        <img
          className={classes.PizzaCheese}
          src={cheeseSvg}
          alt="Pizza" />
        <div className={classes.PizzaIngredients}>
          {ingredients}
        </div>
      </div>
      <div className={classes.PizzaPrice}>
        {props.price} som
      </div>
    </div>
  );
}

export default PizzaPreview;