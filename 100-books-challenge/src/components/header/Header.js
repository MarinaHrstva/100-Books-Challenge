
import { Guest } from './Guest'
import { User } from './User'
import './Header.css'

export const Header = () => {
    return (
        <header>
            <span className="logo"><i class="fas fa-book-reader"></i></span>
            <nav>
                <Guest />
                {/* <User /> */}
            </nav>
        </header>
    )
}