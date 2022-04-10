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
      else if (category === 'Restaurant') state.restaurants[id] = payload;
      else state.snacks[id] = payload;
    },
    deleteItem(state, { payload }) {
      const { id, category } = payload;

      if (category === 'Drink') state.drinks = state.drinks.filter((drink) => drink.id !== id);
      else if (category === 'Restaurant')
        state.restaurants.filter((restaurant) => restaurant.id !== id);
      else state.snacks = state.snacks.filter((snack) => snack.id !== id);
    },
  },
});

export const { updateProduct, deleteItem } = productSlice.actions;

export default productSlice.reducer;
