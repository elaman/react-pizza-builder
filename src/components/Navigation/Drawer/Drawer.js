import React from 'react';
import classes from './Drawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';

function Drawer(props) {
  const contentClasses = [
    classes.Content,
    props.open ? classes.Open : classes.Closed,
  ].join(' ');

  return (
    <div className={classes.Drawer}>
      <Backdrop
        open={props.open}
        toggleHandler={props.toggleDrawerHandler} />
      <div className={contentClasses}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavItems />
      </div>
    </div>
  );
}

export default Drawer;