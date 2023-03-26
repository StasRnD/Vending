export type Product = {
  name: string;
  category: string;
  cost: number;
  number?: number;
};

export type VendingMachineState = {
  listProducts: Product[];
  chosenProduct: number;
  depositAmount: number;
};

export type rootState = {
  vendingMachine: VendingMachineState;
};
