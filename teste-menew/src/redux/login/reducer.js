import actions from './actions';

const initialState = {
    isAuthenticated: false,
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case actions.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
            };
        case actions.LOGOUT_REQUEST:
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
}
