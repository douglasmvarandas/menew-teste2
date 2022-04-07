import { createSlice } from '@reduxjs/toolkit';
import { iProducts, DrinksCollection, RestaurantsCollection, SnacksCollection } from '../../db';
export interface iProductsInitialState {
  drinks: iProducts[];
  restaurants: iProducts[];
  snacks: iProducts[];
}

const initialState = {
  drinks: DrinksCollection,
  restaurants: RestaurantsCollection,
  snacks: SnacksCollection,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateProduct(state, { payload }) {
      const { id, category } = payload;

      if (category === 'Drink') state.drinks[id] = payload;
      else if (category === 'Restaurant') state.drinks[id] = payload;
      else state.drinks[id] = payload;
    },
  },
});

export const { updateProduct } = productSlice.actions;

export default productSlice.reducer;
