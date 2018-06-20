import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';

export default class CartCard extends Component {
    constructor(props) {
        super()
    }
    render() {
        let product = this.props.item;
        return (<div id="cart-card" >
            <div id="cart-thumb" > <img src={product.imgSrc} alt="" />
                <span>
                    <button  >-</button>
                    <span>{product.inCart}</span>
                    <button >+</button>
                </span>
            </div>
            <div id="cart-price" > <span>@ <FormattedNumber value={product.price} style='currency' currency='USD' minimumFractionDigits={2} maximumFractionDigits={2} /> each =  <FormattedNumber value={product.inCart * product.price} style='currency' currency='USD' minimumFractionDigits={2} maximumFractionDigits={2} />  </span>
                <p >Delete</p>
            </div>
        </div>)
    }
}