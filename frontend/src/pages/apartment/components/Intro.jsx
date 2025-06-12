import Button from '../../../components/button/Button'
import './Intro.scss'

import livingRoomImage from '../../../assets/apartment/living-room.png'

const Intro = () => {
    return (
        <section className="apartment-intro scheme-1">
            <div className="left">
                <span>Welcome</span>
                <h1>Discover Your Florentine Retreat: The Florence Homestay Apartment</h1>
                <p>Welcome to Florence Homestay, a cozy dwelling located on the second floor of a historic early 20th-century building. Accessible via 48 steps, our apartment celebrates the charm of Florentine tradition, offering an authentic, comfortable, and strategically positioned stay to easily explore Florence.</p>
                <Button variant='outlined'>
                    <a href="#"> Learn More</a>
                </Button>
            </div>
            <div className="right">
                <img src={livingRoomImage} alt="Living Room" />
            </div>
        </section>
    )
}

export default Intro