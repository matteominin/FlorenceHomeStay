import styles from "./Parking.module.scss"
import carIcon from '../../../assets/apartment/carIcon.png'
import parkingImage from '../../../assets/apartment/parking.png'

function Parking() {
    return (
        <section className={`${styles.parking} scheme-1`}>
            <div className={styles.left}>
                <img src={carIcon} alt="Car Icon" />
                <h3>Convenient Parking Options for Your Stay</h3>
                <p>Enjoy the convenience of a paid guarded garage, Parcheggio Porte Nuove, located just 30 meters from our entrance. Inform the parking attendant that you are guests of Florence Homestay to receive discounted rates. Our Homestay is also strategically located just 50 meters from Florence's Limited Traffic Zone (ZTL), offering easy access.</p>
            </div>

            <div className={styles.right}>
                <img src={parkingImage} alt="Parking Area" />
            </div>
        </section>
    )
}

export default Parking