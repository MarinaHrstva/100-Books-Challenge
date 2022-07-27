
export const Login = () => {
    return (

        <section className="log-in">
            <form>
                <label for="email">
                    <input type="text" name="emai" placeholder="example@mail.com" />
                </label>
                <label for="password">
                    <input type="password" name="password" placeholder="*********" />
                </label>
                <button>Log in</button>
            </form>
        </section>
    )
}