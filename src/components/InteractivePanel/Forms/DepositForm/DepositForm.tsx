import '../../InteractivePanel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import { StateProps } from '../../../../types/productTypes';
import { setDepositAction } from '../../../../store/reducers/productsReducer';

const allowedNumber = ['50', '100', '200', '500'];

export const DepositForm = () => {
  const [moneyValues, setMoneyValues] = useState(0);
  const [statusText, setStatusText] = useState('Insert money');
  const dispatch = useDispatch();
  const depositAmount = useSelector((state: StateProps) => state.depositAmount);
  const choosedProduct = useSelector(
    (state: StateProps) => state.choosedProduct
  );

  const choiseTextLabel = useCallback(() => {
    depositAmount
      ? setStatusText(`Inserted money: ${depositAmount}₽`)
      : setStatusText('Insert money');
  }, [depositAmount]);

  useEffect(() => {
    choiseTextLabel();
  }, [choiseTextLabel, depositAmount]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setMoneyValues(Number(evt.target.value));
  };

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newValuesDeposit = depositAmount + moneyValues;
    if (allowedNumber.includes(`${moneyValues}`)) {
      return dispatch(setDepositAction(newValuesDeposit));
    }
    setStatusText('no true');
    setTimeout(() => {
      choiseTextLabel();
    }, 1500);
  };

  return (
    <form className='interactive-panel__form' onSubmit={handleSubmit}>
      <label htmlFor='deposit' className='interactive-panel__label'>
        {statusText}
      </label>
      <input
        type='text'
        id='deposit'
        className='interactive-panel__input'
        placeholder='...'
        value={moneyValues || ''}
        onChange={handleChange}
        disabled={!!choosedProduct}
      />
      <p className='interactive-panel__input-info'>
        Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in
        1, 2, 5 and 10 ₽ coins.
      </p>
    </form>
  );
};
