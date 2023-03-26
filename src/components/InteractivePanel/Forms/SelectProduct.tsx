import '../InteractivePanel.scss';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setSelectedProductAction } from '../../../store/reducer';

import {
  useDepositAmount,
  useChosenProduct,
  useProducts,
} from '../../../store/hooks';

enum StatusText {
  ChooseProduct = 'Choose Product',
  WrongNumberProduct = 'Enter correct product number',
  NotEnoughMoney = 'Not enough money',
  Success = 'Success',
  stetText = '/',
}

export const ChooseForm = () => {
  const [statusText, setStatusText] = useState<string>(StatusText.stetText);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const dispatch = useDispatch();
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

    dispatch(setSelectedProductAction(+selectedProduct));
    setSelectedProduct('');
    setStatusText(StatusText.Success);
  };

  return (
    <form className='interactive-panel__form' onSubmit={handleSubmit}>
      <label htmlFor='choose-product' className='interactive-panel__label'>
        {statusText}
      </label>
      <input
        type='text'
        id='choose-product'
        className='interactive-panel__input'
        placeholder='...'
        value={selectedProduct || ''}
        onChange={handleChange}
        disabled={!!chosenProduct || !depositAmount}
      />
    </form>
  );
};
