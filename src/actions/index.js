import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAILED, FETCHING_USER
} from './action_types';

export const emailChanged = (email) => ({
    type: EMAIL_CHANGED,
    payload: email
});

export const passwordChanged = (password) => ({
    type: PASSWORD_CHANGED,
    payload: password
});

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: FETCHING_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            loginUserSuccess(dispatch, user);
        })
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user);
            })
            .catch(() => {
                loginUserFailed(dispatch);
            });
        });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_SUCCESS, payload: user });
    Actions.employeeList();
};

const loginUserFailed = (dispatch) => {
    dispatch({ type: LOGIN_FAILED });     
};
