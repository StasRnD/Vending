import './Display.scss';
import { Product } from './Product/Product';
import { useSelector } from 'react-redux';

export const Display = () => {
  const listProducts = useSelector((state: any) => state.listProducts);
  const depositAmount = useSelector((state: any) => state.depositAmount);

  const isActiveProduct = (product: any) => {
    return product.cost <= depositAmount ? 'display__product-active' : '';
  };

  return (
    <section className='display'>
      <ul className='display__product-list'>
        {listProducts.map((product: any, index: any) => {
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
