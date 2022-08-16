
import { useContext } from 'react'

import { BooksContext } from '../../contexts/BooksContext'
import BookCard from './BookCard/BookCard'
import './Catalog.css'

export const Catalog = () => {
    const { books, setBooks } = useContext(BooksContext);



    return (
        <section className="catalog">

            <div className="catalod-wraper">
                {books.length > 0
                    ? books.map(b=><BookCard book={b}/>)
                    : <p>No books yet!</p>}
            </div>

        </section>
    )
}