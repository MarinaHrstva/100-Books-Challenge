
import { Link } from 'react-router-dom';
import './BookCard.css'

const BookCard = ({
    book
}) => {
    return (

        <article className="book-card">
            <div className="card-imgage-wraper">
                <img src={book.imageUrl || `http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png`} alt="Book cover" />

            </div>
            <div className='card-text-wrapper'>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <Link to={`/books/${book._id}`}>
                    <button>Details</button>
                </Link>

            </div>

        </article>
    );
}

export default BookCard;