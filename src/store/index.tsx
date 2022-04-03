import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./product/reducer"
import { signinReducer } from "./signin/reducer";
import { userReducer } from "./user/reducer";

const reducers = combineReducers({
  product: productReducer,
  signin: signinReducer,
  user: userReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export { store };