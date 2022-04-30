import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AddItems from './components/pages/AddNewItem/AddItems';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/add-items' element={<AddItems></AddItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
