
export const MyBooks = () => {
    return (
        <section className="my-books">
            <ul>
                <li>Book 1</li>
                <li>Book 2</li>
                <li>Book 3</li>
            </ul>

            <button>Add new book</button>

            <form>
                <input type="text" placeholder="Book title" />
                <input type="text" placeholder="Book author" />
                <textarea type="textarea" rows="4" cols="20"></textarea>
            </form>
        </section>
    )
}