
import { Link } from 'react-router-dom'

export const User = () => {

    return (
        <div className="user">
            <p>Hello, <span>username</span></p>
            <p>Finished Books: 7</p>
            <p>Total words: 100000</p>
            <ul >
                <Link to='/my-books'>
                    <li><button>My Book</button></li>
                </Link>
                <li><button>Logout</button></li>

            </ul>
        </div>
    )
}