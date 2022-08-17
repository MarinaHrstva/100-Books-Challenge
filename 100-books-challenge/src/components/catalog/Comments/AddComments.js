
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { addComment, getAllComments } from '../../../api/comments';
import { UserContext } from '../../../contexts/UserContext';
import './AddComment.css'

const AddComment = ({
    book
}) => {
    const { user } = useContext(UserContext);
    const [comments, setComments] = useState([]);

 
    async function addCommentHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const comment = {
            bookId: book._id,
            userEmail: user.email,
            comment: formData.get('comment')
        };

        await addComment(comment);
        e.target.reset();

    }

    return (
        <>
            <div className="book-details-comments-container">
                <p className='comment'>Ivan Ivanov: Chudesna kniga</p>
                <p className='comment'>Ivan Ivanov: Chudesna kniga</p>
                <p className='comment'>Ivan Ivanov: Chudesna kniga</p>
            </div>
            <div className='add-comment-container'>
                <form onSubmit={addCommentHandler}>
                    <input type="textarea" placeholder='Add comment...' name='comment' id='comment' />
                    <button >Add Comment</button>
                </form>
            </div>
        </>
    );
}

export default AddComment;