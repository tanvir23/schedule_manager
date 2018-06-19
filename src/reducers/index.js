import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});

export default rootReducer;
