import { SET_USER, SET_USER_LOGOUT } from '../action/user.action';

export default function userReducer(state = null, action) {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        case SET_USER_LOGOUT:
            return null;
        default:
            return state;
    }
}