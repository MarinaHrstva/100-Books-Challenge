import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { getBooksByUser } from "../../api/books";
import { UserContext } from "../../contexts/UserContext";
import BookCard from "../catalog/BookCard/BookCard";

import './Profile.css'



const Profile = () => {
    const { user } = useContext(UserContext);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooksByUser(user._id)
            .then(res => setBooks(res));
    }, [user])


    return (
        <div className="profile-wrapper">

            <div className="info-container">
                <div className="avatar-wrapper">
                    <img src={user.gender == 'female' ? 'https://www.svgrepo.com/show/382110/female-avatar-girl-face-woman-user-3.svg' : 'http://www.caiml.co.uk/wp-content/uploads/2016/03/270x270-male-avatar.png'} alt="" />
                </div>
               <div className="text-wrapper">
               <p>{user.username || user.email}</p>
                <p>Books: {books.length}</p>
               </div>
            </div>

            <div className="books-container">
                {books.map(b => <BookCard book={b} key={b._id} />)}
            </div>

        </div>
    );
}

export default Profile;