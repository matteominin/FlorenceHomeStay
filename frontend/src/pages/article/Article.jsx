import { useState, useEffect } from 'react';
import styles from './Article.module.scss';
import placeholderImage from '../../assets/travelTips/placeholder.png';
import Header from '../../components/header/Header';
import { useParams } from 'react-router';
import { getRestPopulateFn } from '@payloadcms/richtext-lexical/client'
import { convertLexicalToHTMLAsync } from '@payloadcms/richtext-lexical/html-async'

const API_URL = import.meta.env.VITE_API_URL;

const Article = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState(null);
    const [htmlContent, setHtmlContent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        (async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(`${API_URL}/api/articles/${id}`);
                if (!res.ok) {
                    throw new Error();
                }
                const data = await res.json();

                setArticle(data)
                console.log(data)
            } catch (err) {
                setError('Failed to load article');
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);


    useEffect(() => {
        (async () => {
            if (article && article.content) {
                try {
                    let html = await convertLexicalToHTMLAsync({
                        data: article.content,
                        populate: getRestPopulateFn({
                            apiURL: `${API_URL}/api`
                        }),
                    });

                    // Fix image URLs that start with /api
                    html = html.replace(
                        /src="(\/api\/[^"]+)"/g,
                        `src="${API_URL}$1"`
                    );

                    console.log(html);
                    setHtmlContent(html);
                } catch (err) {
                    console.error('Error converting content to HTML:', err);
                    setError('Failed to convert content to HTML');
                }
            }
        })();
    }, [article]);


    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <div className={styles['article-page']}>
            <Header />
            <div className={styles.article}>
                <h1>{article.title}</h1>
                <div className={styles.writer}>
                    <img src={placeholderImage} alt="Writer Image" />
                    <div className={styles.writerInfo}>
                        <p>{article.author}</p>
                        <time dateTime={article.publishedDate}>
                            {new Date(article.publishedDate).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </time>
                        <span className={styles.dot}>•</span>
                        <span>{article.readingTime} min read</span>
                    </div>
                </div>

                <img
                    className={styles['article-image']}
                    src={`${API_URL}${article.image.url}`}
                    alt="Article Image"
                />
                <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
            </div>
        </div>
    )
}

export default Article