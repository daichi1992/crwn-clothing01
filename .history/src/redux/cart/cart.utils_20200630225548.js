export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exixtingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    ); 

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity}
        )
    }
}