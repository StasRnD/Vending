import style from './ResultPurchase.module.scss';
import { ProductItem } from '../../Display/ProductItem';
import {
  setDepositAction,
  setSelectedProductAction,
} from '../../../store/reducer';
import {
  useDepositAmount,
  useChosenProduct,
  useProducts,
} from '../../../store/hooks';
import { useDispatch } from 'react-redux';

export const ResultPurchase = () => {
  const dispatch = useDispatch();
  const depositAmount = useDepositAmount();
  const chosenProduct = useChosenProduct();
  const products = useProducts();

  const selectedProduct = chosenProduct
    ? products.find((product) => product.number === chosenProduct)
    : null;

  const cost = selectedProduct ? selectedProduct.cost : 0;
  const name = selectedProduct ? selectedProduct.name : '';
  const category = selectedProduct ? selectedProduct.category : '';
  const change = chosenProduct ? depositAmount - cost : 0;

  const returnMoney = {
    ten: Math.floor(change / 10),
    five: Math.floor((change % 10) / 5),
    two: Math.floor((change % 5) / 2),
    one: Math.floor((change % 5) % 2),
  };

  const clear = () => {
    dispatch(setDepositAction(0));
    dispatch(setSelectedProductAction(0));
  };

  return (
    <div className={style.result}>
      <div className={style.returnedMoney}>
        <p className={style.returnedMoneyItem}>
          {returnMoney.ten ? `10₽: ${returnMoney.ten} coins` : ''}
        </p>
        <p className={style.returnedMoneyItem}>
          {returnMoney.five ? `5₽: ${returnMoney.five} coins` : ''}
        </p>
        <p className={style.returnedMoneyItem}>
          {returnMoney.two ? `2₽: ${returnMoney.two} coins` : ''}
        </p>
        <p className={style.returnedMoneyItem}>
          {returnMoney.one ? `1₽: ${returnMoney.one} coins` : ''}
        </p>
      </div>
      <div className={style.product} onClick={clear}>
        {chosenProduct ? (
          <div className={style.productContainer}>
            <ProductItem name={name} cost={cost} category={category} />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
