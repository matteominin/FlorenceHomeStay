import styles from './BlogSlideCard.module.scss';
import placeholderImage from '../../../assets/travelTips/placeholder.png'
import rightArrowIcon from '../../../assets/travelTips/right-arrow.png';

const API_URL = import.meta.env.VITE_API_URL;

const BlogSlideCard = ({ article, color }) => {
    return (
        <div className={styles['blog-slide-card']}>
            <img src={`${API_URL}${article.image?.url}` || placeholderImage} alt={article.image?.imgAlt || article.title} />

            <div className={styles.info}>
                {article.tags?.length > 0 &&
                    article.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                    ))
                }
                <p>{article.readingTime} min read</p>
            </div>

            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <a href={`travel-tips/${article.id}`}>
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