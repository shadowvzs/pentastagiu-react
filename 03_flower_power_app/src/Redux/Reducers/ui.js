import { 
    SHOW_LOADER, 
    HIDE_LOADER,
} from "../Actions/ui";

const init = {
    showSpinner: false,
};

export function uiReducer(state = init, action) {

    switch(action.type) {
        case SHOW_LOADER:
            return {...state, showSpinner: true};
        case HIDE_LOADER:
            return {...state, showSpinner: false};
        default:
            return state;
    }
}