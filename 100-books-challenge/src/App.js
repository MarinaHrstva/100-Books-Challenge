
import { Header } from './components/header/Header';
import { HeroSection } from './components/hero-section/HeroSection';
import { Catalog } from './components/catalog/Catalog';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Achievements } from './components/achievements/Achievements';
import { Footer } from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HeroSection />
        <Catalog />
        <Login />
        <Register />
        <Achievements />
        <Footer />
      </header>
    </div>
  );
}

export default App;
