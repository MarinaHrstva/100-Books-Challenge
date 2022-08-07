
import { Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/my-books' element={<MyBooks />} />
        <Route path='/catalog/:bookId' element={<BookDetails />} />
        <Route />


        {/* <BookDetails/> */}


      </Routes>

      <Footer />

    </div>
  );
}

export default App;
