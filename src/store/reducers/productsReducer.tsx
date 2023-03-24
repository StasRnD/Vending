import { StateProps, ProductProps } from '../../types/productTypes';

type actionProps = {
  type: string;
  payload: number;
};

const products: ProductProps[] = [
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
];

const defaultState: StateProps = {
  listProducts: products,
  choosedProduct: 0,
  depositAmount: 0,
};

const SET_DEPOSIT = 'SET_DEPOSIT';
const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';

export const productsReducer = (state = defaultState, action: actionProps) => {
  switch (action.type) {
    case SET_DEPOSIT:
      return {
        ...state,
        depositAmount: action.payload,
      };
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        choosedProduct: action.payload,
      };

    default:
      return state;
  }
};

export const setDepositAction = (payload: number) => ({
  type: SET_DEPOSIT,
  payload,
});

export const setSelectedProductAction = (payload: number) => ({
  type: SET_SELECTED_PRODUCT,
  payload,
});
