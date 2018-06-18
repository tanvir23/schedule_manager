import { combineReducers } from 'redux';
import dummy from './dummyReducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    dummy
});

export default rootReducer;
