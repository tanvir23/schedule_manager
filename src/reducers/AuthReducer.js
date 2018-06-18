import {
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAILED, FETCHING_USER
} from '../actions/action_types';

const initialState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: '',
                loading: false
            };
        case LOGIN_FAILED:
            return { ...state, error: 'Authentication Failed', loading: false };
        case FETCHING_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};
