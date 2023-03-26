import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { vendingMachineReducer } from './reducer';

export const store = configureStore({
  reducer: combineReducers({
    vendingMachine: vendingMachineReducer.reducer,
  }),
});
