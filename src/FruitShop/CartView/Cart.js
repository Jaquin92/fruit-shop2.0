import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';
import CartCard from './CartCard';

import './index.css';

export default class Cart extends Component {

    itemsInCart() {
        return this.props.cartItems.map((item, index) => {
            return <CartCard functions={this.props.functions} key={index} item={item} />
        })
    };
    grandTotal() {
        let total = 0;
        this.props.cartItems.map(item => {
            return total += (item.inCart * item.price)
        });
        return total
    }

    render() {
        return (
            <div id='cart' >
                <h2>Shopping Cart</h2>
                {this.itemsInCart()}
                <div id='checkout' >
                    {this.props.cartItems.length >= 1 ? <div>Total <FormattedNumber value={this.grandTotal()} style='currency' currency='USD' minimumFractionDigits={2} maximumFractionDigits={2} />  <br />
                        <button onClick={() => this.props.functions.confirmPurchase()} >Confirm Purchase</button> </div> : <div>Empty Cart</div>}
                </div>
            </div>)
    }
};

