import { SELECTED_ID } from "./actionType";
import { AnyAction } from 'redux'

export const selectedIdReducer = (state = 0, action: AnyAction) => {
  switch (action.type) {
    case SELECTED_ID:
      return (state = action.payload.id);
    default:
      return state;
  }
};