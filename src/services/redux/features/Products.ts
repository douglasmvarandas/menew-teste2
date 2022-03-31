import { createSlice } from "@reduxjs/toolkit";
import { products } from "./productList";

export type ProductProps = {
  id: number;
  name: string;
  description: string;
  img: string;
};

const value: ProductProps[] = [...products.value];

export const productSlice = createSlice({
  name: "products",
  initialState: { value },
  reducers: {
    updateProduct: (state, action) => {
      state.value.forEach((product) => {
        if (product.id === action.payload.id) {
          product.description = action.payload.description;
        }
      });
    },
  },
});

export const { updateProduct } = productSlice.actions;
export default productSlice.reducer;
