
import './Register.css'

export const Register = () => {

    return (
        <section class="register">
            <div>
                <form>
                    <label for="firstname"> First Name:
                        <input type="text" name="firstname" placeholder="Ivan" />
                        <p className='error-text'> First name should be at least 3 characters long!</p>
                    </label>
                    <label for="lastname">Last Name:
                        <input type="text" name="lastname" placeholder="Ivanov" />
                        <p className='error-text'> Last name should be at least 3 characters long!</p>

                    </label>
                    <label for="email">Email:
                        <input type="text" name="emai" placeholder="example@mail.com" />
                        <p className='error-text'>Email is not valid!</p>
                    </label>
                    <label for="password"> Password:
                        <input type="password" name="password" placeholder="******" />
                        <p className='error-text'> Password should be at least 6 characters long!</p>
                    </label>
                    <label for="confirm-password"> Confirm Password:
                        <input type="password" name="confirm-password" placeholder="******" />
                        <p className='error-text'> The password confirmation does not match!</p>
                    </label>

                    <button className='register-button'>Register</button>

                </form>
            </div>
            <div className='register-form-overlay'></div>
        </section>
    )
}