import '../../InteractivePanel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

export const ChooseForm = () => {
  const [statusText, setStatusText] = useState('/');
  const [selectedProduct, setSelectedProduct] = useState('');
  const dispatch = useDispatch();
  const depositAmount = useSelector((state: any) => state.depositAmount);
  const choosedProduct = useSelector((state: any) => state.choosedProduct);
  const listProducts = useSelector((state: any) => state.listProducts);

  useEffect(() => {
    if (Number(depositAmount) > 0) {
      setStatusText('Choose Product');
    }
  }, [depositAmount]);

  const handleChanhge = (evt: any) => {
    setSelectedProduct(evt.target.value);
  };

  const showTextError = (text: any) => {
    setStatusText(text);
    setTimeout(() => {
      setStatusText('Choose Product');
    }, 1500);
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    if (selectedProduct > listProducts.length)
      return showTextError('Enter correct product number');
    if (depositAmount < listProducts[+selectedProduct - 1].cost)
      return showTextError('Anof money');

    dispatch({ type: 'SET_SELECTED_PRODUCT', payload: selectedProduct });
    setSelectedProduct('');
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
        value={selectedProduct}
        onChange={handleChanhge}
        disabled={choosedProduct || !Number(depositAmount)}
      />
    </form>
  );
};
