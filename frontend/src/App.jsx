import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home.jsx"
import Apartment from "./pages/apartment/Apartment.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartment" element={<Apartment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
