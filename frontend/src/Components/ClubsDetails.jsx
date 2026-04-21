import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  FaArrowLeft,
  FaDirections,
  FaPhoneAlt,
  FaInstagram,
  FaGlassCheers,
} from "react-icons/fa"
import { clubs } from "../Data/clubs"

const ClubsDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  // Find selected club
  const club = clubs.find((c) => c.id === Number(id))

  if (!club) {
    return <div className="p-4">Club not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e4f35f] via-[#d8d336] to-[#329cd9]">

      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center gap-3 pb-3 pt-3 px-4 mb-4 border-b border-white/40 bg-white/40 backdrop-blur-md">

        <button onClick={() => navigate(-1)} className="text-[#1f2937] text-lg">
          <FaArrowLeft />
        </button>

        <h1 className="text-lg font-semibold text-[#1f2937]">
          {club.name}
        </h1>

      </div>

      {/* Image */}
      <div className="w-full h-[35vh] px-4">
        <img
          src={club.image}
          alt={club.name}
          className="w-full h-full object-cover rounded-2xl shadow-md"
        />
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-5">

        {/* Offer */}
        <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-xl p-5 text-center shadow-md">

          <p className="text-[#1f2937] font-medium text-sm">
            Show this screen & Get
          </p>

          <p className="text-3xl font-bold mt-1 bg-gradient-to-r from-[#1242c5] to-[#5682da] bg-clip-text text-transparent">
            10% OFF
          </p>

          <p className="text-sm text-gray-600 mt-1">
            on your entry / table booking
          </p>

        </div>

        {/* Buttons */}
        <div className="space-y-3">

          <button className="w-full flex items-center gap-3 bg-white text-black px-4 py-3 rounded-xl shadow-sm hover:bg-pink-50 transition">
            <FaDirections />
            Get Directions
          </button>

          <button className="w-full flex items-center gap-3 bg-white text-black px-4 py-3 rounded-xl shadow-sm hover:bg-pink-50 transition">
            <FaPhoneAlt />
            Call Now
          </button>

          <button className="w-full flex items-center gap-3 bg-white text-black px-4 py-3 rounded-xl shadow-sm hover:bg-pink-50 transition">
            <FaInstagram />
            Follow on Instagram
          </button>

          <button className="w-full flex items-center gap-3 bg-white text-black px-4 py-3 rounded-xl shadow-sm hover:bg-pink-50 transition">
            <FaGlassCheers />
            Book Entry
          </button>

        </div>

        {/* CTA */}
        <div className="pt-2 flex justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
            Reserve Now →
          </button>
        </div>

      </div>
    </div>
  )
}

export default ClubsDetails