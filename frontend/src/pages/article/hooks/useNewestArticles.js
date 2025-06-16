import { useState, useEffect } from 'react';
import { stringify } from 'qs-esm';

const API_URL = import.meta.env.VITE_API_URL;

const useNewestArticles = (id) => {
    const [newestArticles, setNewestArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const queryParams = {
        sort: '-publishedDate',
        limit: 3,
        where: {
            id: {
                not_equals: id
            }
        }
    }

    const stringifiedQuery = stringify(
        queryParams,
        { addQueryPrefix: true }
    )

    useEffect(() => {
        const fetchNewestArticles = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(`${API_URL}/api/articles${stringifiedQuery}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();

                const articles = data.docs.map((doc) => ({
                    id: doc.id,
                    img: `${API_URL}${doc.image.url}`,
                    imgAlt: doc.image.alt || doc.title, // Better alt text
                    title: doc.title,
                    description: doc.summary,
                    readingTime: doc.readingTime,
                    tags: doc.tags.map(t => t.tag)
                }));
                setNewestArticles(articles);
            } catch (err) {
                console.error('Error fetching newest articles:', err);
                setError('Failed to load latest articles.');
                setNewestArticles([]); // Clear articles on error
            } finally {
                setLoading(false);
            }
        };

        fetchNewestArticles();
    }, []);

    return { newestArticles, loadingNewest: loading, errorNewest: error };
};

export default useNewestArticles;