import { Route, Routes } from 'react-router-dom';
import './App.css';
import Errorpage from './Components/Errorpage/Errorpage';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Header from './Components/Pages/Header/Header';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Footer from './Components/Shared/Footer';
import SingleInventory from './Components/SingleInventory/SingleInventory';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<RequireAuth> <Inventory></Inventory></RequireAuth>}></Route>
        <Route path='inventory/:id' element={<RequireAuth><SingleInventory></SingleInventory> </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Errorpage></Errorpage>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
