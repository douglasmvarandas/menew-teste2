import { PRODUCT, LIST_PRODUCT, PRODUCT_ID } from "./actionType";
import { ProductProps } from "./thunk";


export const list = (list: ProductProps[]) => ({
  type: LIST_PRODUCT,
  payload: { list },
});

export const oneProduct = (productId: ProductProps) => ({
  type: PRODUCT_ID,
  payload: { productId },
});