
import { useState } from 'react'
import BookCard from './BookCard/BookCard'
import './Catalog.css'

export const Catalog = () => {
    const [books, setBooks] = useState();

    return (
        <section className="catalog">

            <div className="catalod-wraper">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />

            </div>

        </section>
    )
}