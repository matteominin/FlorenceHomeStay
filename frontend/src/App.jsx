import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home.jsx"
import Apartment from "./pages/apartment/Apartment.jsx";
import TravelTips from "./pages/travelTips/TravelTips.jsx";
import Article from "./pages/article/Article.jsx";
import Events from "./pages/events/Events.jsx";
import ApartmentInstructions from "./pages/apartmentInstructions/ApartmentInstructions.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/travel-tips" element={<TravelTips />} />
        <Route path="/travel-tips/:id" element={<Article />} />
        <Route path="/events" element={<Events />} />
        <Route path="/apartment-instructions" element={<ApartmentInstructions />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App