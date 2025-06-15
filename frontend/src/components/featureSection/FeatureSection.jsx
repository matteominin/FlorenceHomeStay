import FeatureSectionCard from './FeatureSectionCard';
import Button from '../button/Button';
import './FeatureSection.scss';

const FeatureSection = ({
    className = "",
    category,
    title,
    description,
    featureSections = [],
    redirect,
    cta = "Learn More",
    textAlign = ""
}) => {
    const alignClass = textAlign === "center" ? "feature-section__center-text" : "";

    return (
        <section className={`${className} feature-section ${alignClass}`}>
            <div className="feature-section__title">
                <span>{category}</span>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="feature-section__cards">
                {featureSections.slice(0, 3).map((section, index) => (
                    <FeatureSectionCard
                        key={index}
                        img={section.img}
                        imgAlt={section.imgAlt}
                        title={section.title}
                        description={section.description}
                    />
                ))}
            </div>

            <div className="feature-section__cta">
                <Button variant='outlined'>
                    <a href={redirect}>{cta}</a>
                </Button>
            </div>
        </section>
    )
}

export default FeatureSection