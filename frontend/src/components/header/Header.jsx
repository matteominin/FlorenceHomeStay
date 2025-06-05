import Button from '../button/Button'
import logo from '../../assets/logo.png'
import './Header.scss'

function Header() {
    return (
        <header className='scheme-1'>
            <div className="left">
                <a className='left__logo' href="/">
                    <img src={logo} alt="logo Florence HomeStay" />
                </a>

                <ul>
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

            <Button>
                <a href="">Book Your Stay!</a>
            </Button>
        </header>
    )
}

export default Header