
import './Login.css'

export const Login = () => {
    return (

        <section className="login">
            <div>
                <form>
                    <label for="email">Email:
                        <input type="text" name="emai" placeholder="example@mail.com" />
                        <p className='error-text'>Email is not valid!</p>
                    </label>
                    <label for="password">Password:
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