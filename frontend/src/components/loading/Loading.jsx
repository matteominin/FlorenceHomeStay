import styles from './Loading.module.scss'

const Loading = ({ message }) => {
    return (
        <div className={styles['loading-container']}>
            <div className={styles['loading-spinner']}></div>
            <p>{message || 'Loading...'}</p>
        </div>
    )
}

export default Loading