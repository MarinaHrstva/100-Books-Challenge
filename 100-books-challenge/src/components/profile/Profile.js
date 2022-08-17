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
                    <p>{user.email}</p>
                    <p>Books: {books.length}</p>
                </div>

            <div className="books-container">
                {books.map(b => <BookCard book={b} key={b._id} />)}
            </div>

        </div>
    );
}

export default Profile;