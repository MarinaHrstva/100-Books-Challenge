import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { createBook } from '../../api/books'
import './Create.css'

export const Create = () => {
    const navigate = useNavigate()

    const [book, setBook] = useState({
        title: '',
        author: '',
        category: 'Classics',
        year: '',
        imageUrl: '',
        summary: '',

    })

    function onChange(e) {
        setBook(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))

    }


    async function onSubmit(e) {
        e.preventDefault()
        if (Object.values(book).some(x => x == '')) {
            return alert('All fields are required!')
        }

        const res = await createBook(book);
        navigate('/books')

    }

    return (

        <section className="create">
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="title"> Book Title:
                        <input type="text" name="title" placeholder="Book title" id='title' value={book.title} onChange={onChange} />
                    </label>
                    <label htmlFor="author">Book Author:
                        <input type="text" name="author" placeholder="Book author" id='author' value={book.author} onChange={onChange} />
                    </label>
                    <label htmlFor="category">Category:
                        <select name="category" id="category" onChange={onChange}>
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
                    <label htmlFor="year"> Year:
                        <input type="number" name="year" placeholder="1994" id='year' value={book.year} onChange={onChange} />
                    </label>
                    <label htmlFor="imageUrl"> Image URL:
                        <input type="text" name="imageUrl" placeholder="imageUrl" id='imageUrl' value={book.imageUrl} onChange={onChange} />
                    </label>
                    <label htmlFor="summary"> Summary:
                        <input type="textarea" name="summary" placeholder="Book summary..." id='summary' value={book.summary} onChange={onChange} />
                    </label>

                    <button className='create-button'>Add</button>

                </form>
            </div>
            <div className='create-form-overlay'></div>
        </section>
    )
}