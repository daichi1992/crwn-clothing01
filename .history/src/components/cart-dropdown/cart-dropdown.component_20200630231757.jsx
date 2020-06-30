import React from 'react'; 

import CustomButton from '../custom-button/custom-button.component'; 
import {} from '../cart-item/'

import './cart-dropdown.styles.scss'; 

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropDown; 