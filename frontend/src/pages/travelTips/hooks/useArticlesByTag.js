import { useState, useEffect } from 'react';
import { stringify } from 'qs-esm';

const API_URL = import.meta.env.VITE_API_URL;

export const useArticlesByTag = (tagId) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            if (!tagId) {
                setArticles([]);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                // Fetch articles by tag ID
                const articleWhereQuery = { mainTag: { equals: tagId } };
                const stringifiedQuery = stringify(
                    { where: articleWhereQuery, limit: 10, sort: '-publishedDate', depth: 1 },
                    { addQueryPrefix: true },
                );

                const articlesRes = await fetch(`${API_URL}/api/articles${stringifiedQuery}`);
                if (!articlesRes.ok) throw new Error(`Failed to fetch articles for tag ID "${tagId}"`);
                const articlesData = await articlesRes.json();

                setArticles(articlesData.docs.map(doc => ({
                    id: doc.id,
                    image: doc.image,
                    title: doc.title,
                    summary: doc.summary,
                    readingTime: doc.readingTime,
                    tags: doc.tags.map(t => t.tag)
                })));

            } catch (err) {
                console.error(`Error fetching articles for tag "${tagId}":`, err);
                setError(err);
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [tagId]);

    return { articles, loading, error };
};