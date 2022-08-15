
import './Login.css'

export const Login = () => {
    return (

        <section className="login">
            <div>
                <form>
                    <label htmlFor="email">Email:
                        <input type="text" name="emai" placeholder="example@mail.com" />
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