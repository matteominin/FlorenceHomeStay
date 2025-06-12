import { useRef, useState, useEffect } from 'react';
import styles from './BlogSlide.module.scss';
import BlogSlideCard from './BlogSlideCard.jsx';
import longArrow from '../../../assets/travelTips/long-arrow.png';

const BlogSlide = ({ className = "" }) => {
    const cardsContainerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);


    const updateDots = () => {
        if (cardsContainerRef.current) {
            const container = cardsContainerRef.current;
            const { scrollLeft, clientWidth, scrollWidth } = container;

            const calculatedTotalPages = Math.ceil(scrollWidth / clientWidth);
            setTotalPages(calculatedTotalPages);

            const calculatedCurrentPage = Math.round(scrollLeft / clientWidth);
            setCurrentPage(calculatedCurrentPage);
        }
    };

    useEffect(() => {
        const container = cardsContainerRef.current;

        if (container) {
            updateDots();

            container.addEventListener('scroll', updateDots);
            window.addEventListener('resize', updateDots);

            return () => {
                container.removeEventListener('scroll', updateDots);
                window.removeEventListener('resize', updateDots);
            };
        }
    }, []);

    const scrollCards = (direction) => {
        if (cardsContainerRef.current) {
            const container = cardsContainerRef.current;
            const scrollAmount = container.clientWidth;

            if (direction === 'left') {
                container.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else if (direction === 'right') {
                container.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };

    const scrollToPage = (pageIndex) => {
        if (cardsContainerRef.current) {
            const container = cardsContainerRef.current;
            container.scrollTo({
                left: pageIndex * container.clientWidth,
                behavior: 'smooth'
            });
            setCurrentPage(pageIndex);
        }
    };

    return (
        <section className={`${styles['blog-slide']} ${className}`}>
            <div className={styles.upper}>
                <span>Blog</span>
                <h2>Short heading goes here</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className={styles.cards} ref={cardsContainerRef}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <BlogSlideCard
                        key={index}
                        color={className.includes('scheme-2') ? 'white' : 'black'}
                    />
                ))}
            </div>

            <div className={styles.lower}>
                <div className={styles['dots-container']}>
                    {Array.from({ length: totalPages - 1 }).map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentPage ? styles.active : ''}`}
                            onClick={() => scrollToPage(index)}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>

                <div className={styles['buttons-container']}>
                    <button
                        onClick={() => scrollCards('left')}
                        aria-label="Scroll left"
                    >
                        <img
                            style={className.includes('scheme-2') ? { filter: 'invert(1)' } : {}}
                            src={longArrow}
                            alt="Left arrow icon"
                        />
                    </button>

                    <button
                        onClick={() => scrollCards('right')}
                        aria-label="Scroll right"
                    >
                        <img
                            style={className.includes('scheme-2') ? { filter: 'invert(1)' } : {}}
                            src={longArrow}
                            alt="Right arrow icon"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSlide;