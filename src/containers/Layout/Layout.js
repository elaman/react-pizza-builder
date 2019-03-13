import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Drawer from '../../components/Navigation/Drawer/Drawer';

class Layout extends Component {
  state = {
    drawerOpen: false
  }

  toggleDrawerHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  render() {
    return (
      <div class={classes.Layout}>
        <Toolbar
          toggleDrawerHandler={this.toggleDrawerHandler} />
        <Drawer
          open={this.state.drawerOpen}
          toggleDrawerHandler={this.toggleDrawerHandler}
          />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;