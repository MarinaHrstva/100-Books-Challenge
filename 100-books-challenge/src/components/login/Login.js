
import './Login.css'

export const Login = () => {
    return (
     
            <section className="login">
                <div>
                    <form>
                        <label for="email">Email:
                            <input type="text" name="emai" placeholder="example@mail.com" />
                        </label>
                        <label for="password">Password:
                            <input type="password" name="password" placeholder="*********" />
                        </label>
                        <button className="form-button">Login</button>
                    </form>
                </div>
                <div className='form-overlay'></div>
            </section>
    
    )
}