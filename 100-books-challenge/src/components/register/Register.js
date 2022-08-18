
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../api/users'
import { UserContext } from '../../contexts/UserContext'
import './Register.css'

export const Register = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(UserContext);
    const [isCorrect, setIsCorrect] = useState({
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
    })


    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        gender: 'male',
    })

    async function onSubmit(e) {
        e.preventDefault();

        const error = Object.values(isCorrect);
        const missingField = Object.values(user);

        if (error.some(x => x == false)
            || missingField.some(x => x == '')) {
            return alert('All fields are required!')
        }

        const userData = await register(user.username, user.email, user.password, user.gender);
        userLogin(userData);
        navigate('/')
    }

    function onChange(e) {

        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value

        }))

        if (e.target.name == 'username') {
            if (e.target.value.length < 3) {
                setIsCorrect(state => ({
                    ...state,
                    username: false
                }))
            } else {
                setIsCorrect(state => ({
                    ...state,
                    username: true
                }))
            }
        }

        if (e.target.name == 'email') {
            if (e.target.value.includes('@')) {
                setIsCorrect(state => ({
                    ...state,
                    email: true
                }))
            } else {
                setIsCorrect(state => ({
                    ...state,
                    email: false
                }))
            }
        }

        if (e.target.name == 'password') {
            const currentPassword = e.target.value;
            if (currentPassword.length < 6) {
                setIsCorrect(state => ({
                    ...state,
                    password: false
                }))
            } else {
                setIsCorrect(state => ({
                    ...state,
                    password: true
                }))
            }
        }

    }

    function onConfirmPassword(e) {
        if (e.target.value != user.password) {
            setIsCorrect(state => ({
                ...state,
                confirmPassword: false
            }))
        } else {
            setIsCorrect(state => ({
                ...state,
                confirmPassword: true
            }))
        }
    }


    return (
        <section className="register">
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="username">Username:
                        <input type="text" name="username" placeholder="username" value={user.username} onChange={onChange} />
                        {isCorrect.username || <p className='error-text'>Username should be at least 3 characters long!</p>}
                    </label>

                    <label htmlFor="email">Email:
                        <input type="text" name="email" placeholder="example@mail.com" value={user.email} onChange={onChange} />
                        {isCorrect.email || <p className='error-text'>Email is not valid!</p>}
                    </label>
                    <label htmlFor="password"> Password:
                        <input type="password" name="password" placeholder="******" value={user.password} onChange={onChange} />
                        {isCorrect.password || <p className='error-text'> Password should be at least 6 characters long!</p>}
                    </label>
                    <label htmlFor="confirm-password"> Confirm Password:
                        <input type="password" name="confirm-password" placeholder="******" onChange={onConfirmPassword} />
                        {isCorrect.confirmPassword || <p className='error-text'> The password confirmation does not match!</p>}
                    </label>
                    <label htmlFor="gender">Gender:
                        <select name="gender" id="gender" onChange={onChange} >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>

                    <button className='register-button'>Register</button>

                </form>
            </div>
            <div className='register-form-overlay'></div>
        </section>
    )
}