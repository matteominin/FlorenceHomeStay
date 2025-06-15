import { useState, useEffect } from 'react';
import { stringify } from 'qs-esm';

const API_URL = import.meta.env.VITE_API_URL;

export const useArticlesByTag = (tagName) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            if (!tagName) {
                setArticles([]);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                // Fetch tag ID
                const tagRes = await fetch(`${API_URL}/api/tags?where[tag][equals]=${tagName}`);
                if (!tagRes.ok) throw new Error(`Failed to fetch tag "${tagName}"`);
                const tagData = await tagRes.json();

                if (!tagData.docs || tagData.docs.length === 0) {
                    console.warn(`Tag "${tagName}" not found. No articles will be displayed.`);
                    setArticles([]);
                    setLoading(false);
                    return;
                }
                const tagId = tagData.docs[0].id;

                // Fetch articles by tag ID
                const articleWhereQuery = { tags: { equals: tagId } };
                const stringifiedQuery = stringify(
                    { where: articleWhereQuery, limit: 10, sort: '-createdAt', depth: 1 },
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
                console.error(`Error fetching articles for tag "${tagName}":`, err);
                setError(err);
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [tagName]);

    return { articles, loading, error };
};