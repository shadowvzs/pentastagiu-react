export const GET_PRODUCTS = '[products] Send request for all products';
export const GET_PRODUCT = '[products] Send request for single products';

export const UPDATE_PRODUCTS = '[products] Update all products in state';
export const FETCH_PRODUCTS_SUCCESS = '[products] Get all products was successful';
export const FETCH_PRODUCTS_ERROR = '[products] Get all products encountered an error';

export const GET_PRODUCT_BY_ID = '[product] Get a single product';
export const FETCH_PRODUCT_SUCCESS = '[products] Get single was successful';
export const FETCH_PRODUCT_ERROR = '[products] Get single encountered an error';

export const DELETE_PRODUCT = '[products] Delete product';
export const FETCH_DELETE_PRODUCT_ERROR = '[products] Delete single encountered an error';

export const SAVE_PRODUCT_EDIT = '[product] Save the edited product';
export const SAVE_PRODUCT_ADD = '[product] Save the added product';

export const FETCH_PRODUCT_SAVE_EDIT_SUCCESS = '[products] product was saved successfully';
export const FETCH_PRODUCT_SAVE_EDIT_ERROR = '[products] product not was saved';
export const RESET_PRODUCT = '[product] Reset product';

// get all products
export const getProducts = () => ({
    type: GET_PRODUCTS
});

// get single product by id
export const getProduct = (id) => ({
    type: GET_PRODUCT,
    payload: id
});

// add products from response into store (products)
export const updateProducts = (products) => ({
    type: UPDATE_PRODUCTS,
    payload: products
});

// add single product from response into store (product)
export const getProductById = (product) => ({
    type: GET_PRODUCT_BY_ID,
    payload: product
});

// send add product form data to backend
export const saveProductAdd = (addProduct) => ({
    type: SAVE_PRODUCT_ADD,
    payload: addProduct
});

// send edited product form data
export const saveProductEdit = (product) => ({
    type: SAVE_PRODUCT_EDIT,
    payload: product
});

// reset the product
export const resetProduct = () => ({
    type: RESET_PRODUCT
});

// send request for product deletion
export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
});