import './Display.scss';
import classNames from 'classnames';
import { ProductItem } from './ProductItem';
import { useProducts, useDepositAmount } from '../../store/hooks';
import { Product } from '../../types/vendingMachine';

export const Display = () => {
  const amount = useDepositAmount();
  const products = useProducts();

  const isActiveProduct = (product: Product) => {
    return product.cost <= amount;
  };

  return (
    <section className='display'>
      <ul className='display__product-list'>
        {products.map((product: Product, index: number) => {
          return (
            <li
              key={index}
              className={classNames('display__product', {
                display__product_active: isActiveProduct(product),
              })}
            >
              <ProductItem {...product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
