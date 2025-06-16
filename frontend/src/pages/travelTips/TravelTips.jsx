import './TravelTips.scss'
import Header from '../../components/header/Header.jsx'
import Intro from './components/Intro.jsx'
import BlogSlide from './components/BlogSlide.jsx'
import Footer from '../../components/footer/Footer.jsx'
import Loading from '../../components/loading/Loading.jsx'

import useTags from './hooks/useTags.js'
import Button from '../../components/button/Button.jsx'

const TravelTips = () => {
    const { tags, loading, error } = useTags();

    // TODO: Add a loading state and error handling
    if (loading) {
        return (
            <div className='travel-tips'>
                <Header />
                <Loading message="Loading tips..." />
            </div>
        );
    }
    if (error) {
        return (
            <div >
                <Header />
                <div className="error">
                    <p className="error-message">An error occurred while fetching travel tips. Please try again later.</p>
                    <Button className="error-button">
                        <a href="/">Go back to Home</a>
                    </Button>
                </div>
            </div>
        );
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
                        content={tag}
                    />
                ))
            )}
            <Footer />
        </div>
    )
}

export default TravelTips

// TODO: Add events