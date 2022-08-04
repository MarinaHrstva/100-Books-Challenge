
import './HeroSection.css'

export const HeroSection = () => {
    return (
     <div className='hero-section-container'>
        <section className="hero-section">
            <h1>100 Books Challenge</h1>
            <button className='button-primary'>Start the Challenge</button>
            <p>The 100 Books Everyone Should Read</p>
        </section>
        <div className="hero-section-overlay">

        </div>
     </div>
    )
}