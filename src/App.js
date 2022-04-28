import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Pages/Header/Header';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
