export const GET_PRODUCTS = '[products] Send request for all products';
export const UPDATE_PRODUCTS = '[products] Update all products in store';

export const FETCH_PRODUCTS_ERROR = '[products] Get all products encountered an error';

export const DELETE_PRODUCT = '[products] Delete product';
export const REMOVE_PRODUCT_STORE = '[products] Remove product from store';
export const FETCH_DELETE_PRODUCT_ERROR = '[products] Delete single encountered an error';

export const SAVE_PRODUCT_ADD = '[product] Save the added product';
export const ADD_PRODUCT_STORE = '[product] added the new product to store';

export const SAVE_PRODUCT_EDIT = '[product] Save the edited product';
export const UPDATE_PRODUCT_STORE = '[product] Update product in store';

export const FETCH_PRODUCT_SAVE_EDIT_ERROR = '[products] product not was saved';

// get all products
export const getProducts = () => ({
    type: GET_PRODUCTS
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


// send request for product deletion
export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
});