import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../types';
import { setDepositAction } from './reducer';

export const useProducts = () => {
  return useSelector((state: rootState) => state.vendingMachine.listProducts);
};

export const useDepositAmount = () => {
  return useSelector((state: rootState) => state.vendingMachine.depositAmount);
};

export const useChosenProduct = () => {
  return useSelector((state: rootState) => state.vendingMachine.chosenProduct);
};

export const useSetDepositAction = (num = 0) => {
  const dispatch = useDispatch();
  return dispatch(setDepositAction(num));
};
