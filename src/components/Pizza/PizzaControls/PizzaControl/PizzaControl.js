import React from 'react';
import { connect } from 'react-redux';
import classes from './PizzaControl.module.css';

import PizzaIngredient from '../../PizzaPreview/PizzaIngredient/PizzaIngredient';

function PizzaControl(props) {
  return (
    <div className={classes.PizzaControl}>
      <button
        className={classes.Less}
        disabled={!props.count}
        onClick={() => props.onRemoveIngredient(props.ingredient, props.information)}></button>
      <PizzaIngredient type={props.ingredient} />
      <button
        className={classes.More}
        disabled={props.count >= 20}
        onClick={() => props.onAddIngredient(props.ingredient, props.information)}></button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (ingredient, information) => dispatch({ type: 'ADD_INGREDIENT', ingredient, information }),
    onRemoveIngredient: (ingredient, information) => dispatch({ type: 'REMOVE_INGREDIENT', ingredient, information })
  }
}

export default connect(null, mapDispatchToProps)(PizzaControl);