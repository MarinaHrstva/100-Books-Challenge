import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { createBook } from '../../api/books'
import './Create.css'

export const Create = () => {
const navigate=useNavigate()

    const [book, setBook] = useState({
        title: '',
        author: '',
        category: '',
        year: '',
        imageUrl: '',
        wordsCount: '',

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
        console.log(res);
        navigate('/')
        
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
                        <input type="text" name="category" placeholder="Fantasy" value={book.category} onChange={onChange} />
                    </label>
                    <label htmlFor="year"> Year:
                        <input type="text" name="year" placeholder="1994" id='year' value={book.year} onChange={onChange} />
                    </label>
                    <label htmlFor="imageUrl"> Image URL:
                        <input type="text" name="imageUrl" placeholder="imageUrl" id='imageUrl' value={book.imageUrl} onChange={onChange} />
                    </label>
                    <label htmlFor="wordsCount"> Words Count:
                        <input type="text" name="wordsCount" placeholder="10000" id='wordsCount' value={book.wordsCount} onChange={onChange} />
                    </label>

                    <button className='create-button'>Add</button>

                </form>
            </div>
            <div className='create-form-overlay'></div>
        </section>
    )
}