import styles from './TimelineEvent.module.scss';

const TimeLineEvent = ({ date, time, title, description, link, imageUrl, isLeft = true }) => {
    return (
        <div className={styles.timelineEvent}>
            {/* Timeline dot */}
            <div className={styles.timelineDot}></div>

            <div className={styles.eventContent}>
                {isLeft ? (
                    <>
                        {/* Content on left */}
                        <div className={styles.contentLeft}>
                            <h2 className={styles.eventTitle}>{title}</h2>
                            <div className={styles.eventDescription}>
                                <p className={styles.description}>
                                    {description}
                                </p>
                                {link && (<div className={styles.buttonGroup}>
                                    <a
                                        className={styles.learnMoreBtn}
                                        href={link}
                                    >
                                        <span className={styles.arrow}>←</span>
                                        Learn More
                                    </a>
                                </div>
                                )}
                            </div>
                            {imageUrl && (
                                <div className={styles.eventImage}>
                                    <img src={imageUrl} alt="" />
                                </div>
                            )}
                        </div>

                        {/* Date on right */}
                        <div className={styles.spacer}></div>
                        <div className={styles.dateRight}>
                            <div className={styles.dateTimeContainer}>
                                <h2 className={styles.eventDate}>{date}</h2>
                                <p className={styles.eventTime}>{time}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Date on left */}
                        <div className={styles.dateLeft}>
                            <div className={styles.dateTimeContainer}>
                                <h2 className={styles.eventDate}>{date}</h2>
                                <p className={styles.eventTime}>{time}</p>
                            </div>
                        </div>

                        <div className={styles.spacer}></div>

                        {/* Content on right */}
                        <div className={styles.contentRight}>
                            <h2 className={styles.eventTitle}>{title}</h2>
                            <div className={styles.eventDescription}>
                                <p className={styles.description}>
                                    {description}
                                </p>
                                {link && (
                                    <div className={styles.buttonGroup}>
                                        <a
                                            className={styles.learnMoreBtn}
                                            href={link}
                                        >
                                            Learn More
                                            <span className={styles.arrow}>→</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                            {imageUrl && (
                                <div className={styles.eventImage}>
                                    <img src={imageUrl} alt="" />
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default TimeLineEvent;