import styles from './ContactUs.module.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import phoneIcon from '../../assets/contactUs/phoneIcon.png'
import emailIcon from '../../assets/contactUs/emailIcon.png'
import locationIcon from '../../assets/contactUs/locationIcon.png'
import arrow from '../../assets/travelTips/right-arrow.png'


const MapStyle = {
    width: "100%",
    height: "100%",
};


const ContactUs = () => {
    return (
        <div className={`${styles.contactUs}`}>
            <Header />
            <div className={styles.topContainer}>
                <h1>Get in Touch</h1>
                <p>If you have any questions or feedback, feel free to reach out to us!</p>
            </div>

            <div className={styles.bottomContainer}>
                <div className={styles.left}>
                    <div className={styles.contactMethod}>
                        <img src={emailIcon} alt="Email Icon" />
                        <h3>Email</h3>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                    {/* <div className={styles.contactMethod}>
                        <img src={phoneIcon} alt="Phone Icon" />
                        <h3>Phone</h3>
                        <a href="tel:+1234567890">+1 234 567 890</a>
                    </div> */}
                    <div className={styles.contactMethod}>
                        <img src={locationIcon} alt="Location Icon" />
                        <h3>Location</h3>
                        <p>Location: 123 Main St, Anytown, USA</p>
                        <a className={styles.location} href="#">
                            Get Directions
                            <img src={arrow} alt="Arrow" />
                        </a>
                    </div>
                </div>

                <div className={styles.map_container}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.679896950226!2d11.237552013083508!3d43.77950317097597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56bab97a34a5%3A0x8357733d527ef7af!2sVia%20delle%20Porte%20Nuove%2C%2011%2C%2050144%20Firenze%20FI!5e0!3m2!1sit!2sit!4v1757365289783!5m2!1sit!2sit"
                        width={MapStyle.width}
                        height={MapStyle.height}
                        style={{ border: 0, borderRadius: '1rem' }}
                        allowFullScreen={true}
                        aria-hidden={false}
                        tabIndex="0"
                        title="Humanity First Indonesia"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs