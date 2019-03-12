import React from 'react';
import './Drawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../UI/Logo/Logo';

function Drawer(props) {
  return (
    <div className='Drawer'>
      <Backdrop />
      <div className='DrawerContent'>
        <Logo />
      </div>
    </div>
  );
}

export default Drawer;