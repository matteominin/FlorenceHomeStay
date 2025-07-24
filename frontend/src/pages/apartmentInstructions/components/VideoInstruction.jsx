import styles from './VideoInstruction.module.scss';

const VideoInstruction = ({ title, videoUrl, description }) => {
    return (
        <div className={styles.video_section}>
            <div className={styles.video}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles.video_container}>
                    <iframe
                        src={videoUrl}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoInstruction