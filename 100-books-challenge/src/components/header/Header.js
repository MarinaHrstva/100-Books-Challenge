
import { Guest } from './Guest'
import { User } from './User'
import './Header.css'

export const Header = () => {
    return (
        <header>
            <div className="logo-div">
            <span className="logo"><i class="fas fa-book-reader"></i></span>
            <p>100 Books Challenge</p>
            </div>
            <nav>
                <Guest />
                {/* <User /> */}
            </nav>
        </header>
    )
}