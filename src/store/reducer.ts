import { VendingMachineState, Product } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const products: Product[] = [
  {
    name: 'Lay’s',
    category: 'Chips',
    cost: 75,
    number: 1,
  },
  {
    name: 'Coca-Cola',
    category: 'Drink',
    cost: 180,
    number: 2,
  },
  {
    name: 'Light',
    category: 'Rusks',
    cost: 220,
    number: 3,
  },
  {
    name: 'Chaka',
    category: 'Peanut',
    cost: 600,
    number: 4,
  },
  {
    name: 'Water',
    category: 'Drink',
    cost: 40,
    number: 5,
  },
  {
    name: 'Fanta',
    category: 'Cold Drink',
    cost: 400,
    number: 6,
  },
  {
    name: 'Nutella',
    category: 'Chocolate paste',
    cost: 550,
    number: 7,
  },
];

const defaultState: VendingMachineState = {
  listProducts: products,
  chosenProduct: 0,
  depositAmount: 0,
};

export const vendingMachineReducer = createSlice({
  name: 'vendingMachineReducer',
  initialState: defaultState,
  reducers: {
    setDepositAction(state, action: PayloadAction<number>) {
      state.depositAmount = action.payload;
    },
    setSelectedProductAction(state, action: PayloadAction<number>) {
      state.chosenProduct = action.payload;
    },
  },
});

export const { setDepositAction, setSelectedProductAction } =
  vendingMachineReducer.actions;
