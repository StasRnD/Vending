import '../../InteractivePanel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { StateProps } from '../../../../types/productTypes';

export const ChooseForm = () => {
  const [statusText, setStatusText] = useState('/');
  const [selectedProduct, setSelectedProduct] = useState(0);
  const dispatch = useDispatch();
  const depositAmount = useSelector((state: StateProps) => state.depositAmount);
  const choosedProduct = useSelector(
    (state: StateProps) => state.choosedProduct
  );
  const listProducts = useSelector((state: StateProps) => state.listProducts);

  useEffect(() => {
    if (depositAmount) {
      setStatusText('Choose Product');
    }
  }, [depositAmount]);

  const handleChanhge = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct(Number(evt.target.value));
  };

  const showTextError = (text: string) => {
    setStatusText(text);
    setTimeout(() => {
      setStatusText('Choose Product');
    }, 1500);
  };

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (selectedProduct > listProducts.length)
      return showTextError('Enter correct product number');
    if (depositAmount < listProducts[selectedProduct - 1].cost)
      return showTextError('Anof money');

    dispatch({ type: 'SET_SELECTED_PRODUCT', payload: selectedProduct });
    setSelectedProduct(0);
    setStatusText('Success');
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
        onChange={handleChanhge}
        disabled={!!choosedProduct || !depositAmount}
      />
    </form>
  );
};
