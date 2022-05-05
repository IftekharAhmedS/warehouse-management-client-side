import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AddItems from './pages/AddNewItem/AddItems';
import Home from './pages/Home/Home';
import ItemInfo from './pages/ItemInfo/ItemInfo';
import Login from './pages/Login/Login';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import MyItems from './pages/MyItems/MyItems';
import Register from './pages/Register/Register';
import ResetPassword from './pages/ResetPassword/ResetPassword';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/add-items' element={<RequireAuth><AddItems></AddItems></RequireAuth>}></Route>
        <Route path='/my-items' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/item/:id' element={<RequireAuth><ItemInfo></ItemInfo></RequireAuth>}></Route>
        <Route path='/manage-inventory' element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>
        <Route path='/reset-password' element={<ResetPassword></ResetPassword>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
