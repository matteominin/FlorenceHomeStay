import './TravelTips.scss'
import Header from '../../components/header/Header.jsx'
import Intro from './components/Intro.jsx'
import BlogSlide from './components/BlogSlide.jsx'
import Footer from '../../components/footer/Footer.jsx'

import useTags from './hooks/useTags.js'

const TravelTips = () => {
    const { tags, loading, error } = useTags();

    // TODO: Add a loading state and error handling
    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    if (error) {
        return <div className="error">{error}</div>;
    }
    if (!tags || tags.length === 0) {
        return <div className="no-tags">No tags available.</div>;
    }

    return (
        <div className="travel-tips">
            <Header />
            <Intro />
            {tags.length > 0 && (
                tags.map((tag, index) => (
                    <BlogSlide
                        key={index}
                        className={index % 2 === 0 ? 'scheme-3' : 'scheme-2'}
                        tag={tag.name}
                    />
                ))
            )}
            <Footer />
        </div>
    )
}

export default TravelTips