import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Drawer from '../../components/Navigation/Drawer/Drawer';

function Layout(props) {
  return (
    <div className='Layout'>
      <Toolbar />
      <Drawer />
      {props.children}
    </div>
  );
}

export default Layout;