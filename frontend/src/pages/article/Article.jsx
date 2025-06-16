import styles from './Article.module.scss';

import Header from '../../components/header/Header';
import Explore from './components/Explore';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/loading/Loading';

import { useParams } from 'react-router';
import useArticle from './hooks/useArticle';
import useLexicalToHtml from './hooks/useLexicalToHtml';
import useNewestArticles from './hooks/useNewestArticles';
import placeholderImage from '../../assets/home/review/avatar.png'; // TODO: Remove this

const API_URL = import.meta.env.VITE_API_URL;

const Article = () => {
    const { id } = useParams();
    const { article, loading, error } = useArticle(id);
    const { htmlContent, loading: htmlLoading, error: htmlError } = useLexicalToHtml(article?.content);
    const { newestArticles, loading: loadingNewest, error: errorNewest } = useNewestArticles(id);

    if (loading) {
        return (
            <div className={styles['article-page']}>
                <Header />
                <Loading message="Loading article..." />
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles['article-page']}>
                <Header />
                <div className={styles['error-container']}>
                    <p>Error loading article: {error}</p>
                    <p>Please check the URL or return to the homepage.</p>
                    <Button>
                        <a href="/" className={styles['home-link']}>Go to Homepage</a>
                    </Button>
                </div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className={styles['article-page']}>
                <Header />
                <div className={styles['error-container']}>
                    <p>Article not found.</p>
                    <p>Please check the URL or return to the homepage.</p>
                    <Button>
                        <a href="/" className={styles['home-link']}>Go to Homepage</a>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles['article-page']}>
            <Header />
            <div className={styles.article}>
                <h1>{article.title}</h1>
                <div className={styles.writer}>
                    {/* TODO: Make writer image dynamic if available in article.author.image */}
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
                    alt={article.image.alt || article.title}
                />

                <div className={styles.content}>
                    {htmlLoading ? (
                        <p>Loading content...</p>
                    ) : htmlError ? (
                        <p className={styles.error}>{htmlError}</p>
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    )}
                </div>

                <div className={styles.tags}>
                    {article.tags && article.tags.length > 0 ? (
                        article.tags.map((t) => (
                            <span key={t.tag} className={styles.tag}>
                                {t.tag}
                            </span>
                        ))
                    ) : (
                        <span className={styles.noTags}>No tags available</span>
                    )}
                </div>


                {loadingNewest ? (
                    <Loading message="Loading related articles..." />
                ) : errorNewest ? (
                    <p className={styles.error}>We are sorry, we can't find any article.</p>
                ) : (
                    <Explore
                        className="scheme-2"
                        category="Explore"
                        title="Explore Our Latest Articles"
                        description="Discover tips for an unforgettable stay in Florence."
                        articles={newestArticles}
                        redirect="/travel-tips"
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Article;

// TODO: style lists 