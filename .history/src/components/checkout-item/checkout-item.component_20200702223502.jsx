import React from 'react'; 

import './checkout-item.styles.scss'; 

const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={} alt='item' />
        </div>
        <span className='name'></span>
        <span className='quantity'></span>
        <span className='price'></span>
        <span className='remove-button'></span>
    </div>
)