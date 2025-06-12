import styles from './InfoSection.module.scss'
import roomIcon from '../../assets/apartment/roomIcon.png';
import showerIcon from '../../assets/apartment/showerIcon-black.png';
import bedroomImage from '../../assets/apartment/bedroom.png';

const InfoSection = () => {
    return (
        <section className={`${styles['info-section']} scheme-1`}>
            <div className={styles.left}>
                <h2>Experience Comfort and Charm in Our Beautifully Designed Florentine Rooms</h2>
                <p>Each room at Florence Homestay combines traditional Florentine elegance with modern comforts. Enjoy a peaceful retreat after exploring the vibrant city.</p>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <img src={roomIcon} alt="Room Icon" />
                        <h3>Room Features</h3>
                        <p>All rooms feature queen size beds, free Wi-Fi, and air conditioning for your comfort.</p>
                    </div>

                    <div className={styles.feature}>
                        <img src={showerIcon} alt="Shower Icon" />
                        <h3>Bathroom Access</h3>
                        <p>Guests enjoy access to a spacious bathroom with complimentary toiletries and hot shower.</p>
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <img src={bedroomImage} alt="Bedroom" />
            </div>
        </section>
    )
}

export default InfoSection