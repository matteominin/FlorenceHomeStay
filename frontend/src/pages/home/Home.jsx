import Header from "../../components/header/Header"
import Gallery from "./components/Gallery"
import Intro from "./components/Intro"
import "./Home.scss"

function Home() {
    return (
        <div className="home">
            <Header />
            <Intro />
            <Gallery />
        </div>
    )
}

export default Home