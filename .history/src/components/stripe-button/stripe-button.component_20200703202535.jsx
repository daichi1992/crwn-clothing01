import React from 'react'; 
import StripeCheckout from 'react-stripe-checkout'; 

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_51H0mjTFXVxFO5rxmngJOYmdarbPlCYVpCS7eOaACgjpp1nx7CJY0tp1c2zq4pT3VS0OdDiMh61RwakY904ZQXaS500eLGhOeGr'; 

    return (
        <StripeCheckout 
            label='Pay Now'
            name ='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https:://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
    )
}