import {
    UPDATE_PRODUCTS,
} from "../Actions/products";

const initialState = {
    products: []
}

export function productsReducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {...state, products: action.payload};
        default:
            return state;
    }
}
