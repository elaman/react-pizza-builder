import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';

function Toolbar(props) {
  return (
    <div className={classes.Toolbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <NavItems />
    </div>
  );
}

export default Toolbar;