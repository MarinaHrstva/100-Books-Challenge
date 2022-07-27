
import './Catalog.css'

export const Catalog = () => {
    return (
        <section className="catalog">
            <article className="book-card">
                <div>
                    <img src="#" alt="Book cover" />
                    <p>Title: Book Title</p>
                    <button>Details</button>
                </div>
                <div className="book-details">
                    <p>Author: Books Author</p>
                    <p>Year: 2022</p>
                    <p>Category: </p>
                    <p>Words: 20000</p>
                </div>
                <div className="card-actions">
                    {/* <div className="commens-container"></div>
                    <textarea name="commens" cols="20" rows="5"></textarea> */}
                    <span><i class="fas fa-thumbs-up"></i></span><span>Likes:1000</span>

                </div>
            </article>
            <article className="book-card">
                <div>
                    <img src="#" alt="Book cover" />
                    <p>Title: Book Title</p>
                    <button>Details</button>
                </div>
                <div className="book-details">
                    <p>Author: Books Author</p>
                    <p>Year: 2022</p>
                    <p>Category: </p>
                    <p>Words: 20000</p>
                </div>
                <div className="card-actions">
                    <div className="commens-container"></div>
                    <textarea name="commens" cols="20" rows="5"></textarea>
                    <span><i class="fas fa-thumbs-up"></i></span><span>Likes:1000</span>

                </div>
            </article>
            <article className="book-card">
                <div>
                    <img src="#" alt="Book cover" />
                    <p>Title: Book Title</p>
                    <button>Details</button>
                </div>
                <div className="book-details">
                    <p>Author: Books Author</p>
                    <p>Year: 2022</p>
                    <p>Category: </p>
                    <p>Words: 20000</p>
                </div>
                <div className="card-actions">
                    <div className="commens-container"></div>
                    <textarea name="commens" cols="20" rows="5"></textarea>
                    <span><i class="fas fa-thumbs-up"></i></span><span>Likes:1000</span>

                </div>
            </article>
            <article className="book-card">
                <div>
                    <img src="#" alt="Book cover" />
                    <p>Title: Book Title</p>
                    <button>Details</button>
                </div>
                <div className="book-details">
                    <p>Author: Books Author</p>
                    <p>Year: 2022</p>
                    <p>Category: </p>
                    <p>Words: 20000</p>
                </div>
                <div className="card-actions">
                    <div className="commens-container"></div>
                    <textarea name="commens" cols="20" rows="5"></textarea>
                    <span><i class="fas fa-thumbs-up"></i></span><span>Likes:1000</span>

                </div>
            </article>
        </section>
    )
}