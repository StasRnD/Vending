import '../../InteractivePanel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const allowedNumber = ['50', '100', '200', '500'];

export const DepositForm = () => {
  const [moneyValues, setMoneyValues] = useState('');
  const [statusText, setStatusText] = useState('Insert money');
  const dispatch = useDispatch();
  const depositAmount = useSelector((state: any) => state.depositAmount);

  useEffect(() => {
    if (depositAmount) {
      setStatusText(`Inserted money: ${depositAmount}₽`);
    }
  }, [depositAmount]);

  const onChange = (evt: any) => {
    setMoneyValues(evt.target.value);
  };

  const all = allowedNumber.includes(moneyValues);

  const submitForm = (evt: any) => {
    evt.preventDefault();

    if (!all) {
      setStatusText('no true');
      setTimeout(() => {
        setStatusText(`Inserted money: ${depositAmount}₽`);
      }, 1500);
    } else {
      dispatch({ type: 'ADD_DEPOSIT', payload: moneyValues });
    }
  };

  return (
    <form className='interactive-panel__form' onSubmit={submitForm}>
      <label htmlFor='deposit' className='interactive-panel__label'>
        {statusText}
      </label>
      <input
        type='text'
        id='deposit'
        className='interactive-panel__input'
        placeholder='...'
        value={moneyValues}
        onChange={onChange}
      />
      <p className='interactive-panel__input-info'>
        Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in
        1, 2, 5 and 10 ₽ coins.
      </p>
    </form>
  );
};
