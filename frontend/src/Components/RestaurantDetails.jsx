import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  FaArrowLeft,
  FaDirections,
  FaPhoneAlt,
  FaInstagram,
  FaUtensils,
} from "react-icons/fa"
import { restaurants } from "../Data/restaurant"
import { trackRestaurantClick } from "../api.js"

// 🔥 (OPTIONAL) extra images for Da Luna
import DaLunaImage1 from "../assets/DaLuna2.jpg"
import DaLunaImage2 from "../assets/DaLuna3.jpg"

const RestaurantDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const restaurant = restaurants.find((r) => r.id === Number(id))

  if (!restaurant) {
    return <div className="p-4 text-lg">Restaurant not found</div>
  }

  // Track restaurant click when component mounts
  useEffect(() => {
    trackRestaurantClick(restaurant.id, restaurant.name)
  }, [restaurant.id, restaurant.name])

  // 🔥 Slider images (dynamic)
  const sliderImages =
    restaurant.id === 1
      ? [restaurant.image, DaLunaImage1, DaLunaImage2]
      : [restaurant.image]

  const [currentIndex, setCurrentIndex] = useState(0)

  // 🔁 Auto slide
  useEffect(() => {
    if (sliderImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [sliderImages.length])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e4f35f] via-[#d8d336] to-[#329cd9]">

      {/* 🔝 Header */}
      <div className="sticky top-0 z-20 flex items-center gap-3 pb-3 pt-3 px-4 mb-4 border-b border-white/40 bg-white/40 backdrop-blur-md">

        <button
          onClick={() => navigate(-1)}
          className="text-[#1f2937] text-lg"
        >
          <FaArrowLeft />
        </button>

        <h1 className="text-lg font-semibold text-[#1f2937]">
          {restaurant.name}
        </h1>

      </div>

      {/* 🔥 IMAGE SLIDER */}
      <div className="w-full h-[35vh] px-4">
        <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-md">

          {sliderImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="slider"
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* 🔘 Dots */}
          {sliderImages.length > 1 && (
            <div className="absolute bottom-2 w-full flex justify-center gap-2">
              {sliderImages.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 📦 Content */}
      <div className="px-4 py-6 space-y-5">

        {/* 🎯 Offer */}
        <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-xl p-5 text-center shadow-md">

          <p className="text-[#1f2937] font-medium text-sm">
            Show this screen & Get
          </p>

          <p className="text-3xl font-bold mt-1 bg-gradient-to-r from-[#1242c5] to-[#5682da] bg-clip-text text-transparent">
            10% OFF
          </p>

          <p className="text-sm text-gray-600 mt-1">
            on your total bill
          </p>

        </div>

        {/* ⚡ Action Buttons */}
        <div className="space-y-3">

          {/* 📍 Directions */}
          <button
            onClick={() => window.open(restaurant.googleLink, "_blank")}
            className="w-full flex items-center gap-3 bg-white text-black px-4 py-3 rounded-xl shadow-sm hover:bg-pink-50 transition"
          >
            <FaDirections />
            Get Directions
          </button>

          {/* 📞 Call */}
          <button
            onClick={() => (window.location.href = `tel:${restaurant.phone}`)}
            className="w-full flex items-center gap-3 bg-white text-black px-4 py-3 rounded-xl shadow-sm hover:bg-pink-50 transition"
          >
            <FaPhoneAlt />
            Call Us
          </button>

          {/* 📸 Instagram */}
          <button
            onClick={() => window.open(restaurant.instagram, "_blank")}
            className="w-full flex items-center gap-3 bg-white text-black px-4 py-3 rounded-xl shadow-sm hover:bg-pink-50 transition"
          >
            <FaInstagram />
            Follow on Instagram
          </button>

          {/* 📖 Menu */}
          <button
            onClick={() => window.open(restaurant.googleLink, "_blank")}
            className="w-full flex items-center gap-3 bg-white text-black px-4 py-3 rounded-xl shadow-sm hover:bg-pink-50 transition"
          >
            <FaUtensils />
            View Menu
          </button>

        </div>

      </div>
    </div>
  )
}

export default RestaurantDetails