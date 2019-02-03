import { 
    SHOW_LOADER, 
    HIDE_LOADER,
    SHOW_PRODUCT_EDIT,
    HIDE_PRODUCT_EDIT
} from "../Actions/ui";

const init = {
    showSpinner: false,
    productEdit: false
};

export function uiReducer(state = init, action) {

    switch(action.type) {
        case SHOW_LOADER:
            return {...state, showSpinner: true};
        case HIDE_LOADER:
            return {...state, showSpinner: false};
        case SHOW_PRODUCT_EDIT:
            return {...state, productEdit: true};
        case HIDE_PRODUCT_EDIT:
            return {...state, productEdit: false};
        default:
            return state;
    }
}