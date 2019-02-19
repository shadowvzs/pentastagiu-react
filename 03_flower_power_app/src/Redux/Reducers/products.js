import {
    UPDATE_PRODUCTS,
    ADD_PRODUCT_STORE,
    UPDATE_PRODUCT_STORE,
    REMOVE_PRODUCT_STORE
} from "../Actions/products";

const initialState = {
    products: []
}

export function productsReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_PRODUCT_STORE:
            return { ...state, products: [ ...state.products, action.payload ] }
        case UPDATE_PRODUCT_STORE:
            return { ...state, products: state.products.map( e => +e.id !== +action.payload.id ? e : action.payload ) }
        case REMOVE_PRODUCT_STORE: 
            return { ...state, products: state.products.filter( e => +e.id !== +action.payload.id)}
        case UPDATE_PRODUCTS:
            return {...state, products: action.payload};
        default:
            return state;
    }
}
