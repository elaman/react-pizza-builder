import React from 'react';
import classes from './NavItem.module.css';

import { NavLink } from 'react-router-dom';

function NavItem(props) {
  return (
    <li className={classes.NavItem}>
      <NavLink
        to={props.url}
        activeClassName={classes.Active}
        exact>{props.children}</NavLink>
    </li>
  );
}

export default NavItem;