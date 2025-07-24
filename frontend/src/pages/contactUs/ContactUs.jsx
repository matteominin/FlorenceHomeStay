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
                    <div className={styles.contactMethod}>
                        <img src={phoneIcon} alt="Phone Icon" />
                        <h3>Phone</h3>
                        <a href="tel:+1234567890">+1 234 567 890</a>
                    </div>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
                        width={MapStyle.width}
                        height={MapStyle.height}
                        style={{ border: 0, borderRadius: '1rem' }}
                        allowFullScreen=""
                        aria-hidden="false"
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

// TODO: update contact details and map link