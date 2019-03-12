import React from 'react';
import classes from './Drawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';

function Drawer(props) {
  return (
    <div className={classes.Drawer}>
      <Backdrop />
      <div className={classes.Content}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavItems />
      </div>
    </div>
  );
}

export default Drawer;