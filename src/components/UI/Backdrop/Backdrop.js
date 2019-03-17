import React from 'react';
import classes from './Backdrop.module.css';

function Backdrop(props) {
  const backdropClasses = [
    classes.Backdrop,
    props.open ? classes.Open : classes.Closed,
  ].join(' ');

  return (
    <div
      className={backdropClasses}
      onClick={props.toggleHandler}></div>
  );
}

export default Backdrop;