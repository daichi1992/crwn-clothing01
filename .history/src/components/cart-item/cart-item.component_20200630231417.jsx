import React from 'react'; 

import './cart-item.styles.scss'; 

const CartItem = ({item: {imageUrl, price, name}}) =>(
    <div className='cart-item'>
        <img src={} alt='item' />
        <div className='item-details'>
            <span className='name'
        </div>
    </div>
)