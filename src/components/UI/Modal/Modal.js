import React from 'react';
import classes from './Modal.module.css';

import Backdrop from '../../../components/UI/Backdrop/Backdrop';

function Modal(props) {
  const modalClasses = [
    classes.Modal,
    props.open ? classes.Open : classes.Closed,
  ].join(' ');

  return (
    <div className={classes.ModalWrapper}>
      <Backdrop open={props.open} toggleHandler={props.toggleHandler} />
      <div className={modalClasses}>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;