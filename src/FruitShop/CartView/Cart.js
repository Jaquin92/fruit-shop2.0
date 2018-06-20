import React, { Component } from 'react';
import CartCard from './CartCard';
import { connect } from 'react-redux';
import './index.css';

class Cart extends Component {

    itemsInCart() {
        return this.props.cart.map((item, index) => {
            return <CartCard key={index} item={item} />
        })
    }

    render() {
        return (
            <div id='cart' >
                <h2>Shopping Cart</h2>
                {this.itemsInCart()}
                <div id='checkout' >
                    {this.props.cart.length >= 1 ? <div>Total:$ <br />
                        <button >Confirm Purchase</button> </div> : <div>Empty Cart</div>}
                </div>
            </div>)
    }
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Cart);