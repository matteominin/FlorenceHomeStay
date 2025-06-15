import ExploreCard from './ExploreCard';
import Button from '../../../components/button/Button';
import styles from './Explore.module.scss';

const Explore = ({
    className = "",
    category,
    title,
    description,
    articles = [],
    redirect,
    cta = "View all",
}) => {
    return (
        <section className={`${className} ${styles.explore}`}>
            <div className={styles.explore__title}>
                <span>{category}</span>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className={styles.explore__cards}>
                {articles.slice(0, 3).map((article, index) => (
                    <ExploreCard
                        key={index}
                        id={article.id}
                        img={article.img}
                        imgAlt={article.imgAlt}
                        title={article.title}
                        articles={article.articles}
                        description={article.description}
                        readingTime={article.readingTime}
                        tags={article.tags}
                    />
                ))}
            </div>

            <div className={styles.explore__cta}>
                <Button variant='outlined'>
                    <a href={redirect}>{cta}</a>
                </Button>
            </div>
        </section>
    )
}

export default Explore