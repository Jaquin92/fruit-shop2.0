import React, { Component } from 'react';

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
            <div id="cart-price" > <span>@ ${product.price} each =  <span>${product.inCart * product.price}</span> </span>
                <p >Delete</p>
            </div>
        </div>)
    }
}