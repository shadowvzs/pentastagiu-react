import {
    ADD_CART_PRODUCT,
    MODIFY_CART_PRODUCT,
    REMOVE_CART_PRODUCT,
    updateCartProduct
} from "../Actions/cart";

  
 
// Add product into cart
export const addCartProduct = ({ dispatch, getState }) => next => action => {
    next(action);
    if (action.type === ADD_CART_PRODUCT) {
        const cart = [...getState().cart];
        const index = cart.findIndex( item => +item.id === action.payload.id );
       
        if (index > -1) {
            cart[index].quantity++;
        } else {
            cart.push({...action.payload, quantity: 1})
        }
        localStorage.cart = JSON.stringify(cart);
        dispatch(updateCartProduct(cart));
    }
};
  
// modify the product amount in cart
export const modifyCartProduct = ({dispatch, getState}) => next => action => {
    next(action);
  
    if(action.type === MODIFY_CART_PRODUCT) {
        const cart = [...getState().cart];
        const { id, quantity } = action.payload;
        const index = cart.findIndex( item => +item.id === +id );

        if (index === -1) { return; }
           
        if (+quantity === 0) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = +quantity;
        }
    
        localStorage.cart = JSON.stringify(cart);
        dispatch(updateCartProduct(cart));
    }
}

// remove product type from cart
export const removeCartProduct = ({ dispatch, getState }) => next => action => {
    next(action);
    if (action.type === REMOVE_CART_PRODUCT) {
        const cart = [...getState().cart];
        const index = cart.findIndex( item => +item.id === +action.payload );
        console.log(index);
        if (index === -1) { return; }
        cart.splice(index, 1);
        localStorage.cart = JSON.stringify(cart);
        dispatch(updateCartProduct(cart));
    }
};
  
export const cartMdl = [
    removeCartProduct,                    // delete product from cart
    addCartProduct,                       // add product to cart
    modifyCartProduct,                    // modify product in cart
];
  