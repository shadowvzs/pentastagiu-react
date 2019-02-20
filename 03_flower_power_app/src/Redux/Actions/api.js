export const API_REQUEST = '[api] Api Request';

export const apiRequest = (url, method, body, onSuccess, onError, extra) => {
    return ({
    type: API_REQUEST,
    meta: {
        body, url, method, onSuccess, onError, extra
    }
})
};