import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home.jsx"
import Apartment from "./pages/apartment/Apartment.jsx";
import TravelTips from "./pages/travelTips/TravelTips.jsx";

function App() {

  return (
    <BrowserRouter basename="/FlorenceHomeStay">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/travel-tips" element={<TravelTips />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
