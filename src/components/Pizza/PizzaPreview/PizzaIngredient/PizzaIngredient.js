import React from 'react';
import classes from './PizzaIngredient.module.css';

import tomatoSvg from '../../../../assets/images/tomato.svg';
import salamiSvg from '../../../../assets/images/salami.svg';
import blackOliveSvg from '../../../../assets/images/blackOlive.svg';
import greenOliveSvg from '../../../../assets/images/greenOlive.svg';
import redPepperSvg from '../../../../assets/images/redPepper.svg';
import yellowPepperSvg from '../../../../assets/images/yellowPepper.svg';
import unknownSvg from '../../../../assets/images/unknown.svg';

function PizzaIngredient(props) {
  let ingredient = null;

  switch(props.type) {
    case 'tomato':
      ingredient = { width: 35, height: 35, src: tomatoSvg };
      break;
    case 'salami':
      ingredient = { width: 30, height: 30, src: salamiSvg };
      break;
    case 'blackOlive':
      ingredient = { width: 10, height: 10, src: blackOliveSvg
      };
      break;
    case 'greenOlive':
      ingredient = { width: 10, height: 10, src: greenOliveSvg };
      break;
    case 'redPepper':
      ingredient = { width: 20, height: 20, src: redPepperSvg };
      break;
    case 'yellowPepper':
      ingredient = { width: 40, height: 40, src: yellowPepperSvg };
      break;
    default:
      ingredient = { width: 10, height: 10, src: unknownSvg };    
      break;
  }

  if (props.randomPosition) {
    ingredient.style = {
      position: 'absolute',
      top: Math.round(Math.random() * 270) + 'px',
      left: Math.round(Math.random() * 270) + 'px'
    }
  }

  return <img
    {...ingredient}
    className={classes.PizzaIngredient}
    alt={props.type} />;
}

export default PizzaIngredient;