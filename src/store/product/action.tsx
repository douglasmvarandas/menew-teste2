import { PRODUCT, LIST_PRODUCT, PRODUCT_ID } from "./actionType";
import { ProductProps } from "./thunk";


export const product = (product: ProductProps) => ({
  type: PRODUCT,
  payload: { product },
});

export const list = (list: ProductProps[]) => ({
  type: LIST_PRODUCT,
  payload: { list },
});

export const oneProduct = (product: ProductProps) => ({
  type: PRODUCT_ID,
  payload: { product },
});