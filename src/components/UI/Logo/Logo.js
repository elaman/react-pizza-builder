import React from 'react';
import './Logo.module.css';
import logo from '../../../assets/images/logo.svg';

function Logo(props) {
  return (
    <div className='Logo'>
      <img src={logo} alt="Pizza Builder" />
    </div>
  );
}

export default Logo;