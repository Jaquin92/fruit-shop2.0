import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';

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
                <FormattedNumber value={product.price} style='currency' currency='USD' minimumFractionDigits={2} maximumFractionDigits={2} />
                <span>{product.quantityRemaining} In Stock</span>
                <button id='add-to-cart' >Add to Cart</button>
            </div>)

    }
}

export default ShopCard;