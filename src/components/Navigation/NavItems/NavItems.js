import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

function NavItems(props) {
  return (
    <ul className={classes.NavItems}>
      <NavItem url="/">Pizza Builder</NavItem>
    </ul>
  );
}

export default NavItems;