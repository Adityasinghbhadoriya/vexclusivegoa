import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import CategoryCard from "../Components/CategoryCard"
import { restaurants } from "../Data/restaurant"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { trackCategoryClick, trackRestaurantClick } from "../api.js"
import logo from "../assets/logo.webp"
import dalunaImage from "../assets/DaLunaRes.webp"

import dalunaOffer1 from "../assets/da-luna-offer1.webp"
import dalunaOffer2 from "../assets/da-luna-offer3.webp"
import dalunaOffer3 from "../assets/DaLunaOffers.jpeg"
import parraRoadGoa from "../assets/Parra-Road-Goa.jpg.webp"
import hilltopMarketImage from "../assets/Hiltopmarket.jpg"
import chaporaLaneImage from "../assets/chaporaLane.jpeg"
import daLunaLogo from "../assets/DaLuna1.avif"
import elephantBeachLogo from "../assets/Elephant-beach.webp"

const BASE_URL = "https://vexclusivegoa.onrender.com"

/* ─── Google Fonts injected once ─────────────────────────────────── */
if (!document.getElementById("vex-fonts")) {
  const link = document.createElement("link")
  link.id = "vex-fonts"
  link.rel = "stylesheet"
  link.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap"
  document.head.appendChild(link)
}

const globalStyle = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(8px); }
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .vex-font-display { font-family: 'Playfair Display', Georgia, serif; }
  .vex-font-body    { font-family: 'DM Sans', sans-serif; }

  .vex-hero-title {
    background: linear-gradient(90deg, #ffffff 0%, #f7ead1 30%, #fffefc 70%, #f8e9d1 100%);
    background-size: 220% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 18px rgba(255,255,255,.55), 0 0 28px rgba(255,245,220,.18);
    animation: shimmer 3.2s linear infinite;
  }

  .vex-fade-up {
    opacity: 0;
    animation: fadeUp .7s ease forwards;
  }

  .vex-card-hover {
    transition: transform .25s ease, box-shadow .25s ease;
  }
  .vex-card-hover:hover {
    transform: translateY(-4px) scale(1.015);
    box-shadow: 0 12px 32px rgba(0,0,0,.12);
  }

  .vex-exp-card {
    position: relative;
    overflow: hidden;
    transition: transform .25s ease;
  }
  .vex-exp-card:hover {
    transform: translateY(-5px) scale(1.03);
  }
  .vex-exp-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(251,191,36,.18) 0%, transparent 70%);
    opacity: 0;
    transition: opacity .3s;
  }
  .vex-exp-card:hover::after { opacity: 1; }

  .vex-social-btn {
    transition: transform .2s ease, background .2s ease;
  }
  .vex-social-btn:hover {
    transform: translateY(-3px);
    background: rgba(0,0,0,.12) !important;
  }

  .vex-scroll-hint {
    animation: bounce 1.6s ease-in-out infinite;
  }

  .vex-trending-item {
    opacity: 0;
    animation: slideIn .5s ease forwards;
  }

  .vex-badge {
    display: inline-block;
    background: #fbbf24;
    color: #000;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .06em;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 999px;
  }

  .vex-section-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -.01em;
    position: relative;
    display: inline-block;
  }
  .vex-section-title::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 3px;
    background: #f97316;
    border-radius: 2px;
  }
`

const categories = [
  { title: "Restaurants", path: "/restaurants" },
  { title: "Clubs & Nightlife", path: "/clubs" },
]

const trending = [
  {
    name: "Parra Road",
    desc: "Scenic coconut-lined road for peaceful drives",
    tag: "🌴 Scenic",
    img: parraRoadGoa,
    path: "/parra-road",
    location: "Parra, Goa",
  },
  {
    name: "Hilltop Market",
    desc: "Night market with music, shopping & party vibes",
    tag: "🎶 Vibrant",
    img: hilltopMarketImage,
    path: "/hilltop-market",
    location: "Arpora, Goa",
  },
  {
    name: "Chapora Lane",
    desc: "Quiet village lanes with cafés & local charm",
    tag: "🏘️ Peaceful",
    img: chaporaLaneImage,
    path: "/chapora-lane",
    location: "Chapora, Goa",
  },
  {
    name: "Mandrem Beach",
    desc: "Calm beach for relaxation & yoga sessions",
    tag: "🏖️ Serene",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    path: "/mandrem-beach",
    location: "Mandrem, Goa",
  },
]

const experiences = [
  { label: "Sunset Cruise", icon: "🛥️", color: "#fff7ed", link: "https://www.google.com/search?q=Santa+Monica+Jetty+Terminal+Goa+sunset+cruise" },
  { label: "Beach Party", icon: "🎉", color: "#fef9c3", link: "https://www.google.com/search?q=Shiva+Valley+Beach+Party+Goa" },
  { label: "Water Sports", icon: "🏄", color: "#ecfdf5", link: "https://www.google.com/search?q=Goa+Water+Sports+Activities+and+Boat+Tours" },
  { label: "Casino Night", icon: "🎰", color: "#fdf4ff", link: "https://www.google.com/search?q=Big+Daddy+Casino+Goa" },
]

const WaveDivider = ({ flip = false, fill = "#ffffff" }) => (
  <div style={{ lineHeight: 0, transform: flip ? "scaleX(-1)" : "none" }}>
    <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: 32 }}>
      <path
        d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
        fill={fill}
      />
    </svg>
  </div>
)

const Home = () => {
  const navigate = useNavigate()
  const trendingRef = useRef(null)
  const offerImages = [dalunaOffer1, dalunaOffer2, dalunaOffer3]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const scrollToTrending = () => {
    trendingRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % offerImages.length)
        setIsAnimating(false)
      }, 800) // slide duration
    }, 3000) // total cycle

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const source = params.get("source")

    if (source) {
      fetch(`${BASE_URL}/api/analytics/scan?source=${source || "direct"}`)
        .then(() => console.log("QR tracked"))
        .catch((err) => console.error("QR tracking failed", err))
    }
  }, [])

  return (
    <div className="vex-font-body w-full overflow-x-hidden bg-white text-black">
      <style>{globalStyle}</style>

      {/* ===== HERO ===== */}
      {/* ===== PREMIUM HERO UI ===== */}
      <section className="relative min-h-screen overflow-hidden bg-[#08101d] text-white">

        {/* Background Image */}
        <img
          src={dalunaImage}
          alt="Goa Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#f6f1e9]" />

        {/* Top Navbar */}
        <div className="relative z-20 flex items-center px-6 pt-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold">
              <img src={logo} alt="V Exclusive Goa" className="rounded-full" />
            </div>
            <div className="leading-tight">
              <h2 className="text-xs tracking-[0.2em] font-semibold">
                V EXCLUSIVE GOA
              </h2>
            
            </div>
          </div>
        </div>


        {/* Hero Content */}
        <div className="relative z-20 px-7 pt-20">
          <p className="text-[#f6c337] text-xs tracking-[0.35em] font-semibold mb-6">
            GOA'S #1 DISCOVERY PLATFORM
          </p>

          <h1
            className="vex-font-display leading-none"
            style={{
              fontSize: "clamp(1rem,10vw,5rem)"
            }}
          >
            Discover Goa
          </h1>

          <h2
            className="vex-font-display italic mt-1"
            style={{
              fontSize: "clamp(1.5rem,6vw,3.2rem)"
            }}
          >
            Like Never Before
          </h2>

          <p className="mt-6 text-[12px] leading-6 max-w-[180px] text-gray-200">
            Your ultimate guide to the best restaurants,
            nightlife, beaches & experiences across Goa.
          </p>

          <button
            onClick={scrollToTrending}
            className="mt-10 bg-[#f6be18] text-black font-semibold px-4 py-2 rounded-full
       flex items-center gap-3 shadow-xl hover:scale-105 transition"
          >
            Explore Now
            <span className="text-xl">›</span>
          </button>
        </div>



        {/* Floating Category Glass Card */}
        <div className="relative z-30 mt-24 px-5">
          <div
            className="bg-[#f8f4ec] rounded-[36px] shadow-2xl p-4
       grid grid-cols-2 gap-3"
          >

            {/* Restaurants */}
            <Link 
              to="/restaurants"
              onClick={() => trackCategoryClick("restaurants")}
            >
              <div className="text-center border-r border-gray-300 pr-4">
                <div
                  className="w-12 h-12 mx-auto rounded-full
               bg-[#f4b617] flex items-center justify-center
               text-3xl mb-2"
                >
                  🍽
                </div>

                <h3 className="text-[#111] font-semibold text-sm">
                  Top Restaurants
                </h3>

                <p className="text-gray-600 mt-1 text-[12px] leading-5">
                  Curated dining experience
                </p>
              </div>
            </Link>


            {/* Nightlife */}
            <Link 
              to="/clubs"
              onClick={() => trackCategoryClick("clubs")}
            >
              <div className="text-center pl-4">
                <div
                  className="w-12 h-12 mx-auto rounded-full
               bg-purple-500 flex items-center justify-center
               text-3xl mb-2"
                >
                  🍸
                </div>

                <h3 className="text-[#111] font-semibold text-sm">
                  Nightlife & Clubs
                </h3>

                <p className="text-gray-600 mt-1 text-[12 px] leading-5">
                  Best parties & beach clubs
                </p>
              </div>
            </Link>

          </div>
        </div>


        {/* Curved transition into next section */}
        <div className="relative z-20 mt-[-20px]">
          <svg
            viewBox="0 0 1440 180"
            className="w-full h-28 block"
            preserveAspectRatio="none"
          >
            <path
              fill="#f6f1e9"
              d="M0,80 C240,170 520,10 740,80
              C1000,160 1220,40 1440,90
              L1440,180 L0,180Z"
            />
          </svg>
        </div>

      </section>

      {/* ===== OFFERS SLIDER ===== */}
      <div style={{ background: "#fff7ed" }}>
        <WaveDivider fill="#fff7ed" />

        <div className="px-5 py-5">
          <h2 className="vex-section-title mb-6">
            Exclusive Offers at Da Luna
          </h2>

          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              height: "220px",
              border: "1px solid rgba(251,191,36,.4)",
              boxShadow: "0 6px 20px rgba(0,0,0,.08)",
            }}
          >
            <div
              className="flex h-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: isAnimating ? "transform 0.8s ease-in-out" : "none",
              }}
            >
              {offerImages.map((img, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <img
                    src={img}
                    alt={`offer-${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {offerImages.map((_, i) => (
              <div
                key={i}
                style={{
                  width: currentSlide === i ? 18 : 8,
                  height: 8,
                  borderRadius: 999,
                  background: currentSlide === i ? "#f97316" : "#fde68a",
                  transition: "all .3s ease",
                }}
              />
            ))}
          </div>
        </div>

        <WaveDivider fill="#fefce8" flip />
      </div>

      {/* ===== TRENDING ===== */}
      <div style={{ background: "#fefce8" }} ref={trendingRef}>
        <WaveDivider fill="#fefce8" />
        <div className="px-5 space-y-4">
          <h2 className="vex-section-title mb-8">Trending in Goa</h2>

          <div className="space-y-4 ">
            {trending.map((place, i) => (
              <Link key={i} to={place.path} className="block" style={{ textDecoration: 'none' }}>
                <div
                  className="vex-trending-item vex-card-hover flex gap-3 items-center rounded-2xl"
                  style={{
                    background: "#fef59e",
                    animationDelay: `${i * 0.1}s`,
                    border: "1px solid rgba(251,191,36,.5)",
                    boxShadow: "0 2px 12px rgba(0,0,0,.05)",
                    padding: "12px",
                  }}
                >
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <img
                      src={place.img}
                      alt={place.name}
                      className="w-24 h-20 object-cover rounded-lg"
                      style={{ display: "block" }}
                    />
                    <span style={{
                      position: "absolute", top: 4, right: 4,
                      width: 6, height: 6, borderRadius: "50%",
                      background: "#f97316",
                      boxShadow: "0 0 0 2px white",
                    }} />
                  </div>
                  <div>
                    <span className="vex-badge" style={{ marginBottom: 4, fontSize: "12px" }}>{place.tag}</span>
                    <h3 className="vex-font-display" style={{ fontSize: "0.95rem", fontWeight: 700, lineHeight: 1.2 }}>{place.name}</h3>
                    <p style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>{place.desc}</p>
                    <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 3, display: "flex", alignItems: "center", gap: 3 }}>📍 {place.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <WaveDivider fill="#fef9c3" flip />
      </div>

      {/* ===== MUST VISIT ===== */}
      <div style={{ background: "#fef9c3" }} className="px-6 py-10">
        <h2 className="vex-section-title mb-6">Must Visit</h2>

        <div className="space-y-4">
          {restaurants.map((restaurant) => {
            const descriptions = {
              "Da Luna Restaurant": "Italian vibes + perfect sunset dining",
              "Elephant Beach Cafe & Bar": "Peaceful vibes + Fresh Food",
              "Thalassa": "Greek food + nightlife experience",
            };
            const logos = {
              "Da Luna Restaurant": daLunaLogo,
              "Elephant Beach Cafe & Bar": elephantBeachLogo,
              "Thalassa": "https://www.acroncandolimresortgoa.com/explore-goa/local-cuisine-in-goa/thalassa-goa/images/thalassa-goa.jpg",
            };
            return (
              <div
                key={restaurant.id}
                className="vex-card-hover"
                onClick={() => {
                  trackRestaurantClick(restaurant.id, restaurant.name)
                  navigate(`/restaurant/${restaurant.id}`)
                }}
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: "16px 20px",
                  border: "1px solid rgba(251,191,36,.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxShadow: "0 2px 12px rgba(0,0,0,.04)",
                  cursor: "pointer",
                }}
              >
                <img
                  src={logos[restaurant.name]}
                  alt={restaurant.name}
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 12,
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: "1rem" }}>{restaurant.name}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", marginTop: 2 }}>{descriptions[restaurant.name]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== EXPERIENCES ===== */}
      <div style={{ background: "#fffbeb" }} className="px-6 py-10">
        <h2 className="vex-section-title mb-6">Top Experiences</h2>

        <div className="grid grid-cols-2 gap-4">
          {experiences.map((item, i) => (
            <div
              key={i}
              className="vex-exp-card"
              onClick={() => window.open(item.link, "_blank")}
              style={{
                background: item.color,
                borderRadius: 16,
                padding: "20px 12px",
                textAlign: "center",
                border: "1px solid rgba(0,0,0,.06)",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8, whiteSpace: "nowrap" }}>{item.icon}</div>
              <p style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== WHY US ===== */}
      <div className="px-6 py-10 text-center" style={{ background: "#fef9c3" }}>
        <h2 className="vex-font-display" style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 12 }}>
          ✨ Why VExclusive?
        </h2>
        <p style={{ fontSize: 14, color: "#374151", maxWidth: 340, margin: "0 auto", lineHeight: 1.7 }}>
          No searching. No confusion. Just scan and instantly discover the best places around you.
        </p>
      </div>

      {/* ===== FEATURES ===== */}
      <div className="px-6 py-10" style={{ background: "#fffbeb" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-md mx-auto">
          {[
            {
              icon: "📱",
              title: "In-Car QR Experience",
              body: "Through our in-car QR experience, tourists can instantly explore trusted restaurants, cafés, clubs, beaches, and local businesses without wasting time searching across multiple platforms.",
            },
            {
              icon: "📍",
              title: "Trusted Partners",
              body: "We partner with selected venues and brands across Goa to bring useful information directly to our audience inside the ride itself — including menus, directions, highlights, and exclusive offers.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="vex-card-hover"
              style={{
                background: "white",
                borderRadius: 20,
                padding: "24px",
                border: "1px solid rgba(251,191,36,.35)",
                boxShadow: "0 4px 20px rgba(0,0,0,.05)",
              }}
            >
              <img
                src={logo}
                alt="V Exclusive Logo"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: 14,
                }}
              />
              <h3 style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== GOOGLE REVIEWS ===== */}
      <div className="px-6 py-10 text-center" style={{ background: "#fef9c3" }}>
        <h2 className="vex-font-display" style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 8 }}>
          ⭐ Share Your Experience
        </h2>
        <p style={{ fontSize: 14, color: "#374151", marginBottom: 16 }}>
          Help us improve! Share your V Exclusive experience and let fellow travelers know what makes your Goa journey special.
        </p>
        <button
          onClick={() => window.open("https://www.google.com/search?q=v+exclusive+car+rental+goa&oq=V+Exclusive+goa&gs_lcrp=EgZjaHJvbWUqCAgBEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDc0OTNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x3bbfebdc071fd29f:0x4db28d24cb48f996,3,,,,", "_blank")}
          style={{
            background: "linear-gradient(135deg, #4285f4 0%, #34a853 25%, #fbbc04 50%, #ea4335 100%)",
            color: "white",
            border: "none",
            borderRadius: 12,
            padding: "12px 24px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,.15)",
            transition: "transform .2s ease",
          }}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          ✍️ Write a Review on Google
        </button>
      </div>

      {/* ===== FOOTER ===== */}
      <div style={{
        background: "#fbbf24",
        borderTop: "1px solid rgba(0,0,0,.06)",
        padding: "40px 24px",
        textAlign: "center",
      }}>
        <h1 className="vex-font-display" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          VExclusive Goa
        </h1>
        <p style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>Your personal Goa guide</p>

        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
          {[
            { icon: <FaPhoneAlt />, text: "+91 91583 06507" },
            { icon: <FaEnvelope />, text: "vkyrental@gmail.com" },
            { icon: <FaMapMarkerAlt />, text: "Panaji, Goa" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#374151" }}>
              <span style={{ opacity: .7 }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12 }}>
          {[
            {
              icon: <FaLinkedin />,
              label: "LinkedIn",
              link: null,
            },
            {
              icon: <FaInstagram />,
              label: "Instagram",
              link: "https://www.instagram.com/vexclusivegoa/",
            },
            {
              icon: <FaFacebookF />,
              label: "Facebook",
              link: "https://www.facebook.com/V.Exclusive/",
            },
            {
              icon: <FaXTwitter />,
              label: "X / Twitter",
              link: null,
            },
          ].map((s, i) =>
            s.link ? (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="vex-social-btn"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(0,0,0,.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                {s.icon}
              </a>
            ) : (
              <button
                key={i}
                aria-label={s.label}
                className="vex-social-btn"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(0,0,0,.07)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  color: "#000",
                }}
              >
                {s.icon}
              </button>
            )
          )}
        </div>

        <p style={{ fontSize: 11, color: "rgba(0,0,0,.4)", marginTop: 28, letterSpacing: ".04em" }}>
          © 2026 VExclusive Goa
        </p>
      </div>

    </div>
  )
}

export default Home