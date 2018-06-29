import React, { Component } from 'react';
import ShopCard from './ShopCard';

import './index.css';

export default class Shop extends Component {
    //returns shopcards containing inventory information
    product() {
        return this.props.products.map((item, index) => {
            return <ShopCard addToCart={this.props.addToCart} key={index} product={item} />
        })
    }

    render() {
        return <div id='shop' >{this.product()}</div>
    }
};

