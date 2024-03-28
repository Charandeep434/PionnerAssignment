import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Population from './components/Population';
import CryptoCurrency from './components/CryptoCurrency';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='app-elements'>
        <Dashboard/>
          <Routes>
            <Route exact path='/' Component={Population}/>
            <Route path='/cryptocurrency' Component={CryptoCurrency}/>
          </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
