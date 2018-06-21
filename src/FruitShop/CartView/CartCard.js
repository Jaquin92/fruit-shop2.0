import React, { Component } from 'react';
//converts decimal numbers in to usd
import { FormattedNumber } from 'react-intl';

export default class CartCard extends Component {

    render() {
        let product = this.props.item;
        return (<div id="cart-card" >
            <div id="cart-thumb" > <img src={product.imgSrc} alt="" />
                <span>
                    <button onClick={() => this.props.functions.decrementFromCart(product)}  >-</button>
                    <span>{product.inCart}</span>
                    <button onClick={() => this.props.functions.addToCart(product)} >+</button>
                </span>
            </div>
            <div id="cart-price" > <span>@ <FormattedNumber value={product.price} style='currency' currency='USD' minimumFractionDigits={2} maximumFractionDigits={2} /> each =  <FormattedNumber value={product.inCart * product.price} style='currency' currency='USD' minimumFractionDigits={2} maximumFractionDigits={2} />  </span>
                <p onClick={() => this.props.functions.deleteFromCart(product)} >Delete</p>
            </div>
        </div>)
    }
};