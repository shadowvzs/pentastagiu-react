export const ADD_CART_PRODUCT = '[cart] Add new product into cart';
export const MODIFY_CART_PRODUCT = '[cart] Modify cart product amount';
export const REMOVE_CART_PRODUCT = '[cart] Remove product from cart';
export const UPDATE_CART_PRODUCT = '[cart] Update whole cart';

// add cart product
export const addCartProduct = product => ({
    type: ADD_CART_PRODUCT,
    payload: product
});


// modify cart product quantity, up/down
export const modifyCartProduct = ( id, quantity ) => ({
    type: MODIFY_CART_PRODUCT,
    payload: { id, quantity }
});

// remove cart product
export const removeCartProduct = id => ({
    type: REMOVE_CART_PRODUCT,
    payload: id
});


// remove cart product
export const updateCartProduct = cart => ({
    type: UPDATE_CART_PRODUCT,
    payload: cart
});