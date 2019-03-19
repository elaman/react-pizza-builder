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
      <div className={classes.Layout}>
        <Toolbar
          toggleDrawerHandler={this.toggleDrawerHandler} />
        <Drawer
          open={this.state.drawerOpen}
          toggleDrawerHandler={this.toggleDrawerHandler}
          />
        <div className={classes.Content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;