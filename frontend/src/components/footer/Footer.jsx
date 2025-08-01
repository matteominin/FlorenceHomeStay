import logo from '../../assets/logo-white.png'
import facebookIcon from '../../assets/facebook.png'
import instagramIcon from '../../assets/instagram.png'
import twitterIcon from '../../assets/twitter.png'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='scheme-4'>
            <div className="upper">
                <div className="left">
                    <a className='logo' href="/">
                        <img src={logo} alt="FlorenceHomeStay logo" />
                    </a>
                    <div className="left__field">
                        <p>Address:</p>
                        <p>Via Roma 1, 50100 Florence, Italy</p>
                    </div>

                    <div className="left__field">
                        <p>Contact:</p>
                        <a href="tel:0551234567">055 1234567</a>
                        <a href='mailto:booking@florencehomestay.com'>
                            booking@florencehomestay.com
                        </a>
                    </div>

                    <div className="left__field social">
                        <a href="#">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="#">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="#">
                            <img src={twitterIcon} alt="Twitter" />
                        </a>
                    </div>
                </div>

                <div className="right">
                    <a href="/apartment">Apartment</a>
                    <a href="/travel-tips">Travel Tips</a>
                    <a href="/about-us">About Us</a>
                    <a href="/contact-us">Contact Us</a>
                </div>
            </div>
            <div className="row"></div>
            <p className='rights'>© 2025 FlorenceHomeStay. All rights reserved.</p>
        </footer>
    )
}

export default Footer