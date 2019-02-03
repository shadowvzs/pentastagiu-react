export const SHOW_LOADER = '[ui] Show spinner';
export const HIDE_LOADER = '[ui] Hide spinner';
export const SHOW_PRODUCT_EDIT = '[ui] Show product edit';
export const HIDE_PRODUCT_EDIT = '[ui] Hide product edit';

// action => type for show loader
export const showLoader = () => ({
    type: SHOW_LOADER
});

// action => type for hide loader
export const hideLoader = () => ({
    type: HIDE_LOADER
});

// action => type for show edit modal
export const showProductEdit = () => ({
    type: SHOW_PRODUCT_EDIT
});

// action => type for hide edit modal
export const hideProductEdit = () => ({
    type: HIDE_PRODUCT_EDIT
});