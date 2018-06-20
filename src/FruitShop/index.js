import React, { Component } from 'react';
import './index.css';

import ShopView from './ShopView';
import CartView from './CartView';



export default class extends Component {
    render() {

        return <div id='app-body'>
            <ShopView />
            <CartView />
        </div>
    }
};