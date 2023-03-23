export interface ProductProps {
  name: string;
  category: string;
  cost: string;
  number: number;
}

export type StateProps = {
  listProducts: ProductProps[];
  choosedProduct: number;
  depositAmount: number;
};
