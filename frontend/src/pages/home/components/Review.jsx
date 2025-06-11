import styles from './Review.module.scss'
import star from '../../../assets/home/review/star.png'
import avatar from '../../../assets/home/review/avatar.png'
import airbnb from '../../../assets/home/review/airbnb.png'

const Review = () => {
    return (
        <section className={`${styles.review} scheme-2`}>
            <div className={styles.star__rating}>
                <img src={star} alt="Star Rating" />
                <img src={star} alt="Star Rating" />
                <img src={star} alt="Star Rating" />
                <img src={star} alt="Star Rating" />
                <img src={star} alt="Star Rating" />
            </div>
            <p className={styles.review__text}>"Staying at FlorenceHomeStay was a dream! The hospitality and local tips made our trip unforgettable."</p>

            <div className={styles.bottom__user}>
                <img src={avatar} alt="review avatar" />
                <div className={styles.bottom__user__info}>
                    <h4>Anonymous</h4>
                    <p>Traveler, USA</p>
                </div>
                <div className={styles.row}></div>
                <img className={styles.bottom__user__airbnb} src={airbnb} alt="Airbnb Logo" />
            </div>
        </section>
    )
}

export default Review