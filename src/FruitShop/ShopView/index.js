import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shop from './Shop';

class ShopView extends Component {

    render() {
        return <Shop products={this.props.data} />
    }
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(ShopView);