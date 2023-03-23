import './Display.scss';
import { Product } from './Product/Product';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const Display = () => {
  const dispatch = useDispatch();
  const listProducts = useSelector((state: any) => state.listProducts);
  const depositAmount = useSelector((state: any) => state.depositAmount);

  useEffect(() => {
    Number(depositAmount) &&
      dispatch({ type: 'SET_ACIVE_PRODUCTS', payload: depositAmount });
  }, [dispatch, depositAmount]);

  return (
    <section className='display'>
      <ul className='display__product-list'>
        {listProducts.map((product: any, index: any) => {
          return (
            <li
              key={index}
              className={`display__product ${
                product.isActive ? 'display__product-active' : ''
              }`}
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
