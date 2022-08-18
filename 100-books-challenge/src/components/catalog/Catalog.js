
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

            <div className="catalod-wraper">
                {books.length > 0
                    ? books.map(b => <BookCard book={b} key={b._id} />)
                    : <p>No books yet!</p>}
            </div>

        </section>
    )
}