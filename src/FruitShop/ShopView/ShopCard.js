import React, { Component } from 'react';

class ShopCard extends Component {
    constructor(props) {
        super()
    };
    render() {
        let product = this.props.product;

        return (
            <div id='item-card' >
                <img src={product.imgSrc} alt="fruit product" />
                <span id='item-name' >{product.itemName.charAt(0).toUpperCase() + product.itemName.slice(1)}</span>
                <span>${product.price}</span>
                <span>{product.quantityRemaining} In Stock</span>
                <button id='add-to-cart' >Add to Cart</button>
            </div>)

    }
}

export default ShopCard;