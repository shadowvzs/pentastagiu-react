import {
    UPDATE_PRODUCTS,
    ADD_PRODUCT_STORE,
    UPDATE_PRODUCT_STORE,
    REMOVE_PRODUCT_STORE
} from "../Actions/products";

const initialState = [];

export function productsReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_PRODUCT_STORE:
            return [ ...state, action.payload ];
        case UPDATE_PRODUCT_STORE:
            return [...state.map( e => +e.id !== +action.payload.id ? e : action.payload )];
        case REMOVE_PRODUCT_STORE: 
            return [...state.filter( e => +e.id !== +action.payload.id)];
        case UPDATE_PRODUCTS:
            return [...action.payload];
        default:
            return state;
    }
}
