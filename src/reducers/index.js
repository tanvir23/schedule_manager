import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeListReducer from './EmployeeListReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employeeList: EmployeeListReducer
});

export default rootReducer;
