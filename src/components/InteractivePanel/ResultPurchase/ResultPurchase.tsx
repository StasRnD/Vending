import './ResultPurchase.scss';
import { Product } from '../../Display/Product/Product';

export const ResultPurchase = () => {
  return (
    <div className='result-purchase'>
      <div className='result-purchase__returned-money'>
        <p className='result-purchase__returned-item'>10 ₽: {} coins</p>
        <p className='result-purchase__returned-item'>5 ₽: {} coins</p>
      </div>
      <div className='result-purchase__product'>
        {/* <Product name={'asdas'} category={'dsada'} cost={1232} /> */}
      </div>
    </div>
  );
};
