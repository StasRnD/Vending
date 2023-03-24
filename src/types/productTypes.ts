export interface ProductProps {
  name: string;
  category: string;
  cost: number;
  number: number;
}

export type StateProps = {
  listProducts: ProductProps[];
  choosedProduct: number;
  depositAmount: number;
};
