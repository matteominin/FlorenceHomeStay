import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useArticle = (id) => {
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        const fetchArticle = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(`${API_URL}/api/articles/${id}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch article');
                }
                const data = await res.json();

                setArticle(data);
            } catch (err) {
                setError(err.message || 'Failed to load article');
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    return { article, loading, error };
}

export default useArticle;