import { combineReducers } from 'redux';
import { uiReducer } from './ui';
import { productsReducer } from './products';
import { cartReducer } from './cart';

export const reducers = combineReducers({
    ui: uiReducer,
    products: productsReducer,
    cart: cartReducer
});