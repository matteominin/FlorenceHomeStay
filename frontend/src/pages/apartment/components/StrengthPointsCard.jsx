import styles from './StrengthPointsCard.module.scss';

const StrengthPointsCard = ({ icon, title, description }) => {
    return (
        <div className={styles.card}>
            <img src={icon} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default StrengthPointsCard