
import { Link } from 'react-router-dom'

export const User = () => {

    return (
        <div className="user">
            <p>Hello, <span>username</span></p>
        
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