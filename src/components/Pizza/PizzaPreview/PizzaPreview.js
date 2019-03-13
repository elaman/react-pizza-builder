import React from 'react';
import classes from './PizzaPreview.module.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

import cheeseSvg from '../../../assets/images/cheese.svg';

function PizzaPreview(props) {
  const ingredients = Object
    .keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <PizzaIngredient key={ingredient + i} type={ingredient} />;
      });
    });

  return (
    <div className={classes.PizzaPreview}>
      {ingredients}
      <img src={cheeseSvg} alt="Pizza" />
    </div>
  );
}

export default PizzaPreview;