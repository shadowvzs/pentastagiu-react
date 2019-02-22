import { createStore, compose } from "redux";
import { applyMiddleware } from "redux";
import { reducers } from "./Reducers";
import { api } from "./Middleware/api";
import { productsMdl } from "./Middleware/products";
import { cartMdl } from "./Middleware/cart";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    // compose all middleware with destructuring
    composeEnhancers(applyMiddleware(...productsMdl, ...cartMdl, api))
);