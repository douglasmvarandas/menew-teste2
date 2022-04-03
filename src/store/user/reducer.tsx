import { USER, FILTER_USER } from "./actionType";
import { AnyAction } from 'redux'

export const userReducer = (state = [], action: AnyAction) => {
  switch (action.type) {
    case USER:
      return (state = action.payload.user);
    case FILTER_USER:
      return (state = action.payload.user);
    default:
      return state;
  }
};