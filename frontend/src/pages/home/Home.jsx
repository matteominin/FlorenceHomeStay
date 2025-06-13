import FeatureSection from "../../components/featureSection/FeatureSection"
import Header from "../../components/header/Header"
import Gallery from "./components/Gallery"
import Intro from "./components/Intro"
import Review from "./components/Review"
import Footer from "../../components/footer/Footer"
import './Home.scss'

// Images
import bedroomImg from '../../assets/home/explore-bedroom.png'
import tramImg from '../../assets/home/explore-tram.png'
import balconyImg from '../../assets/home/explore-balcony.png'
import uffizziImg from '../../assets/home/explore-uffizzi.png'
import calcioImg from '../../assets/home/explore-calcio.png'
import bisteccaImg from '../../assets/home/explore-bistecca.png'


function Home() {
    return (
        <div className="home">
            <Header />
            <Intro />
            <Gallery />

            <FeatureSection
                className="scheme-1"
                category="explore"
                title="Experience Comfort and Elegance in Our Florence Apartment"
                description="At FlorenceHomeStay, we go beyond just providing a place to stay. Our curated travel tips and local recommendations ensure you experience the best of Florence."
                featureSections={[
                    {
                        img: bedroomImg,
                        imgAlt: "Bedroom with Elegant Design",
                        title: "Elegant & Comfortable Historic Retreat",
                        description: "Nestled in a historic early 20th-century building, Florence HomeStay features elegant, spacious, and light-filled interiors."
                    },
                    {
                        img: tramImg,
                        imgAlt: "Tram Station Near the Apartment",
                        title: "Strategic Location in the Heart of Florence",
                        description: "Situated just 200 meters from Porta al Prato, we offer a quiet base with 15-minute walk or tram access to Florence's city center."
                    },
                    {
                        img: balconyImg,
                        imgAlt: "Balcony",
                        title: "Ideal for Groups & Authentic Experiences",
                        description: "Accommodating up to 6 guests, Florence HomeStay is the perfect choice for families, couples, or small groups seeking an authentic Florentine experience."
                    }
                ]}
                redirect="/apartment"
                cta="Discover The Apartment"
            />

            <Review />

            <FeatureSection
                className="scheme-3"
                category="explore"
                title="Discover Our Local Tips"
                description="At Florence HomeStay, we go beyond just providing a place to stay. Our curated travel tips and local recommendations ensure you experience the best of Florence."
                featureSections={[
                    {
                        img: uffizziImg,
                        imgAlt: "Uffizi Gallery",
                        title: "Florence Must to See: Do not Miss the Guide",
                        description: "Read our guide to discover Florence's immense cultural heritage, essential experiences, and plan your unforgettable visits."
                    },
                    {
                        img: calcioImg,
                        imgAlt: "Calcio Storico Fiorentino",
                        title: "Read About City's Traditions",
                        description: "Have you ever read about Calcio Storico Fiorentino, a spectacular and brutal 16th-century tradition blending football, rugby, and wrestling?"
                    },
                    {
                        img: bisteccaImg,
                        imgAlt: "Bistecca alla Fiorentina",
                        title: "Where and What to Eat, Our Recommendations",
                        description: "Read our guide, we'll suggest you the best places where to eat and drink as a local, no tourist scams."
                    }
                ]}
                redirect="/travel-tips"
                textAlign="center"
            />

            <Footer />
        </div>
    )
}

export default Home