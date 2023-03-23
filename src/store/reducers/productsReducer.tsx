const products = [
  {
    name: 'Lay’s',
    category: 'Chips',
    cost: '75',
    number: 1,
    isActive: false,
  },
  {
    name: 'Coca-Cola',
    category: 'Drink',
    cost: '180',
    number: 2,
    isActive: false,
  },
  {
    name: 'Light',
    category: 'Rusks',
    cost: '220',
    number: 3,
    isActive: false,
  },
  {
    name: 'Chaka',
    category: 'Peanut',
    cost: '600',
    number: 4,
    isActive: false,
  },
  {
    name: 'Water',
    category: 'Drink',
    cost: '40',
    number: 5,
    isActive: false,
  },
];

const defaultState = {
  listProducts: products,
  selectedNumberProduct: 0,
  depositAmount: 0,
};

export const productsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'SET_DEPOSIT':
      return {
        ...state,
        depositAmount: state.depositAmount + Number(action.payload),
      };
    case 'SET_ACIVE_PRODUCTS':
      return {
        ...state,
        listProducts: state.listProducts.filter((product) =>
          product.cost <= action.payload ? (product.isActive = true) : product
        ),
      };

    default:
      return state;
  }
};
