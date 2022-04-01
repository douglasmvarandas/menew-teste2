const actions = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',

    loginSuccess: () => ({
        type: actions.LOGIN_SUCCESS,
    }),
    login_failure: () => ({
        type: actions.LOGIN_FAILURE,
    }),

};
export default actions;
