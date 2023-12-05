import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  itemListReducer,
  itemDetailsReducer,
} from './reducers/productReducers';
import { basketReducer } from './reducers/basketReducer';
import Cookie from 'js-cookie';

const basketItems = Cookie.getJSON('basketItems') || [];

const initialState = { basket: { basketItems } };
const reducer = combineReducers({
  itemList: itemListReducer,
  itemDetails: itemDetailsReducer,
  basket: basketReducer,
});

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhacer(applyMiddleware(thunk))
);

export default store;
