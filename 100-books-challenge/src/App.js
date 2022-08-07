
import { Header } from './components/header/Header';
import { HeroSection } from './components/hero-section/HeroSection';
import { Catalog } from './components/catalog/Catalog';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';

import { Footer } from './components/footer/Footer';
import { MyBooks } from './components/my-books-section/MyBooks'

import BookDetails from './components/catalog/BookCard/BookDetails/BookDetails';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
 
        {/* <HeroSection /> */}
        {/* <Catalog /> */}
        {/* <BookDetails/> */}
        <Login />
        {/* <Register /> */}
       
        {/* <MyBooks /> */}
        
      <Footer />

    </div>
  );
}

export default App;
