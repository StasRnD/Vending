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
  const depositAmount = useSelector((state: StateProps) => state.depositAmount);

  const {
    name = '',
    category = '',
    cost = 0,
  } = choosedProduct ? listProducts[choosedProduct - 1] : {};

  const returnSum = choosedProduct ? depositAmount - cost : 0;

  const returnMoney = {
    ten: Math.floor(returnSum / 10),
    five: Math.floor((returnSum % 10) / 5),
    two: Math.floor((returnSum % 5) / 2),
    one: Math.floor((returnSum % 5) % 2),
  };

  const clear = () => {
    dispatch(setDepositAction(0));
    dispatch(setSelectedProductAction(0));
  };

  return (
    <div className='result-purchase'>
      <div className='result-purchase__returned-money'>
        <p className='result-purchase__returned-money-item'>
          {returnMoney.ten ? `10₽: ${returnMoney.ten} coins` : ''}
        </p>
        <p className='result-purchase__returned-money-item'>
          {returnMoney.five ? `5₽: ${returnMoney.five} coins` : ''}
        </p>
        <p className='result-purchase__returned-money-item'>
          {returnMoney.two ? `2₽: ${returnMoney.two} coins` : ''}
        </p>
        <p className='result-purchase__returned-money-item'>
          {returnMoney.one ? `1₽: ${returnMoney.one} coins` : ''}
        </p>
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
