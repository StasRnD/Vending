import './Display.scss';
import { Product } from './Product/Product';
import { useSelector } from 'react-redux';
import { StateProps, ProductProps } from '../../types/productTypes';

export const Display = () => {
  const listProducts = useSelector((state: StateProps) => state.listProducts);
  const depositAmount = useSelector((state: StateProps) => state.depositAmount);

  const isActiveProduct = (product: ProductProps) => {
    return product.cost <= depositAmount ? 'display__product-active' : '';
  };

  return (
    <section className='display'>
      <ul className='display__product-list'>
        {listProducts.map((product: ProductProps, index: number) => {
          return (
            <li
              key={index}
              className={`display__product ${isActiveProduct(product)}`}
            >
              <Product
                name={product.name}
                category={product.category}
                cost={product.cost}
                number={product.number}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
