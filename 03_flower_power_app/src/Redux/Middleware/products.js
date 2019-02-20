import {
  GET_PRODUCTS,                         // get all products
  UPDATE_PRODUCTS,                      // update products in store

  FETCH_PRODUCTS_ERROR,                 // get all products request returned with error
  FETCH_PRODUCT_SAVE_EDIT_ERROR,        // save product request returned with error

  DELETE_PRODUCT,                       // delete a single product request
  REMOVE_PRODUCT_STORE,                 // remove product from store
  FETCH_DELETE_PRODUCT_ERROR,           // delete product request returned with error

  SAVE_PRODUCT_ADD,                     // save new product
  ADD_PRODUCT_STORE,                    // add item into store

  SAVE_PRODUCT_EDIT,                    // save edited product
  UPDATE_PRODUCT_STORE,                 // update item in store
} from "../Actions/products";
import { apiRequest } from "../Actions/api";
import {
  showLoader,           // show spinner
  hideLoader,           // hide spinner
} from "../Actions/ui";

// send request for all products
export const getProducts = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === GET_PRODUCTS) {
    dispatch(
      apiRequest(
        "/products",
        "GET",
        null,
        UPDATE_PRODUCTS,
        FETCH_PRODUCTS_ERROR
      )
    );
    dispatch(showLoader());
  }
};

//put all products from response into store
export const processProductsCollection = ({dispatch}) => next => action => {
  next(action);

  if(action.type === UPDATE_PRODUCTS) {
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
        REMOVE_PRODUCT_STORE,
        FETCH_DELETE_PRODUCT_ERROR
      )
    );
    dispatch(showLoader());
  }
};

// hide loader after product was saved successfully
export const processDeleteProduct = ({dispatch}) => next => action => {
  next(action);
  if(action.type === REMOVE_PRODUCT_STORE) {
    dispatch(hideLoader());
  }
}

// Save edited product request
export const addProductById = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === SAVE_PRODUCT_ADD) {
    dispatch(showLoader());
    dispatch(
      apiRequest(
        `/products`,
        'POST',
        { body: { product: action.payload } },
        ADD_PRODUCT_STORE,
        FETCH_PRODUCT_SAVE_EDIT_ERROR,
        action.history
      )
    );
  }
};

// hide loader after product was saved successfully
export const processSaveAddProduct = ({dispatch}) => next => action => {
  next(action);

  if(action.type === ADD_PRODUCT_STORE) {
    dispatch(hideLoader());
    if (action.extra) {
      action.extra.push('/');
    }
  }
}


// Save edited product request
export const saveProductById = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === SAVE_PRODUCT_EDIT) {
    dispatch(showLoader());
    dispatch(
      apiRequest(
        `/products`,
        'PUT',
        { body: action.payload },
        UPDATE_PRODUCT_STORE,
        FETCH_PRODUCT_SAVE_EDIT_ERROR,
        action.history
      )
    );
  }
};

// hide loader after product was saved successfully
export const processSaveEditProduct = ({dispatch}) => next => action => {
  next(action);

  if(action.type === UPDATE_PRODUCT_STORE) {
    dispatch(hideLoader());
    if (action.extra) {
      action.extra.push('/');
    }
  }
}

export const productsMdl = [
  getProducts,                         // send request for products
  processProductsCollection,           // process when all products arrived
  processSaveEditProduct,              // update the edited item in collection
  saveProductById,                     // save product request
  processSaveAddProduct,
  deleteProduct,                       // delete product request
  addProductById,                      // add product to store
];
