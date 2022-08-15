import { Link } from 'react-router-dom'

import { Guest } from './Guest'
import { User } from './User'
import './Header.css'

export const Header = () => {
    return (
        <header>
            <Link to='/'>
            <div className="logo-div">
            <span className="logo"><i class="fas fa-book-reader"></i></span>
            <p>100 Books Challenge</p>
            </div>
            </Link>
            <nav>
           
                {/* <Guest /> */}
                <User />
            </nav>
        </header>
    )
}