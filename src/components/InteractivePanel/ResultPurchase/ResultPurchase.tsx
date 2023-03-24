import './ResultPurchase.scss';
import { Product } from '../../Display/Product/Product';
import { StateProps } from '../../../types/productTypes';
import {
  setDepositAction,
  setSelectedProductAction,
} from '../../../store/reducers/productsReducer';
import { useDispatch, useSelector } from 'react-redux';

export const ResultPurchase = () => {
  const dispatch = useDispatch();
  const choosedProduct = useSelector(
    (state: StateProps) => state.choosedProduct
  );
  const listProducts = useSelector((state: StateProps) => state.listProducts);

  const {
    name = '',
    category = '',
    cost = 0,
  } = choosedProduct ? listProducts[choosedProduct - 1] : {};

  const clear = () => {
    dispatch(setDepositAction(0));
    dispatch(setSelectedProductAction(0));
  };

  return (
    <div className='result-purchase'>
      <div className='result-purchase__returned-money'>
        <p className='.result-purchase__returned-money-item'> </p>
        <p className='.result-purchase__returned-money-item'> </p>
      </div>
      <div className='result-purchase__product' onClick={clear}>
        {choosedProduct ? (
          <div className='result-purchase__product-container'>
            <Product name={name} cost={cost} category={category} />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
