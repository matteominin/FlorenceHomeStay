import styles from './FeatureSectionCard.module.scss';


const FeatureSectionCard = ({ img, imgAlt, title, description }) => {
    return (
        <div className={styles['feature-section-card']}>
            <div>
                <img src={img} alt={imgAlt} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default FeatureSectionCard;