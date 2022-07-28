
import { Header } from './components/header/Header';
import { HeroSection } from './components/hero-section/HeroSection';
import { Catalog } from './components/catalog/Catalog';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Achievements } from './components/achievements/Achievements';
import { Footer } from './components/footer/Footer';
import { MyBooks } from './components/my-books-section/MyBooks'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>


        {/* <HeroSection /> */}
        {/* <Catalog /> */}
        {/* <Login /> */}
        <Register />
        {/* <Achievements /> */}
        {/* <MyBooks /> */}

      </div>
        <div className="overlay">
        </div>
      <Footer />

    </div>
  );
}

export default App;
