
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

export const User = () => {
    const {user }= useContext(UserContext);

    return (
        <div className="user">
            <p>Hello, <span>{user.email}</span></p>

            <ul >
                <Link to='/profile'>
                    <li><button>My Profile</button></li>
                </Link>
                <Link to='/create'>
                    <li><button>Add Book</button></li>
                </Link>
                <li><button>Logout</button></li>

            </ul>
        </div>
    )
}