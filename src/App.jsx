import './App.css'
import { Outlet } from 'react-router-dom'; // Importe o componente Link

import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar /> 
      <Outlet />
    </div>
  );
}

export default App;
