import { PRODUCT, LIST_PRODUCT, PRODUCT_ID } from "./actionType";
import { AnyAction } from 'redux'

export const productReducer = (state = [], action: AnyAction) => {
  switch (action.type) {
    case PRODUCT:
      return (state = action.payload.product);
    case LIST_PRODUCT:
      return (state = action.payload.list);
    case PRODUCT_ID:
      return (state = action.payload.oneProduct);
    default:
      return state;
  }
};