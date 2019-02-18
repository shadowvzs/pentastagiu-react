export const SHOW_LOADER = '[ui] Show spinner';
export const HIDE_LOADER = '[ui] Hide spinner';

// action => type for show loader
export const showLoader = () => ({
    type: SHOW_LOADER
});

// action => type for hide loader
export const hideLoader = () => ({
    type: HIDE_LOADER
});