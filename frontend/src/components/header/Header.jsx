import { useState } from 'react'
import Button from '../button/Button'
import logo from '../../assets/logo-black.png'
import './Header.scss'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className='scheme-1'>
            <div className="left">
                <a className='left__logo' href="/">
                    <img src={logo} alt="logo Florence HomeStay" />
                </a>

                <ul className='desktop-nav'>
                    <li>
                        <a href="/apartment">Apartment</a>
                    </li>
                    <li>
                        <a href="/travel-tips">Travel Tips</a>
                    </li>
                    <li>
                        <a href="/about-us">About Us</a>
                    </li>
                    <li>
                        <a href="/cotact-us">Contact Us</a>
                    </li>
                </ul>
            </div>

            {/* Burger menu icon */}
            <div className="burger-menu" onClick={toggleMenu}>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            </div>

            {/* Mobile navigation */}
            <ul className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <a href="/apartment" onClick={toggleMenu}>Apartment</a>
                </li>
                <li>
                    <a href="/travel-tips" onClick={toggleMenu}>Travel Tips</a>
                </li>
                <li>
                    <a href="/about-us" onClick={toggleMenu}>About Us</a>
                </li>
                <li>
                    <a href="/contact-us" onClick={toggleMenu}>Contact Us</a>
                </li>
                <li>
                    <Button className="cta mobile-cta" onClick={toggleMenu}>
                        <a href="#">Book Your Stay!</a>
                    </Button>
                </li>
            </ul>

            <Button className="desktop-cta">
                <a href="#">Book Your Stay!</a>
            </Button>
        </header>
    )
}

export default Header