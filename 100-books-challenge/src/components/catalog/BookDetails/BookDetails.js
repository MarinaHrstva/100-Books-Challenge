import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { deleteBook, getBookById } from '../../../api/books';
import { getAllLikes, getLikesByUserId, likeBook } from '../../../api/likes';
import { UserContext } from '../../../contexts/UserContext';
import AddComment from '../Comments/AddComments';

import './BookDetails.css'

const BookDetails = () => {
    const { user } = useContext(UserContext);
    const { bookId } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({});
    const [likes, setLikes] = useState('');
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        getBookById(bookId)
            .then(result => setBook(result));

        getAllLikes(bookId)
            .then(res => setLikes(res));

        getLikesByUserId(bookId, user._id)
            .then(res => {
                if (res > 0) {
                    setIsLiked(true)
                }
            })
    }, [user, bookId])

    async function onDelete() {
        deleteBook(bookId);
        navigate('/books')
    }

    async function onLike() {

        if (!isLiked) {
            await likeBook(bookId);
            setIsLiked(true)

            getAllLikes(bookId)
                .then(res => setLikes(res));
        }

        navigate(`/books/${bookId}`)
    }

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
                <p>Likes: {likes}</p>
            </div>
      
            {user._id != book._ownerId
                ? <div className="book-details-buttons" style={user == '' ? { display: 'none' } : { display: 'flex' }}>
                    <button onClick={onLike} className={isLiked && 'disabled'}>Like</button>
                    {/* <button>Add Comment</button> */}
                </div>
                : <div className="book-details-buttons" style={user == '' ? { display: 'none' } : { display: 'flex' }} >
                    <Link to={`/edit/${bookId}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={onDelete}>Detele</button>
                </div>
            }

           <AddComment book={book}/>
        </div >
    );
}

export default BookDetails;