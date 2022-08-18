import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';

import { getAllBooks } from './api/books';

import { Header } from './components/header/Header';
import { HeroSection } from './components/hero-section/HeroSection';
import { Catalog } from './components/catalog/Catalog';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Footer } from './components/footer/Footer';
import { Create } from './components/create/Create';
import { Edit } from './components/edit/Edit';
import BookDetails from './components/catalog/BookDetails/BookDetails';
import Profile from './components/profile/Profile';

import './App.css';

function App() {
	const [user, setUser] = useState({});

	const userLogin = (userData) => {
		setUser(userData);
	}

	const userLogout = () => {
		setUser('');
	}

	return (
		<UserContext.Provider value={{ user, userLogin, userLogout }}>
			<div className="App">
				<Header />
				<Routes>
					<Route path='/' element={<HeroSection />} />
					<Route path='/books' element={<Catalog />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/create' element={<Create />} />
					<Route path='/books/:bookId' element={<BookDetails />} />
					<Route path='/edit/:bookId' element={<Edit />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
				<Footer />
			</div>
		</UserContext.Provider >
	);
}

export default App;
