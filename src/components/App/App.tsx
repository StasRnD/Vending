import { Display } from '../Display/Display';
import { InteractivePanel } from '../InteractivePanel/InteractivePanel';
import style from './App.module.scss';

const App = () => {
  return (
    <div className={style.app}>
      <Display />
      <InteractivePanel />
    </div>
  );
};

export default App;
