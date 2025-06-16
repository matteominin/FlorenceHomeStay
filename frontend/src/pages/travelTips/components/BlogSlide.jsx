import styles from './BlogSlide.module.scss';
import BlogSlideCard from './BlogSlideCard.jsx';
import longArrow from '../../../assets/travelTips/long-arrow.png';

import { useHorizontalScroll } from '../hooks/useHorizontalScroll.js';
import { useArticlesByTag } from '../hooks/useArticlesByTag.js';

const BlogSlide = ({
    className = "",
    tag,
    title = "Short heading goes here",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) => {
    const { articles, loading, error } = useArticlesByTag(tag);

    const {
        containerRef,
        currentPage,
        totalPages,
        scrollLeft,
        scrollRight,
        scrollToPage,
    } = useHorizontalScroll(loading);

    if (loading) {
        return <section className={`${styles['blog-slide']} ${className}`}><p>Loading articles...</p></section>;
    }

    if (error) {
        return <section className={`${styles['blog-slide']} ${className}`}><p>Error: {error.message}</p></section>;
    }

    const articlesToDisplay = articles || [];

    return (
        <section className={`${styles['blog-slide']} ${className}`}>
            <div className={styles.upper}>
                <span>{tag}</span>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className={styles.cards} ref={containerRef}>
                {articlesToDisplay.length > 0 && (
                    articlesToDisplay.map((article) => (
                        <BlogSlideCard
                            key={article.id}
                            article={article}
                            color={className.includes('scheme-2') ? 'white' : 'black'}
                        />
                    ))
                )}
            </div>

            <div className={styles.lower}>
                <div className={styles['dots-container']}>
                    {totalPages > 1 && Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentPage ? styles.active : ''}`}
                            onClick={() => scrollToPage(index)}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>

                {totalPages > 1 && <div className={styles['buttons-container']}>
                    <button
                        onClick={scrollLeft}
                        aria-label="Scroll left"
                        disabled={currentPage === 0}
                    >
                        <img
                            style={className.includes('scheme-2') ? { filter: 'invert(1)' } : {}}
                            src={longArrow}
                            alt="Left arrow icon"
                        />
                    </button>

                    <button
                        onClick={scrollRight}
                        aria-label="Scroll right"
                        disabled={currentPage === totalPages - 1 || totalPages <= 1}
                    >
                        <img
                            style={className.includes('scheme-2') ? { filter: 'invert(1)' } : {}}
                            src={longArrow}
                            alt="Right arrow icon"
                        />
                    </button>
                </div>}
            </div>
        </section>
    );
};

export default BlogSlide;