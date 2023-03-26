import style from './styles.module.scss';
import { Product } from '../../types';

export const ProductItem = ({ name, category, cost, number }: Product) => {
  return (
    <article className={style.product}>
      <h4 className={style.title}>{name}</h4>
      <p className={style.category}>{category}</p>
      <div className={style.info}>
        <p className={style.cost}>{cost} ₽</p>
        <span className={style.number}>{number}</span>
      </div>
    </article>
  );
};
