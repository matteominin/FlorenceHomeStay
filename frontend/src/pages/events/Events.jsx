import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/loading/Loading';
import TimeLineEvent from './TimelineEvent';
import handleLoadMore from './utils/handleLoadMore';
import { convertTime, convertDate } from './utils/dateConvert';
import styles from './Events.module.scss';

const API_URL = import.meta.env.VITE_API_URL;

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await fetch(`${API_URL}/api/events?limit=3&sort=date&page=1`)
                if (!res.ok) {
                    throw new Error('Failed to fetch events');
                }

                const eventsData = await res.json();
                setEvents(eventsData);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to load events');
                setLoading(false);
            }
        }
        fetchEvents();
    }, []);

    if (loading) {
        return (
            <div className={styles.events}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.intro}>
                        <h3 className={styles.subtitle}>Events</h3>
                        <h1 className={styles.title}>
                            Upcoming Local Events You<br />
                            Shouldn't Miss
                        </h1>
                        <p className={styles.introDescription}>
                            We gathered here the most important events in Florence, so you can plan your stay accordingly. From cultural festivals to local markets, there's always something happening our city.
                        </p>
                    </div>

                    <Loading
                        message="We are loading the best events for you..."
                    />
                </div>
                <Footer />
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.events}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.intro}>
                        <h3 className={styles.subtitle}>Events</h3>
                        <h1 className={styles.title}>
                            Upcoming Local Events You<br />
                            Shouldn't Miss
                        </h1>
                        <p className={styles.introDescription}>
                            We gathered here the most important events in Florence, so you can plan your stay accordingly. From cultural festivals to local markets, there's always something happening our city.
                        </p>
                    </div>

                    <div className={styles.error}>
                        <p>We are sorry, but something went wrong. Please try again later.</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className={styles.events}>
            <Header />
            <div className={styles.content}>
                <div className={styles.intro}>
                    <h3 className={styles.subtitle}>Events</h3>
                    <h1 className={styles.title}>
                        Upcoming Local Events You<br />
                        Shouldn't Miss
                    </h1>
                    <p className={styles.introDescription}>
                        We gathered here the most important events in Florence, so you can plan your stay accordingly. From cultural festivals to local markets, there's always something happening our city.
                    </p>
                </div>

                <div className={styles.timeline}>
                    {/* Continuous timeline line */}
                    <div className={styles.timelineLine}></div>

                    {events?.docs.map((event, index) => (
                        <TimeLineEvent
                            key={index}
                            date={convertDate(event.date)}
                            time={convertTime(event.time)}
                            title={event.title}
                            description={event.description}
                            imageUrl={event.image?.sizes.thumbnail?.url ? `${API_URL}${event.image.sizes.thumbnail.url}` : ''}
                            link={event.link}
                            isLeft={index % 2 === 0}
                            isLast={index === events.docs.length - 1}
                        />
                    ))}
                </div>

                {events?.hasNextPage && <div className={styles.loadMore}>
                    <button
                        onClick={() => handleLoadMore(events, setEvents, setLoadingMore)}
                        disabled={loadingMore}
                    >
                        {loadingMore ? "Loading..." : "Load More Events"}
                    </button>
                </div>}
            </div>
            <Footer />
        </div>
    );
};

export default Events;

//TODO: Fix error and loading page heights