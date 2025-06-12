import Button from '../../../components/button/Button';
import StrengthPointsCard from './StrengthPointsCard';
import './StrengthPoints.scss';

import heartIcon from '../../../assets/apartment/heartIcon.png';
import bedIcon from '../../../assets/apartment/bedIcon.png';
import fridgeIcon from '../../../assets/apartment/fridgeIcon.png';
import showerIcon from '../../../assets/apartment/showerIcon-white.png';

const StrengthPoints = () => {
    return (
        <div className='strength-points scheme-2'>
            <div className="strength-points__intro">
                <span>Comfort</span>
                <h2>Your Home Away from Home in Florence</h2>
                <p>Our apartment offers a perfect blend of elegance and comfort, making it the ideal retreat after a day of exploration. Enjoy the spacious living areas and modern amenities designed for your convenience.</p>
            </div>

            <div className="strength-points__cards">
                <StrengthPointsCard
                    icon={heartIcon}
                    title="Apartment Composition"
                    description="This spacious apartment has a large living room, kitchen, and balcony, accommodating up to 6 guests."
                />
                <StrengthPointsCard
                    icon={bedIcon}
                    title="Three Double Bedrooms"
                    description="Our three elegantly furnished double bedrooms offer restful stays with queen beds and modern comforts."
                />
                <StrengthPointsCard
                    icon={fridgeIcon}
                    title="Fully Equipped Kitchen"
                    description="Our kitchen is completely equipped for your convenience, perfect for preparing meals independently during your stay."
                />
                <StrengthPointsCard
                    icon={showerIcon}
                    title="Spacious Bathroom"
                    description="Access a spacious and functional bathroom equipped with a hot shower and complimentary toiletries."
                />
            </div>

            <Button variant='outlined'>
                <a href="#">Learn More</a>
            </Button>
        </div>
    )
}

export default StrengthPoints;