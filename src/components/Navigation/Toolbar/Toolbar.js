import React from 'react';
import './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';

function Toolbar(props) {
  return (
    <div className='Toolbar'>
      <Logo />
      <NavItems />
    </div>
  );
}

export default Toolbar;