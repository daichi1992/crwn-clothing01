import React from 'react'; 
import StripeCheckout from 'react-stripe-checkout'; 

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100; 
    const publishableKey = 
}