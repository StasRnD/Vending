import './InteractivePanel.scss';
import { DepositForm } from './Forms/DepositForm/DepositForm';
import { ChooseForm } from './Forms/ChooseForm/ChooseForm';
import { ResultPurchase } from './ResultPurchase/ResultPurchase';

export const InteractivePanel = () => {
  return (
    <section className='interactive-panel'>
      <DepositForm />
      <ChooseForm />
      <ResultPurchase />
    </section>
  );
};
