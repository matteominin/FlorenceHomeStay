import './Apartment.scss';
import Header from '../../components/header/Header';
import Intro from './components/Intro';
import StrengthPoints from './components/StrengthPoints';
import Gallery from './components/Gallery';
import InfoSection from '../../components/infoSection/InfoSection';
import FeatureSection from '../../components/featureSection/FeatureSection';
import Highlight from './components/Highlight';
import Parking from './components/Parking';
import Footer from '../../components/footer/Footer';

// Images
import room1 from '../../assets/apartment/room-signoria.png';
import room2 from '../../assets/apartment/room-novella.png';
import room3 from '../../assets/apartment/room-annunziata.png';

const Apartment = () => {
    return (
        <div className="apartment">
            <Header />
            <Intro />
            <StrengthPoints />
            <Gallery />
            <InfoSection />

            <FeatureSection
                className='scheme-2'
                category="Rooms"
                title="Explore Our Unique Rooms"
                description="Each room in our apartment is designed to provide a unique experience, blending comfort with Florentine charm."
                featureSections={[
                    {
                        img: room1,
                        imgAlt: "Room Signoria",
                        title: "Signoria Room: A Sunny Escape",
                        description: "This 18 sqm (193 sq ft) room features a large door that opens onto a sunny 7 sqm (81 sq ft) terrace, perfect for enjoying the Florentine sun."
                    },
                    {
                        img: room2,
                        imgAlt: "Room Novella",
                        title: "Novella Room: Bright and Inviting",
                        description: "Spanning 15 sqm (161 sq ft), the Novella Room boasts a large window that fills the space with natural light."
                    },
                    {
                        img: room3,
                        imgAlt: "Room Annunziata",
                        title: "Annunziata Room: Peaceful Retreat",
                        description: "Also 15 sqm (161 sq ft), the Annunziata Room features a large window that opens onto a tranquil inner courtyard, ensuring a serene atmosphere."
                    }
                ]}
                redirect="#"
                cta="Book Your Stay Now!"
                textAlign="center"
            />

            <Highlight />
            <Parking />
            <Footer />
        </div>
    )
}

export default Apartment