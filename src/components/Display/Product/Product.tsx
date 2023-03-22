import './Product.scss';

export const Product = ({ name, category, cost, number }: any) => {
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
