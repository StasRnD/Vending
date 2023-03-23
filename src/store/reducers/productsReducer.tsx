const products = [
  {
    name: 'Lay’s',
    category: 'Chips',
    cost: '75',
    number: 1,
  },
  {
    name: 'Coca-Cola',
    category: 'Drink',
    cost: '180',
    number: 2,
  },
  {
    name: 'Light',
    category: 'Rusks',
    cost: '220',
    number: 3,
  },
  {
    name: 'Chaka',
    category: 'Peanut',
    cost: '600',
    number: 4,
  },
  {
    name: 'Water',
    category: 'Drink',
    cost: '40',
    number: 5,
  },
];

const defaultState = {
  listProducts: products,
  choosedProduct: 0,
  depositAmount: 0,
};

export const productsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'SET_DEPOSIT':
      return {
        ...state,
        depositAmount: state.depositAmount + Number(action.payload),
      };
    case 'SET_SELECTED_PRODUCT':
      return {
        ...state,
        choosedProduct: action.payload,
      };

    default:
      return state;
  }
};
