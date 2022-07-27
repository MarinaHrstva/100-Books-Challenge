
export const Register = () => {

    return (
        <section class="register">
            <form>
                <label for="firstname">
                    <input type="text" name="firstname" placeholder="First name" />
                </label>
                <label for="lastname">
                    <input type="text" name="lastname" placeholder="Last name" />
                </label>
                <label for="email">
                    <input type="text" name="emai" placeholder="Email" />
                </label>
                <label for="password">
                    <input type="password" name="password" placeholder="Password" />
                </label>
                <label for="password">
                    <input type="password" name="password" placeholder="Password again" />
                </label>
                <button>Register</button>
            </form>
        </section>
    )
}