import style from '../InteractivePanel.module.scss';

import { useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import { setDepositAction } from '../../../store/reducer';
import { useDepositAmount, useChosenProduct } from '../../../store/hooks';

const allowedNumber = [50, 100, 200, 500];

enum StatuseText {
  InsertMoney = 'Insert money',
  MoneyNotAccepted = 'Money is not accepted',
  InsertedMoney = 'Inserted money: ',
}

export const DepositForm = () => {
  const [insertMoney, setInsertMoney] = useState<string>('');
  const [statusText, setStatusText] = useState<string>(StatuseText.InsertMoney);

  const depositAmount = useDepositAmount();
  const chosenProduct = useChosenProduct();
  const dispatch = useDispatch();

  const choiseTextLabel = useCallback(() => {
    depositAmount
      ? setStatusText(StatuseText.InsertedMoney + depositAmount + 'P')
      : setStatusText(StatuseText.InsertMoney);
  }, [depositAmount]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInsertMoney(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newValuesDeposit = depositAmount + +insertMoney;

    if (allowedNumber.includes(+insertMoney)) {
      return dispatch(setDepositAction(+newValuesDeposit));
    }

    setStatusText(StatuseText.MoneyNotAccepted);
    setTimeout(() => {
      choiseTextLabel();
    }, 1500);
  };

  useEffect(() => {
    choiseTextLabel();
  }, [choiseTextLabel, depositAmount]);

  useEffect(() => {
    if (depositAmount === 0) {
      setInsertMoney('');
    }
  }, [depositAmount]);

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor='deposit' className={style.label}>
        {statusText}
      </label>
      <input
        type='text'
        id='deposit'
        className={style.input}
        placeholder='...'
        value={insertMoney || ''}
        onChange={handleChange}
        disabled={!!chosenProduct}
      />
      <p className={style.info}>
        Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in
        1, 2, 5 and 10 ₽ coins.
      </p>
    </form>
  );
};
