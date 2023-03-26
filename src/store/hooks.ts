import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../types';
import { setDepositAction, setSelectedProductAction } from './reducer';

export const useProducts = () => {
  return useSelector((state: rootState) => state.vendingMachine.listProducts);
};

export const useDepositAmount = () => {
  return useSelector((state: rootState) => state.vendingMachine.depositAmount);
};

export const useChosenProduct = () => {
  return useSelector((state: rootState) => state.vendingMachine.chosenProduct);
};

export const useSetDepositAction = () => {
  const dispatch = useDispatch();

  return (num: number) => {
    dispatch(setDepositAction(num));
  };
};

export const useSetSelectedProductAction = () => {
  const dispatch = useDispatch();

  return (num: number) => {
    dispatch(setSelectedProductAction(num));
  };
};
