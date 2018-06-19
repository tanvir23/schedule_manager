import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/action_types';

const initialState = {
    name: '',
    phone: '',
    shift: 'thurs'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return initialState;
        default:
            return state;
    }
};
