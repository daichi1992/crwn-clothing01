export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exixtingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
}