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

      // pegar o index do item com id correspondente ao passado pelo parametro
      if (category === 'Drink') {
        const index = state.drinks.findIndex((item) => item.id === id);
        state.drinks[index] = payload;
      } else if (category === 'Restaurant') {
        const index = state.restaurants.findIndex((item) => item.id === id);
        state.restaurants[index] = payload;
      } else {
        const index = state.snacks.findIndex((item) => item.id === id);
        state.snacks[index] = payload;
      }
    },
    deleteItem(state, { payload }) {
      const { id, category } = payload;

      if (category === 'Drink') state.drinks = state.drinks.filter((drink) => drink.id !== id);
      else if (category === 'Restaurant')
        state.restaurants = state.restaurants.filter((restaurant) => restaurant.id !== id);
      else state.snacks = state.snacks.filter((snack) => snack.id !== id);
    },
  },
});

export const { updateProduct, deleteItem } = productSlice.actions;

export default productSlice.reducer;
