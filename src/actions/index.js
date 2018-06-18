import { EMAIL_CHANGED, PASSWORD_CHANGED } from './action_types';

export const emailChanged = (email) => ({
    type: EMAIL_CHANGED,
    payload: email
});

export const passwordChanged = (password) => ({
    type: PASSWORD_CHANGED,
    payload: password
});
