import styles from './BlogSlideCard.module.scss';
import placeholderImage from '../../../assets/travelTips/placeholder.png'
import rightArrowIcon from '../../../assets/travelTips/right-arrow.png';

const BlogSlideCard = ({ id, imgSrc, imgAlt, readingTime, title, text, tags, color }) => {
    return (
        <div className={styles['blog-slide-card']}>
            <img src={imgSrc || placeholderImage} alt={imgAlt || ""} /> {/* TODO: check alt in db */}

            <div className={styles.info}>
                {tags && tags.length > 0 && (
                    <span className={styles.tags}>
                        {tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                    </span>
                )}
                <p>{readingTime} min read</p>
            </div>

            <h3>{title}</h3>
            <p>{text}</p>
            <a href={`travel-tips/${id}`}>
                Read more
                <img
                    src={rightArrowIcon}
                    alt="arrow right"
                    style={color === 'white' ? { filter: 'invert(1)' } : {}}
                />
            </a>
        </div>
    )
}

export default BlogSlideCard