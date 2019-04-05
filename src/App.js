import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <PizzaBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
