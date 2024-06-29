
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import JobPage from './pages/JobPage';

import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/> }/>
        <Route path='/register' element={<RegisterPage/> }/>
        <Route path='/' element={<HomePage/> }/>
        <Route path='/job/:id' element={<JobPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
