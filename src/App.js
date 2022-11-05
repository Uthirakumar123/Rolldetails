import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './login';
import Fincalz from './fincalz';
import Forgot from './forgot';
import Formrg from './formrg';
import Rollt from './rolltabel';
import Example from './usestate';
import Role from './Roletabel';

function App() {
  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/fincals" element={<Fincalz />} />
    <Route path="/forgot" element={<Forgot />} />
    <Route path="/formrg" element={<Formrg />} />
    <Route path="/rolltabel" element={<Rollt />} />
    <Route path="/example" element={<Example />} />
    <Route path="/role" element={<Role />} />
   
  </Routes>
  );
}

export default App;
