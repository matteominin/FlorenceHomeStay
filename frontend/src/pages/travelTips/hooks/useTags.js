import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useTags = () => {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`${API_URL}/api/tags`);
                if (!response.ok) {
                    throw new Error('Failed to fetch tags');
                }

                const data = await response.json();
                setTags(data.docs);
            } catch (err) {
                console.error('Error fetching tags:', err);
                setError('Failed to load tags.');
            } finally {
                setLoading(false);
            }
        };

        fetchTags();
    }, []);

    return { tags, loading, error };
}

export default useTags;