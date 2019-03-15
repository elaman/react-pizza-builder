import React from 'react';
import classes from './PizzaIngredient.module.css';

import tomatoSvg from '../../../../assets/images/tomato.svg';
import salamiSvg from '../../../../assets/images/salami.svg';
import blackOliveSvg from '../../../../assets/images/blackOlive.svg';
import greenOliveSvg from '../../../../assets/images/greenOlive.svg';
import redPepperSvg from '../../../../assets/images/redPepper.svg';
import yellowPepperSvg from '../../../../assets/images/yellowPepper.svg';

function PizzaIngredient(props) {
  switch(props.type) {
    case 'tomato':
      return <img
        style={{
          width: '35px', height: '35px',
          position: 'relative',
        }}
        src={tomatoSvg}
        alt="Tomato" />;
    case 'salami':
      return <img
        style={{
          width: '30px', height: '30px',
          position: 'relative',
        }}
        src={salamiSvg}
        alt="Salami" />;
    case 'blackOlive':
      return <img
        style={{
          width: '10px', height: '10px',
          position: 'relative',
        }}
        src={blackOliveSvg}
        alt="Black Olive" />;
    case 'greenOlive':
      return <img
        style={{
          width: '10px', height: '10px',
          position: 'relative',
        }}
        src={greenOliveSvg}
        alt="Green Olive" />;
    case 'redPepper':
      return <img
          style={{
            width: '20px', height: '20px',
            position: 'relative',
          }}
          src={redPepperSvg}
          alt="Red Pepper" />;
    case 'yellowPepper':
      return <img
        style={{
          width: '40px', height: '40px',
          position: 'relative',
        }}
        src={yellowPepperSvg}
        alt="Yellow Pepper" />;
    default:
      return;
  }
}

export default PizzaIngredient;