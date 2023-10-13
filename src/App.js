import './App.css';
import Nopage from './pages/Nopage';
import Dashboard from './pages/Layout';
import User from './pages/User'
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Protected from './pages/Protected';
import Logout from './pages/Logout';

function App() {
  const users = [
    {
      username: "@deeptii8878",
      password: "1111",
      name: "deepti Vishwakarma",
      post: 23,
      likes: 222,
      comments: 123
    },
    {
      username: "@avani9162",
      password: "1111",
      name: "avani jain",
      post: 24,
      likes: 252,
      comments: 133
    },
    {
      username: "@apurva3921",
      password: "1111",
      name: "apurva agrawal",
      post: 28,
      likes: 228,
      comments: 183
    },
    {
      username: "@shruti99",
      password: "1111",
      name: "shruti chouhan",
      post: 28,
      likes: 228,
      comments: 183
    }
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/:details' element={<User users={users} />} />
        <Route path='/login' element={<Login users={users} />} />
        <Route path='/logout' element={<Protected Component={Logout} />} />
        <Route path='/profile' element={<Profile users={users} />} />
        <Route path='*' element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
