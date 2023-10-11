import './App.css';
import Nopage from './pages/Nopage';
import Dashboard from './pages/Layout';
import User from './pages/User'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/:details/' element={<User />} />
        {/* <Route path='/:details/:' element={<Details />} /> */}
        <Route path='*' element={<Nopage />} /> 
      </Routes>
      </BrowserRouter>
  );
}

export default App;
