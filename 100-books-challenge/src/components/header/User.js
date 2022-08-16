
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../api/users';
import { UserContext } from '../../contexts/UserContext'

export const User = () => {
    const { user, userLogout } = useContext(UserContext);
    const navigate = useNavigate();

    function onLogout() {
        logout();
        userLogout();
        navigate('/');
    }

    return (
        <div className="user">

            <ul >
                <Link to='/profile'>
                    <li><button>My Profile</button></li>
                </Link>
                <Link to='/create'>
                    <li><button>Add Book</button></li>
                </Link>
                <li><button onClick={onLogout}>Logout</button></li>

            </ul>
        </div>
    )
}