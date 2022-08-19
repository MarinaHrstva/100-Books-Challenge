
import { useEffect } from 'react'
import { useState } from 'react'
import { getAllBooks } from '../../api/books'

import BookCard from './BookCard/BookCard'
import './Catalog.css'

export const Catalog = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchedValue, setSearchedValue] = useState('');

    useEffect(() => {
        getAllBooks()
            .then(result => {
                setBooks(result)
            })
    }, [])

    function onSearchSubmitHandler(e) {
        e.preventDefault();
        if (searchedValue == '') {
            setFilteredBooks([])
        } else {
            setFilteredBooks(books.filter(b => b.title.toLowerCase().includes(searchedValue.toLowerCase())))
        }
    }

    const onSearchChangeHandler = (e) => {
        setSearchedValue(e.target.value);
    }

    return (
        <section className="catalog">
            <div className="forms-container">
                <form className="search-form" onSubmit={onSearchSubmitHandler}>
                    <input type="text" placeholder='Search book...' id='search' value={searchedValue} onChange={onSearchChangeHandler} />
                    <button>Search</button>
                </form>
            </div>

            <div className="catalod-wraper">
                {filteredBooks.length > 0
                    ? filteredBooks.map(b => <BookCard book={b} key={b._id} />)
                    : books.map(b => <BookCard book={b} key={b._id} />)}
                {(filteredBooks.length == 0 && books.length == 0) && <p>No books yet!</p>}
            </div>

        </section>
    )

}
