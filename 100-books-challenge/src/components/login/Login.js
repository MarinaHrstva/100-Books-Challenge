import { useContext, } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../../api/users';
import { UserContext } from '../../contexts/UserContext';

import './Login.css'

export const Login = () => {
    const { userLogin } = useContext(UserContext)

    const navigate = useNavigate();
    async function onSubmit(e) {
        e.preventDefault()

        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.target));


        const userData = await login(email, password);
        userLogin(userData);
        navigate('/')

    }





    return (

        <section className="login">
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="email">Email:
                        <input type="text" name="email" placeholder="example@mail.com" />
                        <p className='error-text'>Email is not valid!</p>
                    </label>
                    <label htmlFor="password">Password:
                        <input type="password" name="password" placeholder="*********" />
                        <p className='error-text'> Password should be at least 6 characters long!</p>
                    </label>
                    <button className="login-button">Login</button>
                </form>
            </div>
            <div className='form-overlay'></div>
        </section>

    )
}