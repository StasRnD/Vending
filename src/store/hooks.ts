import { useSelector } from 'react-redux';
import { rootState } from '../types';

export const useProducts = () => {
  return useSelector((state: rootState) => state.vendingMachine.listProducts);
};

export const useDepositAmount = () => {
  return useSelector((state: rootState) => state.vendingMachine.depositAmount);
};

export const useChosenProduct = () => {
  return useSelector((state: rootState) => state.vendingMachine.chosenProduct);
};
