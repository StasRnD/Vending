import '../../InteractivePanel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';

const allowedNumber = ['50', '100', '200', '500'];

export const DepositForm = () => {
  const [moneyValues, setMoneyValues] = useState('');
  const [statusText, setStatusText] = useState('Insert money');
  const dispatch = useDispatch();
  const depositAmount = useSelector((state: any) => state.depositAmount);

  const choiseTextLabel = useCallback(() => {
    Number(depositAmount)
      ? setStatusText(`Inserted money: ${depositAmount}₽`)
      : setStatusText('Insert money');
  }, [depositAmount]);

  useEffect(() => {
    choiseTextLabel();
  }, [choiseTextLabel]);

  const handlerChange = (evt: any) => {
    setMoneyValues(evt.target.value);
  };

  const handlerSubmit = (evt: any) => {
    evt.preventDefault();

    if (allowedNumber.includes(moneyValues)) {
      return dispatch({ type: 'ADD_DEPOSIT', payload: moneyValues });
    }
    setStatusText('no true');
    setTimeout(() => {
      choiseTextLabel();
    }, 1500);
  };

  return (
    <form className='interactive-panel__form' onSubmit={handlerSubmit}>
      <label htmlFor='deposit' className='interactive-panel__label'>
        {statusText}
      </label>
      <input
        type='text'
        id='deposit'
        className='interactive-panel__input'
        placeholder='...'
        value={moneyValues}
        onChange={handlerChange}
      />
      <p className='interactive-panel__input-info'>
        Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in
        1, 2, 5 and 10 ₽ coins.
      </p>
    </form>
  );
};
