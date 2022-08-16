import { Link } from "react-router-dom"


export const Guest = () => {

    return (
        <ul className="guest">

            <Link to='/login'>
                <li><button>Login</button></li>
            </Link>
            <Link to='/register'>
                <li><button>Register</button></li>
            </Link>
        </ul>
    )
}