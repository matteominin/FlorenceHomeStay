import styles from './BlogSlideCard.module.scss';
import placeholderImage from '../../../assets/travelTips/placeholder.png'
import rightArrowIcon from '../../../assets/travelTips/right-arrow.png';

const BlogSlideCard = ({ color }) => {
    return (
        <div className={styles['blog-slide-card']}>
            <img src={placeholderImage} alt="" />

            <div className={styles.info}>
                <span>Category</span>
                <p>5 min read</p>
            </div>

            <h3>Blog title heading will go here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat in leo facilisis aliquet.</p>
            <a href="#">
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