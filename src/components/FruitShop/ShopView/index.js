import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../ducks/reducer';
import Shop from './Shop';

class ShopView extends Component {

    render() {
        return <Shop addToCart={this.props.addToCart} products={this.props.inventory} />
    }
};

const mapStateToProps = state => state;
export default connect(mapStateToProps, { addToCart })(ShopView);