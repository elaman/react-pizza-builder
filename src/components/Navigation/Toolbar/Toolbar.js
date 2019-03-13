import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';
import DrawerToggle from '../Drawer/DrawerToggle/DrawerToggle';

function Toolbar(props) {
  return (
    <div class={classes.Toolbar}>
      <div class={classes.Logo}>
        <Logo />
      </div>
      <DrawerToggle
        toggleHandler={props.toggleDrawerHandler} />
      <div class={classes.NavItems}>
        <NavItems />
      </div>
    </div>
  );
}

export default Toolbar;