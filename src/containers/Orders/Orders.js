import React, { Component } from 'react';
import classes from './Orders.module.css';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true });

    axios
      .get('orders.json')
      .then(response => {
        const orders = [];
        for (let id in response.data) {
          orders.push({ id, ...response.data[id] });
        }

        this.setState({ orders, loading: false });
      });
  }

  render() {
    let orders = <Spinner />;

    if (!this.state.loading) {
      if (this.state.orders.length > 0) {
        orders = this.state.orders.map(
          order => <Order key={order.id} {...order} />
          // { customer: ..., ingredients: ..., price: ... }
        );
      }
      else {
        orders = <h3>There are no orders!</h3>;
      }
    }

    return (
      <ul className={classes.Orders}>
        {orders}
      </ul>
    );
  }
}

export default withErrorHandler(Orders, axios);