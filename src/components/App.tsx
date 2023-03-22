import { Display } from './Display/Display';
import { InteractivePanel } from './InteractivePanel/InteractivePanel';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Display />
      <InteractivePanel />
    </div>
  );
};

export default App;
