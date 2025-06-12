import styles from './Gallery.module.scss'

import gallery1 from '../../../assets/apartment/gallery1.png';
import gallery2 from '../../../assets/apartment/gallery2.png';
import gallery3 from '../../../assets/apartment/gallery3.png';
import gallery4 from '../../../assets/apartment/gallery4.png';
import gallery5 from '../../../assets/apartment/gallery5.png';
import gallery6 from '../../../assets/apartment/gallery6.png';
import gallery7 from '../../../assets/apartment/gallery7.png';
import gallery8 from '../../../assets/apartment/gallery8.png';

const Gallery = () => {
    return (
        <div className={`${styles.gallery} scheme-3`}>
            <h2>Image Gallery</h2>
            <p>Explore our beautiful apartment through the images below.</p>
            <div className={styles.gallery__images}>
                <img src={gallery1} alt="Gallery Image 1" />
                <img src={gallery2} alt="Gallery Image 2" />
                <img src={gallery3} alt="Gallery Image 3" />
                <img src={gallery4} alt="Gallery Image 4" />
                <img src={gallery5} alt="Gallery Image 5" />
                <img src={gallery6} alt="Gallery Image 6" />
                <img src={gallery7} alt="Gallery Image 7" />
                <img src={gallery8} alt="Gallery Image 8" />
            </div>
        </div>
    )
}

export default Gallery