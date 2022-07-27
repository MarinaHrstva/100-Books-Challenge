
export const Catalog=()=>{
    <section className="catalogue">
    <article className="book-card">
        <div>
            <img src="#" alt="Book cover"/>
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
            <span>Likes:1000</span><button>Like</button>

        </div>
    </article>
</section>
}