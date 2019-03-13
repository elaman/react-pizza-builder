import React from 'react';
import classes from './NavItem.module.css';

function NavItem(props) {
  return (
    <li class={classes.NavItem}>
      <a href={props.url}>{props.children}</a>
    </li>
  );
}

export default NavItem;