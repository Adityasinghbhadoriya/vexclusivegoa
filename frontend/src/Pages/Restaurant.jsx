import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaStar, FaPhoneAlt, FaDirections, FaUtensils, FaArrowLeft } from "react-icons/fa"
import { restaurants } from "../Data/restaurant"
import DaLunaImage1 from "../assets/DaLuna2.jpg"
import DaLunaImage2 from "../assets/DaLuna3.jpg"
import offerImage1 from "../assets/DaLunaOffers.jpeg"
import offerImage2 from "../assets/DaLunaOffer2.jpeg"
import offerImage3 from "../assets/DaLunaOffer3.jpeg"
import { trackRestaurantClick } from "../api"

const Restaurant = () => {
    const navigate = useNavigate()

    const featuredRestaurant = restaurants[0]
    const otherRestaurants = restaurants.slice(1)

    // 🔥 Slider Images
    const featuredImages = [
        featuredRestaurant.image,
        DaLunaImage1,
        DaLunaImage2
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    // 🔁 Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % featuredImages.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#fbf852] via-[#e6e671] to-[#229ee6] px-4 py-6">

            {/* Header */}
            <div className="flex items-center gap-3 pb-3 pt-1 mb-3 border-b">
                <button onClick={() => navigate("/")} className="text-[#1f2937] text-lg">
                    <FaArrowLeft />
                </button>

                <h1 onClick={() => navigate("/")} className="text-xl font-semibold text-[#1f2937] cursor-pointer">
                    Top Restaurants Nearby
                </h1>
            </div>

            {/* ⭐ Featured Restaurant */}
            <div className="relative mb-6">

                <h1 className="text-lg font-semibold text-[#1f2937] mb-3">
                    Featured Restaurant
                </h1>

                <div className="absolute -inset-1 rounded-2xl bg-pink-200/40 blur-xl"></div>

                <div
                    onClick={() => {
                        trackRestaurantClick(featuredRestaurant.id)
                        navigate(`/restaurant/${featuredRestaurant.id}`)
                    }}
                    className="relative bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl shadow-md overflow-hidden cursor-pointer"
                >

                    {/* 🔥 IMAGE SLIDER */}
                    <div className="relative h-56 overflow-hidden">

                        {featuredImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="slider"
                                className={`absolute w-full h-56 object-cover transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        ))}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
                            <h2 className="text-2xl font-bold">{featuredRestaurant.name}</h2>
                            <p className="text-sm">{featuredRestaurant.cuisine}</p>

                            <div className="flex items-center gap-1 mt-1">
                                <FaStar className="text-yellow-300 text-lg" />
                                <span className="text-lg">{featuredRestaurant.rating}</span>
                            </div>
                        </div>

                        {/* Offer Badge */}
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-[#1242c5] to-[#5682da] text-white text-sm px-3 py-1 rounded-md font-bold shadow animate-pulse">
                            <span className="text-lg text-yellow-300">10% OFF</span> with V Exclusive
                        </div>

                        {/* Dots */}
                        <div className="absolute bottom-2 w-full flex justify-center gap-2">
                            {featuredImages.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setCurrentIndex(index)
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full cursor-pointer ${index === currentIndex ? "bg-white" : "bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-3 border-t text-[#1f2937] bg-white/60">

                        <button className="flex flex-col items-center py-3 text-sm bg-white text-black hover:bg-pink-50 transition">
                            <FaDirections className="mb-1" />
                            Directions
                        </button>

                        <button className="flex flex-col items-center py-3 text-sm bg-white text-black hover:bg-pink-50 border-x transition">
                            <FaPhoneAlt className="mb-1" />
                            Call Now
                        </button>

                        <button className="flex flex-col items-center py-3 text-sm bg-white text-black hover:bg-pink-50 transition">
                            <FaUtensils className="mb-1" />
                            View Menu
                        </button>

                    </div>
                </div>
            </div>

            {/* 🍱 Cuisine Scroll */}
            <div className="mb-6">

                <h2 className="text-lg font-semibold text-[#1f2937] mb-3">
                    Explore by Cuisine
                </h2>

                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">

                    {[
                        { name: "Italian", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
                        { name: "Seafood", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZypPQOIa2igTmUDxEgS1NgcgbFRcmccdBg&s" },
                        { name: "Indian", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
                        { name: "Desserts", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQhJxWPVfTM9awAPOb_eBuPSVQzAaWrEeYg&s" },
                    ].map((item, i) => (
                        <div key={i} className="min-w-[90px] cursor-pointer">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[90px] h-[90px] object-cover rounded-xl shadow-md"
                            />
                            <p className="text-sm text-center mt-1 font-medium">
                                {item.name}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

            {/* 🎁 Offers */}
            <div className="mb-6">

                <h2 className="text-lg font-semibold text-[#1f2937] mb-3">
                    Exclusive Offers
                </h2>

                <div className="mb-4">
                    <img
                        src={offerImage1}
                        alt="Offer Banner"
                        className="w-full h-40 object-cover rounded-xl shadow-md hover:scale-[1.02] transition"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">

                    <img
                        src={offerImage2}
                        alt="Offer"
                        className="w-full h-36 object-cover rounded-xl shadow-md hover:scale-[1.02] transition"
                    />

                    <img
                        src={offerImage3}
                        alt="Offer"
                        className="w-full h-36 object-cover rounded-xl shadow-md hover:scale-[1.02] transition"
                    />

                </div>
            </div>

            {/* 🍽️ Other Restaurants */}
            <div className="space-y-4">

                <h1 className="text-lg font-semibold text-[#1f2937] mb-3">
                    Other Restaurants
                </h1>

                {otherRestaurants.map((res) => (
                    <div
                        key={res.id}
                        onClick={() => {
                            trackRestaurantClick(res.id)
                            navigate(`/restaurant/${res.id}`)
                        }}
                        className="flex bg-white backdrop-blur-md border border-white/50 rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
                    >

                        <img
                            src={res.image}
                            alt={res.name}
                            className="w-[30%] h-28 object-cover"
                        />

                        <div className="p-3 flex flex-col justify-center">

                            <h3 className="font-bold text-[#1f2937] text-lg">
                                {res.name}
                            </h3>

                            <p className="text-sm text-gray-600">
                                {res.cuisine}
                            </p>

                            <div className="flex items-center gap-1 mt-1 text-sm">
                                <FaStar className="text-yellow-400" />
                                <span>{res.rating}</span>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Restaurant