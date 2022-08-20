
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

import './HeroSection.css'

export const HeroSection = () => {
    const { user } = useContext(UserContext);

    return (
        <div className='hero-section-container'>
            <section className="hero-section">
                <h1>100 Books Challenge</h1>
                <Link to={user.email == '' ? '/create' : '/register'}>
                    <button className='button-primary'>Start the Challenge</button>
                </Link>
                <p>The 100 Books Everyone Should Read</p>
            </section>
            <div className="hero-section-overlay">

            </div>
        </div>
    )
}