import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productsReducer } from './reducer';

export const store = configureStore({
  reducer: combineReducers({
    vendingMachine: productsReducer,
  }),
});
