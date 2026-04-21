import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
// import Restaurants from "./Pages/Restaurant"
import Clubs from "./Pages/Clubs"
import Experiences from "./Pages/Experiences"
import Shopping from "./Pages/Shopping"
import ViewAll from "./Pages/ViewAll"
import Restaurant from "./Pages/Restaurant"
import RestaurantDetails from "./Components/RestaurantDetails"
import ClubsDetails from "./Components/ClubsDetails"
import Admin from "./Pages/Admin"
// import RestaurantDetails from "./Pages/RestaurantDetails"

function App() {
  return (
    <div className="max-w-107.5 mx-auto w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/club/:id" element={<ClubsDetails />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App