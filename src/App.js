import React, { Component } from 'react';
import Header from './components/FruitShop/Header';
import routes from './routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
