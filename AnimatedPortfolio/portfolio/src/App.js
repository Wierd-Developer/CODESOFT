import './App.scss';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App"  >
      <section id='Home'><Navbar />
        <Hero />
      </section>
      <section id='Services'><Services /></section>
      <Portfolio />
      <section id='Contact'><Contact /></section>

    </div>
  );
}

export default App;
