import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productsReducers";
import { cartReducer } from "./reducers/cartReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
