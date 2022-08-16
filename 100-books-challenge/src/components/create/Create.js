
import { useState } from 'react'
import './Create.css'

export const Create = () => {

    const [book, setBook] = useState({
        title: '5',
        author: '',
        category: '',
        year: '',
        imageUrl: '',
        wordsCount: '',

    })

    function onBlurHandler(e) {

    }

    async function onSubmit(e) {
        e.preventDefault()
    }

    return (

        <section className="create">
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="title"> Book Title:
                        <input type="text" name="title" placeholder="Book title" id='title' value={book.title} onBlur={onBlurHandler} />
                    </label>
                    <label htmlFor="author">Book Author:
                        <input type="text" name="author" placeholder="Book author" id='author' value={book.author} onBlur={onBlurHandler} />
                    </label>
                    <label htmlFor="category">Category:
                        <input type="text" name="category" placeholder="Fantasy" value={book.category} onBlur={onBlurHandler} />
                    </label>
                    <label htmlFor="year"> Year:
                        <input type="text" name="year" placeholder="1994" id='year' value={book.year} onBlur={onBlurHandler} />
                    </label>
                    <label htmlFor="imageUrl"> Image URL:
                        <input type="text" name="imageUrl" placeholder="imageUrl" id='imageUrl' value={book.imageUrl} onBlur={onBlurHandler} />
                    </label>
                    <label htmlFor="wordsCount"> Words Count:
                        <input type="text" name="wordsCount" placeholder="10000" id='wordsCount' value={book.wordsCount} onBlur={onBlurHandler} />
                    </label>

                    <button className='create-button'>Add</button>

                </form>
            </div>
            <div className='create-form-overlay'></div>
        </section>
    )
}