import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Principal from './components/Principal';
import Planes from './components/Planes';
import Clientes from './components/Clientes';
import Login from './components/Login';
import IngresarP from './components/IngresarP';


function App() {


  return <BrowserRouter>
      <Routes>
        <Route path="/IngresarP" element={<IngresarP/>}/>
        <Route index path='/' element={<Principal/>}/>
        <Route path='/planes' element={<Planes/>}/>
        <Route path='/clientes' element={<Clientes/>}/>
        <Route path='/logins' element={<Login/>}/>
      </Routes>
  </BrowserRouter>


}

export default App
