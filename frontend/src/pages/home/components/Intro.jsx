import florenceImage from '../../../assets/home/florence.jpg';
import Button from '../../../components/button/Button';
import './Intro.scss'

function Intro() {
    return (
        <section className="home__intro scheme-1">
            <div className='home__intro__container'>
                <h1>Florence HomeStay<br />Stay Local</h1>
                <div className="home__intro__right">
                    <p>
                        Experience Florence like a local. At Florence HomeStay, we combine comfortable accommodations with insider tips, ensuring your journey in Florence is unforgettable
                    </p>
                    <div className="cta">
                        <Button>
                            <a href="/apartment">Discover The Apartment</a>
                        </Button>
                        <Button variant='outline'>
                            <a href="#">Book Your Stay!</a>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="home__intro__left">
                <img src={florenceImage} alt="Florence" />
            </div>
        </section>
    )
}

export default Intro