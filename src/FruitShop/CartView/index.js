import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, decrementFromCart, deleteFromCart, confirmPurchase } from '../../ducks/reducer'
import Cart from './Cart';

class CartView extends Component {
    render() {
        // functions to be passed down as props
        let cartFunctions = {
            decrementFromCart: this.props.decrementFromCart,
            addToCart: this.props.addToCart,
            deleteFromCart: this.props.deleteFromCart,
            confirmPurchase: this.props.confirmPurchase
        };

        return <Cart functions={cartFunctions} cartItems={this.props.cart} />
    }


};
const mapStateToProps = state => state;
export default connect(mapStateToProps, { addToCart, decrementFromCart, deleteFromCart, confirmPurchase })(CartView);