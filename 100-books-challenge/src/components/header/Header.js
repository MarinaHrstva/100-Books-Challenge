import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Guest } from './Guest'
import { User } from './User'

import { UserContext } from '../../contexts/UserContext'

import './Header.css'

export const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <header>
            <Link to='/'>
                <div className="logo-div">
                    <span className="logo"><i className="fas fa-book-reader"></i></span>
                    <p>100 Books Challenge</p>
                </div>
            </Link>
            <nav>
                {user.email && <p>Hello, <span>{user.email}</span></p>}

                < Link to='/books'>
                   <button id='catalogBtn'>Catalog</button>
                </Link>
                {user.email
                    ? <User />
                    : <Guest />
                }
            </nav>
        </header>
    )
}