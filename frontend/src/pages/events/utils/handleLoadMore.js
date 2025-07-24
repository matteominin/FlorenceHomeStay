const API_URL = import.meta.env.VITE_API_URL;

const loadMoreEvents = async (events, setEvents, setLoadingMore, setError) => {
    setLoadingMore(true);
    if (!events.hasNextPage) {
        setLoadingMore(false);
        return;
    }

    try {
        const res = await fetch(`${API_URL}/api/events?limit=1&sort=date&page=${events.page + 1}`);
        if (!res.ok) {
            throw new Error('Failed to fetch more events');
        }
        const newEvents = await res.json();
        setEvents((prevEvents) => ({
            ...prevEvents,
            docs: [...prevEvents.docs, ...newEvents.docs],
            hasNextPage: newEvents.hasNextPage,
            page: newEvents.page
        }));
    } catch (error) {
        console.error(error);
        setError('Failed to load more events');
    } finally {
        setLoadingMore(false);
    }
}


export default loadMoreEvents;