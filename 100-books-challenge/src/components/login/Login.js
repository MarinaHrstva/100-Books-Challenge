import { useContext, useState, } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../../api/users';
import { UserContext } from '../../contexts/UserContext';

import './Login.css'

export const Login = () => {
    const { userLogin } = useContext(UserContext);
    const [isEmailCorrect, setIsEmailCorrect] = useState(true);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);


    const navigate = useNavigate();
    async function onSubmit(e) {
        e.preventDefault()

        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.target));

        if (email == '' || password == '') {
            return alert('All fields are required!')
        }


        const userData = await login(email, password);
        userLogin(userData);
        
        navigate('/')

    }


    function onBlur(e) {
        if (e.target.name == 'email') {
            const email = e.target.value;
            if (email.includes('@')) {
                setIsEmailCorrect(true);
            } else {
                setIsEmailCorrect(false);
            };
        }

        if (e.target.name == 'password') {
            const password = e.target.value;
            if (password.length < 6) {
                setIsPasswordCorrect(false);
            } else {
                setIsPasswordCorrect(true);
            }
        }

    }


    return (

        <section className="login">
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="email">Email:
                        <input type="text" name="email" placeholder="example@mail.com" onBlur={onBlur} />
                        {isEmailCorrect || <p className='error-text'>Email is not valid!</p>}
                    </label>
                    <label htmlFor="password">Password:
                        <input type="password" name="password" placeholder="*********" onBlur={onBlur} />
                        {isPasswordCorrect || <p className='error-text'> Password should be at least 6 characters long!</p>}
                    </label>
                    <button className="login-button">Login</button>
                </form>
            </div>
            <div className='form-overlay'></div>
        </section>

    )
}