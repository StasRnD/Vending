import { useState, useEffect } from 'react';

import style from './styles.module.scss';
import {
  useDepositAmount,
  useChosenProduct,
  useProducts,
  useSetSelectedProductAction,
} from '../../store/hooks';

enum StatusText {
  ChooseProduct = 'Choose Product',
  WrongNumberProduct = 'Enter correct product number',
  NotEnoughMoney = 'Not enough money',
  Success = 'Success',
  stetText = '/',
}

export const SelectProductForm = () => {
  const [statusText, setStatusText] = useState<string>(StatusText.stetText);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const setSelectedProduction = useSetSelectedProductAction();
  const depositAmount = useDepositAmount();
  const chosenProduct = useChosenProduct();
  const products = useProducts();

  useEffect(() => {
    depositAmount
      ? setStatusText(StatusText.ChooseProduct)
      : setStatusText(StatusText.stetText);
  }, [depositAmount]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct(event.target.value);
  };

  const showTextError = (text: string) => {
    setStatusText(text);
    setTimeout(() => {
      setStatusText(StatusText.ChooseProduct);
    }, 1500);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (+selectedProduct > products.length || !+selectedProduct) {
      return showTextError(StatusText.WrongNumberProduct);
    }
    if (depositAmount < products[+selectedProduct - 1].cost) {
      return showTextError(StatusText.NotEnoughMoney);
    }

    setSelectedProduction(+selectedProduct);
    setSelectedProduct('');
    setStatusText(StatusText.Success);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor='choose-product' className={style.label}>
        {statusText}
      </label>
      <input
        type='text'
        id='choose-product'
        className={style.input}
        placeholder='...'
        value={selectedProduct || ''}
        onChange={handleChange}
        disabled={!!chosenProduct || !depositAmount}
      />
    </form>
  );
};
