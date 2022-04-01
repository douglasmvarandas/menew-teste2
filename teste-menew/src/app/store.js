import { configureStore } from '@reduxjs/toolkit';
import reducers from '../redux/reducers';

export const store = configureStore({
  reducer: {
    Login: reducers.Login,
    Cadastro: reducers.Cadastro,
    Itens: reducers.Itens,
  },
});
