const defaultState = {
  listProducts: [],
  selectedNumberProduct: 0,
  depositAmount: 0,
};

export const productsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'ADD_DEPOSIT':
      return {
        ...state,
        depositAmount: state.depositAmount + Number(action.payload),
      };

    default:
      return state;
  }
};
