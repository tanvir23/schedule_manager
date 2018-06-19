import { EMPLOYEE_FECTH_SUCCESS } from '../actions/action_types';

const initialState = {
    
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEE_FECTH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
