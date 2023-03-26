import './ProductItem.scss';
import { Product } from '../../types/vendingMachine';

export const ProductItem = ({ name, category, cost, number }: Product) => {
  return (
    <article className='product'>
      <h4 className='product__title'>{name}</h4>
      <p className='product__category'>{category}</p>
      <div className='product__info'>
        <p className='product__cost'>{cost} ₽</p>
        <span className='product__number'>{number}</span>
      </div>
    </article>
  );
};
