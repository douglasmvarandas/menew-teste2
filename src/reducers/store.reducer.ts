import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user.slice';
import productReducer from './slices/product.slice';

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});
