
import './Create.css'

export const Create = () => {

    return (

        <section class="create">
            <div>
                <form>
                    <label for="title"> Book Title:
                        <input type="text" name="title" placeholder="Book title" />

                    </label>
                    <label for="author">Book Author:
                        <input type="text" name="author" placeholder="Book author" />
                    </label>
                    <label for="email">Email:
                        <input type="text" name="emai" placeholder="example@mail.com" />
                    </label>
                    <label for="password"> Password:
                        <input type="password" name="password" placeholder="******" />
                    </label>
                    <label for="confirm-password"> Confirm Password:
                        <input type="password" name="confirm-password" placeholder="******" />
                    </label>

                    <button className='create-button'>Add</button>

                </form>
            </div>
            <div className='create-form-overlay'></div>
        </section>
    )
}