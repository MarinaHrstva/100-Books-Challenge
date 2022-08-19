
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { getAllBooks } from '../../api/books'

import BookCard from './BookCard/BookCard'
import './Catalog.css'

export const Catalog = () => {
    const [books, setBooks] = useState([]);

    console.log(books);

    useEffect(() => {
        getAllBooks()
            .then(result => {
                setBooks(result)
            })
    }, [])

    return (
        <section className="catalog">
            <div className="forms-container">
                <form className="search-form">
                    <input type="text" placeholder='Search...' />
                    <button>Search</button>
                </form>
                <form className="filter-form">
                    <label htmlFor="search-category">Category:
                    <select name="search-category" id="search-category" >
                        <option value="Classics">Classics</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Thrillers">Thrillers</option>
                        <option value="Biographies">Biographies</option>
                        <option value="History">History</option>
                        <option value="Poetry">Poetry</option>
                    </select>
                    </label>
                </form>
            </div>

            <div className="catalod-wraper">
                {books.length > 0
                    ? books.map(b => <BookCard book={b} key={b._id} />)
                    : <p>No books yet!</p>}
            </div>

        </section>
    )
}