
import './BookCard.css'

const BookCard = ({
    book
}) => {
    return (

        <article className="book-card">
            <div className="card-imgage-wraper">
                <img src="http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png" alt="Book cover" />

            </div>
            <div className='card-text-wrapper'>
                <p>Title: Book Title</p>
                <p>Author: Book Author</p>
                <p>Likes:18888</p>
                <button>Details</button>
                <button>Like</button>
            </div>
        </article>
    );
}

export default BookCard;