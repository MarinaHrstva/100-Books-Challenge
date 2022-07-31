
import './Catalog.css'

export const Catalog = () => {
    return (
        <section className="catalog">

         <div className="catalod-wraper">
         <article className="book-card">
                <div className="card-imgage-wraper">
                    <img src="http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png" alt="Book cover" />

                </div>
                <p>Title: Book Title</p>
            </article>
            <article className="book-card">
                <div className="card-imgage-wraper">
                    <img src="http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png" alt="Book cover" />

                </div>
                <p>Title: Book Title</p>
            </article> 
         </div>

        </section>
    )
}