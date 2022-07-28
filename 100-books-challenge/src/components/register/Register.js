
import './Register.css'

export const Register = () => {

    return (
        <section class="register">
            <div>
                <form>
                    <label for="firstname"> First Name:
                        <input type="text" name="firstname" placeholder="Ivan" />
                    </label>
                    <label for="lastname">Last Name:
                        <input type="text" name="lastname" placeholder="Ivanov" />
                    </label>
                    <label for="email">Email:
                        <input type="text" name="emai" placeholder="example@mail.com" />
                    </label>
                    <label for="password"> Password:
                        <input type="password" name="password" placeholder="******" />
                    </label>
                  
                    <button className='register-button'>Register</button>

                </form>
            </div>
            <div className='register-form-overlay'></div>
        </section>
    )
}