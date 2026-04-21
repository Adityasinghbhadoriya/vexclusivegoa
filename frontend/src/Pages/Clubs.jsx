import React from "react"
import { useNavigate } from "react-router-dom"
import { FaStar, FaPhoneAlt, FaDirections, FaGlassCheers, FaArrowLeft } from "react-icons/fa"
import { clubs } from "../Data/clubs"

const Clubs = () => {
    const navigate = useNavigate()

    const featuredClub = clubs[0]
    const otherClubs = clubs.slice(1)

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#e4f35f] via-[#d8d336] to-[#329cd9] px-4 py-6">

            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center gap-3 pb-3 pt-3 mb-3 border-b">

                <button onClick={() => navigate("/")} className="text-[#1f2937] text-lg">
                    <FaArrowLeft />
                </button>

                <h1 onClick={() => navigate("/")} className="text-xl font-semibold text-[#1f2937] cursor-pointer">
                    Top Clubs & Nightlife
                </h1>

            </div>

            {/* ⭐ Featured Club */}
            <div className="relative mb-6">

                {/* Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-pink-200/40 blur-xl"></div>

                <div
                    onClick={() => navigate(`/club/${featuredClub.id}`)}
                    className="relative bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl shadow-md overflow-hidden cursor-pointer"
                >

                    <div className="relative">
                        <img
                            src={featuredClub.image}
                            alt={featuredClub.name}
                            className="w-full h-56 object-cover"
                        />

                        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
                            <h2 className="text-2xl font-bold">{featuredClub.name}</h2>
                            <p className="text-sm">{featuredClub.vibe}</p>

                            <div className="flex items-center gap-1 mt-1">
                                <FaStar className="text-yellow-300 text-lg" />
                                <span className="text-lg">{featuredClub.rating}</span>
                            </div>
                        </div>

                        {/* Offer */}
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-[#1242c5] to-[#5682da] text-white text-sm px-3 py-1 rounded-md font-bold shadow animate-pulse">
                            <span className="text-lg text-yellow-300">10% OFF</span> with V Exclusive
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
                            <FaGlassCheers className="mb-1" />
                            Book Entry
                        </button>

                    </div>
                </div>
            </div>

            {/* 🎉 Other Clubs */}
            <div className="space-y-4">

                {otherClubs.map((club) => (
                    <div
                        key={club.id}
                        onClick={() => navigate(`/club/${club.id}`)}
                        className="flex bg-white backdrop-blur-md border border-white/50 rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
                    >

                        <img
                            src={club.image}
                            alt={club.name}
                            className="w-[30%] h-28 object-cover"
                        />

                        <div className="p-3 flex flex-col justify-center">

                            <h3 className="font-bold text-[#1f2937] text-lg">
                                {club.name}
                            </h3>

                            <p className="text-sm text-gray-600">
                                {club.vibe}
                            </p>

                            <div className="flex items-center gap-1 mt-1 text-sm">
                                <FaStar className="text-yellow-400" />
                                <span>{club.rating}</span>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* CTA */}
            <div className="mt-6 text-center">
                <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition border border-white/50">
                    See More →
                </button>
            </div>

        </div>
    )
}

export default Clubs