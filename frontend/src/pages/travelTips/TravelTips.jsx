import './TravelTips.scss'
import Header from '../../components/header/Header.jsx'
import Intro from './components/Intro.jsx'
import BlogSlide from './components/BlogSlide.jsx'
import Footer from '../../components/footer/Footer.jsx'

const TravelTips = () => {
    return (
        <div className="travel-tips">
            <Header />
            <Intro />
            <BlogSlide className="scheme-3" />
            <BlogSlide className="scheme-2" />
            <BlogSlide className="scheme-3" />
            <BlogSlide className="scheme-2" />
            <BlogSlide className="scheme-3" />
            <Footer />
        </div>
    )
}

export default TravelTips