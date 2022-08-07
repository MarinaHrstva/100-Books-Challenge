import './BookDetails.css'

const BookDetails = ({
    book
}) => {
    return (
        <div className="book-details-wrapper">
            <div className="book-details-img-wraprer">
                <img src="http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png" alt="Book cover" />
            </div>
            <div className="book-details-text-container">
                <h3>Title:Book Title</h3>
                <p>Author:Book Author</p>
                <p>Year:1955</p>
                <p>Words:80000</p>
                <p>Likes:1000</p>

            </div>
            <div className="book-detail-button-container">
                <button>Like</button>
                <button>Add to My Books</button>
            </div>
        </div>
    );
}

export default BookDetails;