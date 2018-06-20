import React, { Component } from 'react';
import Header from './FruitShop/Header';
import FruitShop from './FruitShop';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FruitShop />
      </div>
    );
  }
}

export default App;
