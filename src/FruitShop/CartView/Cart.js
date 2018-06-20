import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';
import CartCard from './CartCard';

import './index.css';

export default class Cart extends Component {

    itemsInCart() {
        return this.props.cartItems.map((item, index) => {
            return <CartCard key={index} item={item} />
        })
    };

    render() {
        return (
            <div id='cart' >
                <h2>Shopping Cart</h2>
                {this.itemsInCart()}
                <div id='checkout' >
                    {this.props.cartItems.length >= 1 ? <div>Total:$ <br />
                        <button >Confirm Purchase</button> </div> : <div>Empty Cart</div>}
                </div>
            </div>)
    }
};

