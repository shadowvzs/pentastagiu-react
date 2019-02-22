import {
    UPDATE_CART_PRODUCT
} from "../Actions/cart";

const initialState = localStorage.cart ? JSON.parse(localStorage.cart) : [];

export function cartReducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_CART_PRODUCT: 
            return [...action.payload];
        default:
            return state;
    }
}
