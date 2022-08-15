
import { Link } from 'react-router-dom'

export const User = () => {

    return (
        <div className="user">
            <p>Hello, <span>username</span></p>
            <p>Books: 7</p>
            <p>Total words: 100000</p>
            <ul >
                <Link to='/profile'>
                    <li><button>My Profile</button></li>
                </Link>
                <li><button>Logout</button></li>

            </ul>
        </div>
    )
}