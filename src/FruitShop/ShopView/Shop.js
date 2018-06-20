import React, { Component } from 'react';
import ShopCard from './ShopCard';
import { connect } from 'react-redux';

import './index.css';

class Shop extends Component {

    product() {
        return this.props.data.map((item, index) => {
            return <ShopCard key={index} product={item} />
        })
    }

    render() {

        return <div id='shop' >{this.product()}</div>
    }
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Shop);