import './InteractivePanel.scss';
import { DepositForm } from './Forms/DepositForm';
import { ChooseForm } from './Forms/SelectProduct';
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
