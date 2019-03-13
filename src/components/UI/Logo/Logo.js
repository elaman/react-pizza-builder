import React from 'react';
import classes from './Logo.module.css';
import logo from '../../../assets/images/logo.svg';

function Logo(props) {
  return (
    <img
      src={logo}
      alt="Pizza Builder"
      class={classes.Logo} />
  );
}

export default Logo;