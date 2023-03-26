import style from './styles.module.scss';
import { DepositForm } from './DepositForm';
import { SelectProductForm } from './SelectProductForm';
import { ResultPurchase } from './ResultPurchase';

export const InteractivePanel = () => {
  return (
    <section className={style.panel}>
      <DepositForm />
      <SelectProductForm />
      <ResultPurchase />
    </section>
  );
};
