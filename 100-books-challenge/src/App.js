import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';
import { BooksContext } from './contexts/BooksContext';


import { Header } from './components/header/Header';
import { HeroSection } from './components/hero-section/HeroSection';
import { Catalog } from './components/catalog/Catalog';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Footer } from './components/footer/Footer';
import { Create } from './components/create/Create';
import BookDetails from './components/catalog/BookCard/BookDetails/BookDetails';

import './App.css';
import { getAllBooks } from './api/books';

function App() {
	const [user, setUser] = useState({});
	const [books, setBooks] = useState([])

	const userLogin = (userData) => {
		setUser(userData);
	}

	const userLogout = () => {
		setUser('');
	}

	useEffect(() => {
		getAllBooks()
			.then(books => setBooks(books));

	}, [])

	return (
		<UserContext.Provider value={{ user, userLogin, userLogout }}>
			<BooksContext.Provider value={{ books, setBooks }}>


				<div className="App">
					<Header />
					<Routes>
						<Route path='/' element={<HeroSection />} />
						<Route path='/books' element={<Catalog />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/create' element={<Create />} />
						<Route path='/books/:bookId' element={<BookDetails />} />
						{/* <Route path='/books/:bookId' element={<BookDetails />} /> */}

					</Routes>

					<Footer />

				</div>
			</BooksContext.Provider >
		</UserContext.Provider >


	);
}

export default App;
