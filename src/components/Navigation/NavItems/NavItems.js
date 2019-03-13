import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

function NavItems(props) {
  return (
    <ul class={classes.NavItems}>
      <NavItem url="/">Pizza Builder</NavItem>
      <NavItem url="/">Checkout</NavItem>
    </ul>
  );
}

export default NavItems;