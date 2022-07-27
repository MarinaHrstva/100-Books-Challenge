
export const Header=()=>{
    return(
        <header>
        <span className="logo"><img src="#" alt="logo"/></span>
        <nav>
            <ul className="guest">
                <li><a href="">Log In</a></li>
                <li><a href="">Register</a></li>
            </ul>
            <ul className="user">
                <li><a href="">Catalogue</a></li>
                <li><a href="">Achievements</a></li>
                <li><a href="">My Books</a></li>
                <li><a href="">Log out</a></li>
            </ul>
        </nav>
    </header>
    )
}