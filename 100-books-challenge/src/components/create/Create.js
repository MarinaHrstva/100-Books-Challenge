
import './Create.css'

export const Create = () => {

    return (

        <section class="create">
            <div>
                <form>
                    <label htmlFor="title"> Book Title:
                        <input type="text" name="title" placeholder="Book title" id='title'/>
                    </label>
                    <label htmlFor="author">Book Author:
                        <input type="text" name="author" placeholder="Book author" id='author' />
                    </label>
                    <label htmlFor="category">Category:
                        <input type="text" name="category" placeholder="Fantasy" />
                    </label>
                    <label htmlFor="year"> Year:
                        <input type="text" name="year" placeholder="1994" id='year' />
                    </label>
                    <label htmlFor="imageUrl"> Image URL:
                        <input type="text" name="imageUrl" placeholder="imageUrl" id='imageUrl' />
                    </label>
                    <label htmlFor="wordsCount"> Image URL:
                        <input type="text" name="wordsCount" placeholder="10000" id='wordsCount' />
                    </label>

                    <button className='create-button'>Add</button>

                </form>
            </div>
            <div className='create-form-overlay'></div>
        </section>
    )
}