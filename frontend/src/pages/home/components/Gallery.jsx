import Button from "../../../components/button/Button"
import gallery1 from "../../../assets/home/gallery1.png"
import gallery2 from "../../../assets/home/gallery2.png"
import gallery3 from "../../../assets/home/gallery3.png"
import gallery4 from "../../../assets/home/gallery4.png"
import gallery5 from "../../../assets/home/gallery5.png"
import gallery6 from "../../../assets/home/gallery6.png"
import "./Gallery.scss"


function Gallery() {
    return (
        <section className="scheme-2 home__gallery">
            <div className="home__gallery__container">
                <div className="left">
                    <h1>Discover the Enchantment of Florence with Us</h1>
                    <p>
                        Located on the second floor of a historic early 20th-century building (accessible via 48 steps), Florence Homestay embodies the essence of Florentine tradition. Its prime location allows for effortless exploration of the city, situated just 200 meters from Porta al Prato and within walking distance of Borgo Ognissanti.
                    </p>
                    <p>
                        Guests will appreciate easy access to public transportation and Santa Maria Novella Station, which is only a 10-minute walk (or a 7-minute tram ride) away. For those traveling by car, a secure paid parking garage is available just 30 meters from the entrance, and the property lies 50 meters outside the restricted traffic zone (ZTL).
                    </p>

                    <Button>
                        <a href="/apartment">Learn More</a>
                    </Button>
                </div>
                <div className="right">
                    <div className="gallery_row">
                        <div className="img_container">
                            <img src={gallery1} alt="Gallery Image 1" />
                        </div>
                        <div className="img_container">
                            <img src={gallery2} alt="Gallery Image 2" />
                        </div>
                        <div className="img_container">
                            <img src={gallery3} alt="Gallery Image 3" />
                        </div>
                    </div>

                    <div className="gallery_row">
                        <div className="img_container">
                            <img src={gallery4} alt="Gallery Image 4" />
                        </div>
                        <div className="img_container">
                            <img src={gallery5} alt="Gallery Image 5" />
                        </div>
                        <div className="img_container">
                            <img src={gallery6} alt="Gallery Image 6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery