import styles from './Highlight.module.scss';
import securityIcon from '../../../assets/apartment/securityIcon.png';
import wifiIcon from '../../../assets/apartment/wifiIcon.png';
import transportIcon from '../../../assets/apartment/transportIcon.png';

const Highlight = () => {
    return (
        <section className={`${styles.highlight} scheme-5`}>
            <div className={styles.left}>
                <h3>Enjoy Every Convenience for a Relaxing Stay at Florence Homestay</h3>
            </div>

            <div className={styles.right}>
                <p className={styles.intro}>At Florence Homestay, we prioritize your comfort with a range of included services. From free Wi-Fi to air conditioning, we ensure a hassle-free experience during your stay.</p>

                <div className={styles.feature}>
                    <img src={securityIcon} alt="Security Icon" />
                    <p>Safe and secure accommodations for peace of mind.</p>
                </div>
                <div className={styles.feature}>
                    <img src={wifiIcon} alt="Wi-Fi Icon" />
                    <p>Free Wi-Fi to keep you connected during your stay.</p>
                </div>
                <div className={styles.feature}>
                    <img src={transportIcon} alt="Transport Icon" />
                    <p>Convenient transportation consultations to enhance your travel experience.</p>
                </div>
            </div>
        </section>
    )
}

export default Highlight