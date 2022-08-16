import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../../../api/books';
import { UserContext } from '../../../contexts/UserContext';
import './BookDetails.css'

const BookDetails = () => {
    const { user } = useContext(UserContext);
    const { bookId } = useParams();

    const [book, setBook] = useState({})

    useEffect(() => {
        getBookById(bookId)
            .then(result => setBook(result))
    }, [bookId])


    return (
        <div className="book-details-wrapper">
            <div className="book-details-img-wraprer">
                <img src={book.imageUrl || `http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png`} alt="Book cover" />
            </div>
            <div className="book-details-text-container">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>Year: {book.year}</p>
                <p>Words: {book.wordsCount}</p>
                {/* <p>Likes:1000</p> */}
            </div>

            <div className="book-details-comments-container">
                <p className='comment'>Ivan Ivanov: Chudesna kniga</p>
                <p className='comment'>Ivan Ivanov: Chudesna kniga</p>
                <p className='comment'>Ivan Ivanov: Chudesna kniga</p>
            </div>

            {user._id != book._ownerId
                ? <div className="book-details-buttons" style={user == '' ? { display: 'flex' } : { display: 'none' }}>
                    <button>Like</button>
                    <button>Add Comment</button>
                </div>
                : <div className="book-details-buttons" style={user == '' ? { display: 'flex' } : { display: 'none' }} >
                    <button>Edit</button>
                    <button>Detele</button>
                </div>
            }

        </div >
    );
}

export default BookDetails;