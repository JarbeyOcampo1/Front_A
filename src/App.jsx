import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Principal from './components/Principal';
import Planes from './components/Planes';
import Clientes from './components/Clientes';


function App() {


  return <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Principal/>}/>
        <Route path='/planes' element={<Planes/>}/>
        <Route path='/clientes' element={<Clientes/>}/>
      </Routes>
  </BrowserRouter>


}

export default App
