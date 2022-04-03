import { SIGNIN } from "./actionType";
import { AnyAction } from 'redux'


export const signinReducer = (state = [] , action: AnyAction) => {
  switch (action.type) {
    case SIGNIN:
      return (state = action.payload.user)
    default:
      return state;
  }
};

