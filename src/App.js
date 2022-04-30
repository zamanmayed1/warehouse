import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Header from './Components/Pages/Header/Header';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<RequireAuth> <Inventory></Inventory></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
