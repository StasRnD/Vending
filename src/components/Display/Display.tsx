import './Display.scss';
import { Product } from './Product/Product';
const products = [
  {
    name: 'Lay’s',
    category: 'Chips',
    cost: '75',
    number: 1,
  },
  {
    name: 'Coca-Cola',
    category: 'Drink',
    cost: '180',
    number: 2,
  },
  {
    name: 'Light',
    category: 'Rusks',
    cost: '220',
    number: 3,
  },
  {
    name: 'Chaka',
    category: 'Peanut',
    cost: '600',
    number: 4,
  },
  {
    name: 'Water',
    category: 'Drink',
    cost: '40',
    number: 5,
  },
];

export const Display = () => {
  return (
    <section className='display'>
      <ul className='display__product-list'>
        {products.map((product, index) => {
          return (
            <li key={index} className='display__product'>
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
