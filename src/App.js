import './assets/css/App.css';
import Initial from './components/initial';
import Confirm from './components/confirm';
import Result from './components/result';

function App() {

  const handleComponent = () => {
    const screen = 0;
    return (screen === 0) ? <Initial /> : (screen === 1) ? <Confirm /> : <Result />;
  }

  return (
    <div className="App">
      <div className="container">
        {handleComponent()}
      </div>
    </div>
  );
}

export default App;