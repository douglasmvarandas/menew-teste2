export const SET_USER = 'SET_USER';
export const SET_USER_LOGOUT = 'SET_USER_LOGOUT';

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user,
    }
}

export function setUserLogout() {
    return {
        type: SET_USER_LOGOUT,
        payload: null
    }
}