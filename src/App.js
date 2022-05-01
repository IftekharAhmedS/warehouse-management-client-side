import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AddItems from './pages/AddNewItem/AddItems';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/add-items' element={<RequireAuth><AddItems></AddItems></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
