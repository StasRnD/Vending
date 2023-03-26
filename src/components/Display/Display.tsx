import style from './styles.module.scss';
import classNames from 'classnames';
import { ProductItem } from './ProductItem';
import { useProducts, useDepositAmount } from '../../store/hooks';
import { Product } from '../../types';

export const Display = () => {
  const amount = useDepositAmount();
  const products = useProducts();

  const isActiveProduct = (product: Product) => {
    return product.cost <= amount;
  };

  return (
    <section className={style.display}>
      <ul className={style.list}>
        {products.map((product: Product, index: number) => {
          return (
            <li
              key={index}
              className={classNames(style.container, {
                [style.active]: isActiveProduct(product),
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
