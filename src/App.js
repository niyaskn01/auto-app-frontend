import { Route,Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import CreateAuto from './pages/CreateAuto';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/create-auto' element={<CreateAuto/>} />
      </Routes>
    </div>
  );
}

export default App;
