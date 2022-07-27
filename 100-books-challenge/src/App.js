
import { Header } from './components/header/Header';
import { HeroSection } from './components/hero-section/HeroSection';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HeroSection />
      </header>
    </div>
  );
}

export default App;
