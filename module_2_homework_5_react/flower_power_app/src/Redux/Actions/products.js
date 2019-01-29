export const GET_PRODUCTS = '[products] Get all products';
export const UPDATE_PRODUCTS = '[products] Update all products in state';
export const FETCH_PRODUCTS_SUCCESS = '[products] Get all products was successful';
export const FETCH_PRODUCTS_ERROR = '[products] Get all products encountered an error';

export const GET_PRODUCT_BY_ID = '[product] Get a single product';
export const FETCH_PRODUCT_SUCCESS = '[products] Get single was successful';
export const FETCH_PRODUCT_ERROR = '[products] Get single encountered an error';

export const DELETE_PRODUCT = '[products] Delete product';
export const FETCH_DELETE_PRODUCT_ERROR = '[products] Delete single encountered an error';

export const SAVE_EDIT_PRODUCT = '[product] Save the edited product';
export const SET_SAVE_EDIT_PRODUCT = '[product] Set save edit product';

export const FETCH_PRODUCT_SAVE_EDIT_SUCCESS = '[products] product was saved successfully';
export const FETCH_PRODUCT_SAVE_EDIT_ERROR = '[products] product not was saved';
export const RESET_PRODUCT = '[product] Reset product';
//export const GET_NAME_PRODUCT = '[product] get product name';
export const SET_PRODUCT_PROPERTY = '[product] set product property with input';

export const getProducts = () => ({
    type: GET_PRODUCTS
});

export const updateProducts = (products) => ({
    type: UPDATE_PRODUCTS,
    payload: products
});

export const getProductById = (product) => ({
    type: GET_PRODUCT_BY_ID,
    payload: product
});

export const saveProductEdit = (editProduct) => ({
    type: SAVE_EDIT_PRODUCT,
    payload: editProduct
});

export const setSaveProduct = () => ({
    type: SET_SAVE_EDIT_PRODUCT
});

export const resetProduct = () => ({
    type: RESET_PRODUCT
});

// if name changed for edited product
export const setInputProduct = (prop) => ({
    type: SET_PRODUCT_PROPERTY,
    payload: prop
});

// send request for product deleteion
export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
});

// execute product deleteion
/*
export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
});
*/
