import {
    UPDATE_PRODUCTS,
    GET_PRODUCT_BY_ID,
    SET_PRODUCT_PROPERTY,
    RESET_PRODUCT
} from "../Actions/products";

const initialState = {
    products: [],
    product: {}
}

export function productsReducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {...state, products: action.payload};
        case GET_PRODUCT_BY_ID:
            return {...state, product: action.payload};
        case SET_PRODUCT_PROPERTY:
            return {...state, product: {...state.product, ...action.payload}};
        case RESET_PRODUCT:
            return {...state, product: {}};
        default:
            return state;
    }
}
