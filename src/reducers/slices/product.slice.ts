import { createSlice } from '@reduxjs/toolkit';

import { iProducts, DrinksCollection, RestaurantsCollection, SnacksCollection } from '../../db';

const initialState = [
  {
    drinks: DrinksCollection,
    restaurants: RestaurantsCollection,
    snacks: SnacksCollection,
  },
];

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateProduct(state, { payload }) {
      const { id, category } = payload;

      return { ...state, ...initialState, ...payload };
    },
  },
});

export const { updateProduct } = productSlice.actions;

export const selectProduct = (state: iProducts) => state;

export default productSlice.reducer;
