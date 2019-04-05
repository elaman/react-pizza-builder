import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Route path="/" component={PizzaBuilder} exact />
            <Route path="/checkout" component={Checkout} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
