import React, { Component } from 'react';
import ShopCard from './ShopCard';

import './index.css';

export default class Shop extends Component {

    product() {
        return this.props.products.map((item, index) => {
            return <ShopCard key={index} product={item} />
        })
    }

    render() {

        return <div id='shop' >{this.product()}</div>
    }
};

