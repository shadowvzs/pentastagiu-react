export const SHOW_LOADER = '[ui] Show spinner';
export const HIDE_LOADER = '[ui] Hide spinner';
export const PRODUCT_EDIT_STARTED = '[ui] Change to edit';
export const PRODUCT_EDIT_FINISHED = '[ui] Change back from edit';

export const showLoader = () => ({
    type: SHOW_LOADER
});

export const hideLoader = () => ({
    type: HIDE_LOADER
});

export const startEditProduct = (id) => ({
    type: PRODUCT_EDIT_STARTED,
    payload: id
});

export const finishEditProduct = () => ({
    type: PRODUCT_EDIT_FINISHED
});
