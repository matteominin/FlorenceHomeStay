import styles from './ExploreCard.module.scss';
import arrowIcon from '../../../assets/travelTips/right-arrow.png';


const ExploreCard = ({
    id,
    img,
    imgAlt,
    title,
    description,
    readingTime,
    tags = []
}) => {
    return (
        <div className={styles['explore-card']}>
            <div>
                <img src={img} alt={imgAlt} />
            </div>

            <div className={styles['article-info']}>
                {tags && tags.length > 0 && (
                    tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                            {tag}
                        </span>
                    ))
                )}
                <span>{readingTime} min read</span>
            </div>

            <h3>{title}</h3>
            <p>{description}</p>

            <div className={styles['explore-card__cta']}>
                <a href={`/travel-tips/${id}`}>
                    Read more
                    <img src={arrowIcon} alt="arrow icon" />
                </a>
            </div>
        </div>
    )
}

export default ExploreCard;