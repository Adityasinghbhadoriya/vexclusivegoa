import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import SeoManager from "./Components/SeoManager"

const Home = lazy(() => import("./Pages/Home"))
const Clubs = lazy(() => import("./Pages/Clubs"))
const NightlifeCategories = lazy(() => import("./Pages/NightlifeCategories"))
const Restaurant = lazy(() => import("./Pages/Restaurant"))
const RestaurantCategories = lazy(() => import("./Pages/RestaurantCategories"))
const RestaurantDetails = lazy(() => import("./Components/RestaurantDetails"))
const ClubsDetails = lazy(() => import("./Components/ClubsDetails"))
const SpaDetails = lazy(() => import("./Components/SpaDetails"))
const Admin = lazy(() => import("./Pages/Admin"))
const ParraRoad = lazy(() => import("./Pages/ParraRoad"))
const HilltopMarket = lazy(() => import("./Pages/HilltopMarket"))
const ChaporaLane = lazy(() => import("./Pages/ChaporaLane"))
const MandremBeach = lazy(() => import("./Pages/MandremBeach"))
const Morjim = lazy(() => import("./Pages/Morjim"))
const BasilicaBomJesus = lazy(() => import("./Pages/BasilicaBomJesus"))
const BhagwanMahavirWildlife = lazy(() => import("./Pages/BhagwanMahavirWildlife"))
const CaboDeRamaBeach = lazy(() => import("./Pages/CaboDeRamaBeach"))
const ColaBeachKayaking = lazy(() => import("./Pages/ColaBeachKayaking"))
const FortAguada = lazy(() => import("./Pages/FortAguada"))
const MuseumOfGoa = lazy(() => import("./Pages/MuseumOfGoa"))
const ReisMagosFort = lazy(() => import("./Pages/ReisMagosFort"))
const ChaporaFort = lazy(() => import("./Pages/ChaporaFort"))
const NotFound = lazy(() => import("./Pages/NotFound"))

function RouteFallback() {
  return (
    <div
      className="min-h-screen w-full bg-stone-50"
      aria-busy="true"
      aria-label="Loading page"
    />
  )
}

function App() {
  return (
    <div className="max-w-107.5 mx-auto w-full min-h-screen">
      <SeoManager />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<RestaurantCategories />} />
          <Route path="/restaurants/browse" element={<Restaurant />} />
          <Route path="/clubs" element={<NightlifeCategories />} />
          <Route path="/clubs/browse" element={<Clubs />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
