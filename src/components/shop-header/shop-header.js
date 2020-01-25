import React from 'react';
import './shop-header.css';

const ShopHeader = ({numItems, total}) => {
    return(
        <header className="shop-header row">
            <a href = "/" className="logo text-dark">ReStore</a>
            <span className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </span>
        </header>
    );
};

export default ShopHeader;
