import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import pnf from './Components/pnf';
import Pnf from './Components/pnf';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>

    </>
  );
}

export default App;
