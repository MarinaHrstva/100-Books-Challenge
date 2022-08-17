
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../api/users'
import { UserContext } from '../../contexts/UserContext'
import './Register.css'

export const Register = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(UserContext);
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        gender: 'male',
    })

    function onChange(e) {
        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))

    }


    async function onSubmit(e) {
        e.preventDefault()

        const userData = await register(user.username, user.email, user.password, user.gender);
        userLogin(userData);
        navigate('/')
    }

    return (
        <section class="register">
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="usernme">Username:
                        <input type="text" name="usernme" placeholder="username" value={user.username} onChange={onChange} />
                        <p className='error-text'>Username should be at least 3 characters long!</p>
                    </label>

                    <label htmlFor="email">Email:
                        <input type="text" name="email" placeholder="example@mail.com" value={user.email} onChange={onChange} />
                        <p className='error-text'>Email is not valid!</p>
                    </label>
                    <label htmlFor="password"> Password:
                        <input type="password" name="password" placeholder="******" value={user.password} onChange={onChange} />
                        <p className='error-text'> Password should be at least 6 characters long!</p>
                    </label>
                    <label htmlFor="confirm-password"> Confirm Password:
                        <input type="password" name="confirm-password" placeholder="******" onChange={onChange} />
                        <p className='error-text'> The password confirmation does not match!</p>
                    </label>
                    <label htmlFor="gender">Gender:
                        <select name="gender" id="gender" onChange={onChange}>
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