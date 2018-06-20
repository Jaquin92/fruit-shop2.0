import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';

class CartView extends Component {

    render() {
        return <Cart cartItems={this.props.cart} />
    }


};
const mapStateToProps = state => state;
export default connect(mapStateToProps)(CartView);