import {
  GET_PRODUCTS,                 // get all products
  FETCH_PRODUCTS_SUCCESS,       // get all products request returned with success
  FETCH_PRODUCTS_ERROR,         // get all products request returned with error
  FETCH_PRODUCT_SUCCESS,        // get a single product request returned with success
  FETCH_PRODUCT_ERROR,          // get a single product request returned with error
  SET_SAVE_EDIT_PRODUCT,                // save product request
  FETCH_PRODUCT_SAVE_EDIT_SUCCESS,      // save product request returned with success
  FETCH_PRODUCT_SAVE_EDIT_ERROR,        // save product request returned with error
  DELETE_PRODUCT,                       // delete a single product request
  FETCH_DELETE_PRODUCT_SUCCESS,         // delete product request returned with success
  FETCH_DELETE_PRODUCT_ERROR,           // delete product request returned with error
  updateProducts,                       // we got all products then we add into store
  getProductById,                       // we got the selected item and we put into store
  resetProduct,                         // reset product
  getProducts
} from "../Actions/products";
import { apiRequest } from "../Actions/api";
import {
  showLoader,           // show spinner
  hideLoader,           // hide spinner
  finishEditProduct,    // hide edit panel
  PRODUCT_EDIT_STARTED  // request for single product
} from "../Actions/ui";

// send request for all products
export const getProductsFlow = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === GET_PRODUCTS) {
    dispatch(
      apiRequest(
        "/products",
        "GET",
        null,
        FETCH_PRODUCTS_SUCCESS,
        FETCH_PRODUCTS_ERROR
      )
    );
    dispatch(showLoader());
  }
};

//put all products from response into store
export const processProductsCollection = ({dispatch}) => next => action => {
  next(action);

  if(action.type === FETCH_PRODUCTS_SUCCESS) {
      dispatch(updateProducts(action.payload));
      dispatch(hideLoader());
  }
}

// send reuqest for single product
export const productById = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === PRODUCT_EDIT_STARTED) {
    dispatch(
      apiRequest(
        `/products/${action.payload}`,
        "GET",
        null,
        FETCH_PRODUCT_SUCCESS,
        FETCH_PRODUCT_ERROR
      )
    );
    dispatch(showLoader());
  }
};


// update a single product if request was success
export const processProduct = ({dispatch}) => next => action => {
  next(action);
  if(action.type === FETCH_PRODUCT_SUCCESS) {
      dispatch(getProductById(action.payload));
      dispatch(hideLoader());
  }
}

// send reuqest for single product
export const deleteProduct = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === DELETE_PRODUCT) {
    dispatch(
      apiRequest(
        `/products/${action.payload}`,
        "DELETE",
        null,
        FETCH_DELETE_PRODUCT_SUCCESS,
        FETCH_DELETE_PRODUCT_ERROR
      )
    );
    dispatch(showLoader());
  }
};

// update a single product if request was success
export const processDeleteProduct = ({dispatch}) => next => action => {
  next(action);
  if(action.type === FETCH_DELETE_PRODUCT_SUCCESS) {
      dispatch(getProducts());
      dispatch(hideLoader());
  }
}

// Save edited product request
export const saveProductById = ({ dispatch, getState }) => next => action => {
  next(action);
  if (action.type === SET_SAVE_EDIT_PRODUCT) {
    dispatch(showLoader());
    const state = getState();
    dispatch(
      apiRequest(
        `/products`,
        "PUT",
        { body: state.products.product },
        FETCH_PRODUCT_SAVE_EDIT_SUCCESS,
        FETCH_PRODUCT_SAVE_EDIT_ERROR
      )
    );
  }
};

export const processSaveEditProductCollection = ({dispatch}) => next => action => {
  next(action);

  if(action.type === FETCH_PRODUCT_SAVE_EDIT_SUCCESS) {
    dispatch(hideLoader());
    dispatch(finishEditProduct());
    dispatch(resetProduct(action.payload));
  }
}



export const productsMdl = [
    getProductsFlow,              // send request for products
    processProductsCollection,    // process when all products arrived
    productById,                  // send request for single product
    processProduct,               // process that single product
    processSaveEditProductCollection,    // update the edited item in collection
    saveProductById,                     // save product request
    deleteProduct,                       // save product request
    processDeleteProduct,                // save product request
];
