import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home.jsx"
import Apartment from "./pages/apartment/Apartment.jsx";
import TravelTips from "./pages/travelTips/TravelTips.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/travel-tips" element={<TravelTips />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
