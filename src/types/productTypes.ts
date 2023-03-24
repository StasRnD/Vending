export interface ProductProps {
  name: string;
  category: string;
  cost: number;
  number?: number;
  onClick?: () => void;
}

export type StateProps = {
  listProducts: ProductProps[];
  choosedProduct: number;
  depositAmount: number;
};
