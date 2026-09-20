import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
// import Restaurants from "./Pages/Restaurant"
import Clubs from "./Pages/Clubs"
import Restaurant from "./Pages/Restaurant"
import RestaurantDetails from "./Components/RestaurantDetails"
import ClubsDetails from "./Components/ClubsDetails"
import SpaDetails from "./Components/SpaDetails"
import Admin from "./Pages/Admin"
import ParraRoad from "./Pages/ParraRoad"
import HilltopMarket from "./Pages/HilltopMarket"
import ChaporaLane from "./Pages/ChaporaLane"
import MandremBeach from "./Pages/MandremBeach"
import Morjim from "./Pages/Morjim"
import BasilicaBomJesus from "./Pages/BasilicaBomJesus"
import BhagwanMahavirWildlife from "./Pages/BhagwanMahavirWildlife"
import CaboDeRamaBeach from "./Pages/CaboDeRamaBeach"
import ColaBeachKayaking from "./Pages/ColaBeachKayaking"
import FortAguada from "./Pages/FortAguada"
import MuseumOfGoa from "./Pages/MuseumOfGoa"
import ReisMagosFort from "./Pages/ReisMagosFort"
import ChaporaFort from "./Pages/ChaporaFort"
// import RestaurantDetails from "./Pages/RestaurantDetails"

function App() {
  return (
    <div className="max-w-107.5 mx-auto w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/spa/:id" element={<SpaDetails />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/club/:id" element={<ClubsDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/parra-road" element={<ParraRoad />} />
        <Route path="/hilltop-market" element={<HilltopMarket />} />
        <Route path="/chapora-lane" element={<ChaporaLane />} />
        <Route path="/mandrem-beach" element={<MandremBeach />} />
        <Route path="/morjim" element={<Morjim />} />
        <Route path="/basilica-bom-jesus" element={<BasilicaBomJesus />} />
        <Route path="/bhagwan-mahavir-wildlife" element={<BhagwanMahavirWildlife />} />
        <Route path="/cabo-de-rama-beach" element={<CaboDeRamaBeach />} />
        <Route path="/cola-beach-kayaking" element={<ColaBeachKayaking />} />
        <Route path="/fort-aguada" element={<FortAguada />} />
        <Route path="/museum-of-goa" element={<MuseumOfGoa />} />
        <Route path="/reis-magos-fort" element={<ReisMagosFort />} />
        <Route path="/chapora-fort" element={<ChaporaFort />} />
      </Routes>
    </div>
  )
}

export default App