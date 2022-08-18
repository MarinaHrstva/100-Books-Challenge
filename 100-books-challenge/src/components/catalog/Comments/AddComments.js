
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

    useEffect(() => {
        getAllComments(book._id)
            .then(res => setComments(res))
    }, [book])

    async function addCommentHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const comment = {
            bookId: book._id,
            username: user.username,
            comment: formData.get('comment')
        };

        await addComment(comment);
        e.target.reset();

        getAllComments(book._id)
            .then(res => setComments(res))

    }

    return (
        <>
            <div className="book-details-comments-container">
                {comments.length == 0
                    ? <p>No comments yet!</p>
                    : comments.map(c => <p className='comment' key={c.length + book._id}>{c.username}: {c.comment}</p>)}
            </div>
            {user.email && user._id != book._ownerId && <div className='add-comment-container'>
                <form onSubmit={addCommentHandler}>
                    <input type="textarea" placeholder='Add comment...' name='comment' id='comment' />
                    <button >Add Comment</button>
                </form>
            </div>}

        </>
    );
}

export default AddComment;