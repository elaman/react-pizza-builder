import React from 'react';
import classes from './DrawerToggle.module.css';

function DrawerToggle(props) {
  return (
    <button
      className={classes.DrawerToggle}
      onClick={props.toggleHandler}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}

export default DrawerToggle;