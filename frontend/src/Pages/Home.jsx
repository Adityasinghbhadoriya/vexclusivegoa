import React, { useRef, useState, useEffect, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import L from "leaflet"
import CategoryCard from "../Components/CategoryCard"
import { restaurants } from "../Data/restaurant"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaBeer,
  FaPizzaSlice,
  FaMusic,
  FaMicrophoneAlt,
  FaClock,
  FaGift,
} from "react-icons/fa"
import { trackCategoryClick, trackRestaurantClick } from "../api.js"
import { calculateDistance, formatDistance } from "../utils/location"
import logo from "../assets/logo.webp"
import dalunaImage from "../assets/DaLunaRes.webp"
import sakanaLogo from "../assets/sakana1.webp"

import dalunaOffer1 from "../assets/da-luna-offer1.webp"
import dalunaOffer2 from "../assets/da-luna-offer3.webp"
import dalunaOffer3 from "../assets/DaLunaOffers.jpeg"
import parraRoadGoa from "../assets/Parra-Road-Goa.jpg.webp"
import hilltopMarketImage from "../assets/Hiltopmarket.jpg"
import chaporaLaneImage from "../assets/chaporaLane.jpeg"
import morjimImage from "../assets/morjimImage.jpg"
import daLunaLogo from "../assets/DaLuna1.avif"
import elephantBeachLogo from "../assets/Elephant-beach.webp"
import piccoloLogo from "../assets/piccolo.webp"
import basilicaImage from "../assets/Basilica Church.webp"
import wildlifeImage from "../assets/MahavirWildlife.webp"

const BASE_URL = "https://vexclusivegoa.onrender.com"

/* ─── Google Fonts injected once ─────────────────────────────────── */
if (typeof document !== "undefined" && !document.getElementById("vex-fonts")) {
  const link = document.createElement("link")
  link.id = "vex-fonts"
  link.rel = "stylesheet"
  link.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=Cormorant+Garamond:wght@500;600;700&family=Bebas+Neue&display=swap"
  document.head.appendChild(link)
}

const globalStyle = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(8px); }
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes kenburns {
    0%   { transform: scale(1.05) translate(0,0); }
    50%  { transform: scale(1.15) translate(-1.5%, -1%); }
    100% { transform: scale(1.05) translate(0,0); }
  }
  @keyframes shineSweep {
    0%   { transform: translateX(-120%) skewX(-20deg); }
    100% { transform: translateX(220%) skewX(-20deg); }
  }
  @keyframes floatY {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-6px); }
  }
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(251,191,36,.45); }
    50%      { box-shadow: 0 0 0 14px rgba(251,191,36,0); }
  }

  .vex-font-display { font-family: 'Playfair Display', Georgia, serif; letter-spacing: -0.01em; }
  .vex-font-serif   { font-family: 'Cormorant Garamond', Georgia, serif; }
  .vex-font-body    { font-family: 'DM Sans', sans-serif; }

  .vex-hero-title {
    background: linear-gradient(90deg, #ffffff 0%, #f7ead1 30%, #fffefc 60%, #f8d8a3 100%);
    background-size: 220% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 24px rgba(255,255,255,.35);
    animation: shimmer 4.5s linear infinite;
  }

  .vex-fade-up   { opacity: 0; animation: fadeUp .9s cubic-bezier(.2,.7,.2,1) forwards; }
  .vex-fade-in   { opacity: 0; animation: fadeIn 1.2s ease forwards; }
  .vex-float     { animation: floatY 4s ease-in-out infinite; }
  .vex-pulse-glow{ animation: pulseGlow 2.4s ease-out infinite; }

  .vex-card-hover { transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease; }
  .vex-card-hover:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 50px -20px rgba(20,10,0,.25);
  }

  .vex-exp-card { position: relative; overflow: hidden; transition: transform .35s ease; }
  .vex-exp-card:hover { transform: translateY(-6px) scale(1.02); }
  .vex-exp-card::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(251,191,36,.22) 0%, transparent 70%);
    opacity: 0; transition: opacity .35s;
  }
  .vex-exp-card:hover::after { opacity: 1; }

  .vex-social-btn { transition: transform .25s ease, background .25s ease, border-color .25s ease; }
  .vex-social-btn:hover {
    transform: translateY(-3px);
    background: rgba(251,191,36,.18) !important;
    border-color: rgba(251,191,36,.6) !important;
  }

  .vex-scroll-hint { animation: bounce 1.6s ease-in-out infinite; }

  .vex-trending-item { opacity: 0; animation: slideIn .55s ease forwards; }

  .vex-badge {
    display: inline-block;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    color: #1a0f00;
    font-size: 10px; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    padding: 4px 10px; border-radius: 999px;
    box-shadow: 0 4px 14px rgba(251,191,36,.35);
  }

  .vex-section-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.75rem; font-weight: 700;
    letter-spacing: -.015em; position: relative; display: inline-block;
    color: #1a1208;
  }
  .vex-section-title::after {
    content: ''; position: absolute; bottom: -8px; left: 0;
    width: 48px; height: 3px;
    background: linear-gradient(90deg, #f97316, #fbbf24);
    border-radius: 2px;
  }
  .vex-eyebrow {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px; letter-spacing: .28em; text-transform: uppercase;
    color: #b45309; font-weight: 600;
  }

  .vex-kenburns { animation: kenburns 18s ease-in-out infinite; }

  .vex-glass {
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(18px) saturate(140%);
    -webkit-backdrop-filter: blur(18px) saturate(140%);
    border: 1px solid rgba(255,255,255,.18);
  }
  .vex-glass-light {
    background: rgba(255,255,255,.7);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,.6);
  }

  .vex-cta {
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #f97316 0%, #fbbf24 100%);
    color: #1a0f00;
    border: none; cursor: pointer;
    box-shadow: 0 10px 30px -8px rgba(249,115,22,.55);
    transition: transform .25s ease, box-shadow .25s ease;
  }
  .vex-cta::before {
    content: ''; position: absolute; top: 0; left: 0;
    width: 40%; height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,.55), transparent);
    animation: shineSweep 3s ease-in-out infinite;
  }
  .vex-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 40px -10px rgba(249,115,22,.7); }

  .vex-divider-thin {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(180,140,60,.35), transparent);
  }

  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

  .vex-tilt {
    transition: transform .4s cubic-bezier(.2,.7,.2,1);
  }
  .vex-tilt:hover { transform: perspective(800px) rotateX(2deg) rotateY(-2deg) translateY(-4px); }

  .vex-luna-ring {
    background: conic-gradient(from 180deg at 50% 50%, #fbbf24, #f97316, #fde68a, #fbbf24);
    padding: 2px; border-radius: 999px;
  }

  .vex-live-shell {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 18px;
    align-items: start;
  }
  .vex-live-panel {
    background: rgba(255,255,255,.8);
    border: 1px solid rgba(233,201,142,.7);
    border-radius: 24px;
    padding: 16px;
  }
  .vex-live-map {
    background: rgba(255,255,255,.82);
    border: 1px solid rgba(233,201,142,.7);
    border-radius: 24px;
    padding: 16px;
  }
  .vex-live-map-frame {
    height: 360px;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(249,115,22,.15);
  }

  @media (max-width: 900px) {
    .vex-live-shell {
      grid-template-columns: 1fr;
    }
    .vex-live-map-frame {
      height: 280px;
    }
  }

  @media (max-width: 640px) {
    .vex-live-panel, .vex-live-map {
      padding: 12px;
      border-radius: 18px;
    }
    .vex-live-map-frame {
      height: 240px;
    }
  }

  /* ── Mario Miranda "Why Us" section ── */
  .mm-section {
    background: #f5c800;
    position: relative;
    padding: 64px 24px 72px;
    overflow: hidden;
  }
  .mm-bg-halftone {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px);
    background-size: 18px 18px;
    pointer-events: none;
  }
  .mm-border-frame {
    position: absolute;
    inset: 12px;
    border: 3px solid #1a1200;
    pointer-events: none;
    z-index: 1;
  }
  .mm-border-frame::before {
    content: '';
    position: absolute;
    inset: 5px;
    border: 1.5px solid rgba(0,0,0,0.22);
  }
  .mm-corner {
    position: absolute;
    width: 26px;
    height: 26px;
    border-color: #1a1200;
    border-style: solid;
    z-index: 2;
  }
  .mm-corner.tl { top: 6px; left: 6px; border-width: 4px 0 0 4px; }
  .mm-corner.tr { top: 6px; right: 6px; border-width: 4px 4px 0 0; }
  .mm-corner.bl { bottom: 6px; left: 6px; border-width: 0 0 4px 4px; }
  .mm-corner.br { bottom: 6px; right: 6px; border-width: 0 4px 4px 0; }
  .mm-inner {
    position: relative;
    z-index: 5;
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
  }
  .mm-promise-tag {
    display: inline-block;
    background: #1a1200;
    color: #f5c800;
    font-family: 'Bebas Neue', 'DM Sans', sans-serif;
    font-size: 0.82rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    padding: 5px 18px;
    border-radius: 2px;
    margin-bottom: 18px;
  }
  .mm-stamp-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 8px;
  }
  .mm-stamp-line {
    flex: 1;
    max-width: 80px;
    height: 2.5px;
    background: #1a1200;
  }
  .mm-eyebrow-dark {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #1a1200;
  }
  .mm-heading {
    font-family: 'Bebas Neue', 'Playfair Display', Georgia, serif;
    font-size: clamp(1rem, 9vw, 5.2rem);
    line-height: 0.93;
    color: #1a1200;
    letter-spacing: 0.03em;
    margin: 10px 0 6px;
    text-transform: uppercase;
  }
  .mm-subheading {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1rem, 3vw, 1.3rem);
    font-style: italic;
    color: #3a2900;
    margin: 0 0 0;
    letter-spacing: 0.01em;
  }
  .mm-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 20px 0 24px;
  }
  .mm-divider-line {
    height: 1.5px;
    background: #1a1200;
    flex: 1;
    max-width: 120px;
  }
  .mm-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 14.5px;
    line-height: 1.75;
    color: #2a1800;
    max-width: 480px;
    margin: 0 auto 32px;
  }
  .mm-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 14px;
    margin-top: 8px;
  }
  .mm-card {
    background: #1a1200;
    border-radius: 4px;
    padding: 24px 20px 22px;
    text-align: left;
    position: relative;
    overflow: hidden;
    border: 2px solid #1a1200;
    transition: transform .3s ease, box-shadow .3s ease;
  }
  .mm-card:hover {
    transform: translateY(-4px);
    box-shadow: 6px 6px 0 rgba(0,0,0,0.35);
  }
  .mm-card::after {
    content: '';
    position: absolute;
    top: 6px; right: 6px;
    width: 10px; height: 10px;
    border-top: 2px solid #f5c800;
    border-right: 2px solid #f5c800;
  }
  .mm-card-icon {
    font-size: 28px;
    line-height: 1;
    margin-bottom: 12px;
    display: block;
  }
  .mm-card-title {
    font-family: 'Bebas Neue', 'Playfair Display', Georgia, serif;
    font-size: 1.2rem;
    letter-spacing: 0.07em;
    color: #f5c800;
    margin: 0 0 8px;
    text-transform: uppercase;
  }
  .mm-card-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 12.5px;
    line-height: 1.65;
    color: rgba(245,200,0,0.7);
  }
  .mm-badge-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    flex-wrap: wrap;
    margin-top: 34px;
  }
  .mm-badge-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  .mm-badge-circle {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: #1a1200;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    position: relative;
    transition: transform .25s ease;
  }
  .mm-badge-circle:hover { transform: scale(1.1); }
  .mm-badge-circle::before {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    border: 1px dashed rgba(245,200,0,0.45);
  }
  .mm-badge-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #1a1200;
  }
  .mm-ink-blob {
    position: absolute;
    border-radius: 50%;
    background: rgba(0,0,0,0.05);
    pointer-events: none;
  }
`

const categories = [
  { title: "Restaurants", path: "/restaurants" },
  { title: "Clubs & Nightlife", path: "/clubs" },
]

const liveExplorePlaces = [
  {
    id: "sakana",
    name: "Sakana Japanese Restaurant",
    category: "restaurants",
    coords: [15.5823, 73.7428],
    address: "Anjuna, Goa",
    description: "Authentic sushi and ramen in a relaxed setting.",
  },
  {
    id: "da-luna",
    name: "Da Luna Restaurant",
    category: "restaurants",
    coords: [15.5805, 73.7478],
    address: "Anjuna, Goa",
    description: "Fine dining with sea-view evenings and premium Italian plates.",
  },
  {
    id: "piccola-roma",
    name: "Piccola Roma Pizza",
    category: "restaurants",
    coords: [15.6020, 73.7380],
    address: "Vagator, Goa",
    description: "Easy-going pizza stop for beach-town cravings.",
  },
  {
    id: "chapora-lane",
    name: "Chapora Lane",
    category: "beaches",
    coords: [15.6126, 73.7425],
    address: "Chapora, Goa",
    description: "Quiet village lanes with cafés, boutiques and sunset walks.",
  },
  {
    id: "morjim-beach",
    name: "Morjim Beach",
    category: "beaches",
    coords: [15.6228, 73.7306],
    address: "Morjim, Goa",
    description: "A calm shoreline best for sunset views and long coastal strolls.",
  },
  {
    id: "hilltop-market",
    name: "Hilltop Market",
    category: "nightlife",
    coords: [15.6608, 73.7608],
    address: "Arpora, Goa",
    description: "Friday night energy with live music, shopping and festive vibes.",
  },
  {
    id: "bhagwan-mahavir",
    name: "Bhagwan Mahavir Wildlife Sanctuary",
    category: "nature",
    coords: [15.3828, 74.1810],
    address: "Mollem, Goa",
    description: "Dense forests and lush trails for a nature-led escape.",
  },
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
  {
    name: "Morjim",
    desc: "Quiet coastal paradise with turtles, sunsets & peaceful beaches",
    tag: "🌊 Tranquil",
    img: morjimImage,
    path: "/morjim",
    location: "Morjim, Goa",
  },
  {
    name: "Basilica of Bom Jesus",
    desc: "Historic church with sacred relics and timeless heritage in Old Goa",
    tag: "⛪ Heritage",
    img: basilicaImage,
    path: "/basilica-bom-jesus",
    location: "Old Goa",
  },
  {
    name: "Bhagwan Mahavir Wildlife Sanctuary",
    desc: "Lush forests, waterfalls and wild trails in the heart of South Goa",
    tag: "🌿 Nature",
    img: wildlifeImage,
    path: "/bhagwan-mahavir-wildlife",
    location: "Mollem, Goa",
  },
  {
    name: "Cabo de Rama Beach",
    desc: "Quiet cliffs, peaceful shores and scenic sunset views in South Goa",
    tag: "🌅 Scenic",
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80",
    path: "/cabo-de-rama-beach",
    location: "Cabo de Rama, Goa",
  },
]

const experiences = [
  { label: "Sunset Cruise", icon: "🛥️", color: "linear-gradient(135deg,#fff7ed,#ffedd5)", link: "https://www.google.com/search?q=Santa+Monica+Jetty+Terminal+Goa+sunset+cruise" },
  { label: "Beach Party",   icon: "🎉", color: "linear-gradient(135deg,#fef9c3,#fde68a)", link: "https://www.google.com/search?q=Shiva+Valley+Beach+Party+Goa" },
  { label: "Water Sports",  icon: "🏄", color: "linear-gradient(135deg,#ecfdf5,#d1fae5)", link: "https://www.google.com/search?q=Goa+Water+Sports+Activities+and+Boat+Tours" },
  { label: "Casino Night",  icon: "🎰", color: "linear-gradient(135deg,#fdf4ff,#fae8ff)", link: "https://www.google.com/search?q=Big+Daddy+Casino+Goa" },
]

const WaveDivider = ({ flip = false, fill = "#fffaf0" }) => (
  <div style={{ lineHeight: 0, transform: flip ? "rotate(180deg)" : "none" }}>
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
      <path d="M0,32 C240,80 480,0 720,32 C960,64 1200,16 1440,40 L1440,80 L0,80 Z" fill={fill} />
    </svg>
  </div>
)

const Home = () => {
  const navigate = useNavigate()
  const trendingRef = useRef(null)
  const offerImages = [dalunaOffer1, dalunaOffer2, dalunaOffer3]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLivePanelOpen, setIsLivePanelOpen] = useState(false)
  const [locationStatus, setLocationStatus] = useState("idle")
  const [userLocation, setUserLocation] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPlace, setSelectedPlace] = useState(liveExplorePlaces[0])
  const autoAdvanceRef = useRef(null)
  const timeoutRef = useRef(null)
  const dragStartX = useRef(null)
  const hasDragged = useRef(false)
  const AUTO_DELAY = 5000

  const scrollToTrending = () => {
    trendingRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const setSlide = (index) => {
    const normalized = ((index % offerImages.length) + offerImages.length) % offerImages.length
    setCurrentSlide(normalized)
    setIsAnimating(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsAnimating(false), 800)
  }

  const nextSlide = () => { setSlide(currentSlide + 1); restartAutoAdvance() }
  const prevSlide = () => { setSlide(currentSlide - 1); restartAutoAdvance() }
  const goToSlide = (index) => { setSlide(index); restartAutoAdvance() }

  const restartAutoAdvance = () => {
    clearTimeout(autoAdvanceRef.current)
    autoAdvanceRef.current = setTimeout(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % offerImages.length
        setIsAnimating(true)
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setIsAnimating(false), 800)
        return next
      })
      restartAutoAdvance()
    }, AUTO_DELAY)
  }

  useEffect(() => {
    restartAutoAdvance()
    return () => {
      clearTimeout(autoAdvanceRef.current)
      clearTimeout(timeoutRef.current)
    }
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const openLivePanel = () => {
    setIsLivePanelOpen(true)
    setLocationStatus("loading")
    setSelectedCategory("all")

    if (!navigator.geolocation) {
      setLocationStatus("unsupported")
      setUserLocation(null)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const withDistance = liveExplorePlaces
          .map((place) => ({
            ...place,
            distance: calculateDistance(lat, lon, place.coords[0], place.coords[1]),
          }))
          .sort((a, b) => a.distance - b.distance)

        setUserLocation({ lat, lon })
        setSelectedPlace(withDistance[0])
        setLocationStatus("ready")
      },
      () => {
        setLocationStatus("denied")
        setUserLocation(null)
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    )
  }

  const nearbyPlaces = useMemo(() => {
    if (!userLocation) {
      return liveExplorePlaces
        .filter((place) => selectedCategory === "all" || place.category === selectedCategory)
        .slice(0, 6)
    }

    return liveExplorePlaces
      .map((place) => ({
        ...place,
        distance: calculateDistance(userLocation.lat, userLocation.lon, place.coords[0], place.coords[1]),
      }))
      .filter((place) => selectedCategory === "all" || place.category === selectedCategory)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 8)
  }, [selectedCategory, userLocation])

  const markerIcon = (accent) =>
    L.divIcon({
      className: "",
      html: `<div style="width: 16px; height: 16px; border-radius: 999px; background: ${accent}; border: 2px solid #fff; box-shadow: 0 0 0 6px rgba(255,255,255,.25);"></div>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    })

  return (
    <div className="vex-font-body" style={{ background: "#fffaf0", color: "#1a1208", overflowX: "hidden" }}>
      <style>{globalStyle}</style>

      {/* ===== HERO ===== */}
      <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", color: "#fff" }}>
        {/* Background Image with Ken Burns */}
        <div
          className="vex-kenburns"
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${dalunaImage})`,
            backgroundSize: "cover", backgroundPosition: "center",
            willChange: "transform",
          }}
        />
        {/* Layered luxury overlays */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(10,5,0,.55) 0%, rgba(10,5,0,.35) 40%, rgba(10,5,0,.85) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 70% 20%, rgba(251,191,36,.25), transparent 60%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 20% 80%, rgba(249,115,22,.18), transparent 55%)",
        }} />

        {/* Top Navbar */}
        <div
          className="vex-glass"
          style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
            padding: "12px 18px",
            background: scrolled ? "rgba(15,8,2,.7)" : "rgba(15,8,2,.25)",
            transition: "background .3s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div className="vex-luna-ring" style={{ width: 38, height: 38 }}>
                <img src={logo} alt="V Exclusive Goa" style={{ width: "100%", height: "100%", borderRadius: 999, objectFit: "cover", background: "#0f0802" }} />
              </div>
              <div style={{ lineHeight: 1 }}>
                <div className="vex-eyebrow" style={{ color: "#fbbf24", fontSize: 9 }}>PREMIUM GOA</div>
                <div className="vex-font-display" style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: ".05em" }}>
                  V EXCLUSIVE GOA
                </div>
              </div>
            </div>
            <button
              onClick={openLivePanel}
              className="vex-eyebrow vex-pulse-glow"
              style={{
                color: "#fff", background: "rgba(251,191,36,.18)",
                padding: "6px 12px", borderRadius: 999, fontSize: 10,
                border: "1px solid rgba(251,191,36,.45)", cursor: "pointer",
              }}
            >
              ● LIVE
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: 760, margin: "0 auto",
          padding: "140px 22px 40px",
          textAlign: "center",
        }}>
          <div className="vex-fade-up" style={{ animationDelay: ".1s" }}>
            <span className="vex-badge" style={{ background: "rgba(255,255,255,.12)", color: "#fde68a", border: "1px solid rgba(251,191,36,.4)", boxShadow: "none", backdropFilter: "blur(8px)" }}>
              Goa's #1 Discovery Platform
            </span>
          </div>

          <h1 className="vex-font-display vex-fade-up" style={{
            marginTop: 22, fontSize: "clamp(2.4rem, 8vw, 4.4rem)",
            lineHeight: 1.05, fontWeight: 700,
            animationDelay: ".25s",
          }}>
            <span className="vex-hero-title">Experience Goa</span>
          </h1>

          <h2 className="vex-font-serif vex-fade-up" style={{
            marginTop: 6, fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
            fontWeight: 500, color: "#fff8e6", fontStyle: "italic",
            animationDelay: ".4s",
          }}>
            Like Never Before
          </h2>

          <p className="vex-fade-up" style={{
            marginTop: 22, fontSize: 15.5, lineHeight: 1.7,
            color: "rgba(255,255,255,.82)", maxWidth: 520, margin: "22px auto 0",
            animationDelay: ".55s",
          }}>
            Your ultimate guide to the best restaurants, nightlife, beaches & curated experiences across Goa.
          </p>

          <button
            onClick={scrollToTrending}
            className="vex-cta vex-fade-up"
            style={{
              marginTop: 32, padding: "14px 30px",
              borderRadius: 999, fontSize: 14, fontWeight: 700,
              letterSpacing: ".05em", textTransform: "uppercase",
              animationDelay: ".7s",
              display: "inline-flex", alignItems: "center", gap: 10,
            }}
          >
            Explore Now
            <span style={{ fontSize: 18, lineHeight: 1 }}>›</span>
          </button>

          <div className="vex-scroll-hint" style={{ marginTop: 50, color: "rgba(255,255,255,.5)", fontSize: 22 }}>↓</div>
        </div>

        {/* Floating Category Glass Cards */}
        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: 720, margin: "0 auto",
          padding: "0 22px 110px",
        }}>
          <div className="vex-fade-up" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, animationDelay: ".85s" }}>
            {/* Top row - Restaurants and Nightlife */}
            <div style={{ display: "flex", gap: 14, justifyContent: "center", width: "100%" }}>
              {/* Restaurants */}
              <Link
                to="/restaurants"
                onClick={() => trackCategoryClick("restaurants")}
                className="vex-glass vex-tilt"
                style={{ textDecoration: "none", color: "#fff", borderRadius: 20, padding: 18, display: "block", minWidth: 180, flex: 1, maxWidth: 320 }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: "linear-gradient(135deg,#fbbf24,#f97316)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, marginBottom: 6,
                  }}>🍽</div>
                  <div className="vex-font-display" style={{ fontSize: 16, fontWeight: 700 }}>Top Restaurants</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)" }}>Curated dining experience</div>
                </div>
              </Link>

              {/* Nightlife */}
              <Link
                to="/clubs"
                onClick={() => trackCategoryClick("clubs")}
                className="vex-glass vex-tilt"
                style={{ textDecoration: "none", color: "#fff", borderRadius: 20, padding: 18, display: "block", minWidth: 180, flex: 1, maxWidth: 320 }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: "linear-gradient(135deg,#a78bfa,#ec4899)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, marginBottom: 6,
                  }}>🍸</div>
                  <div className="vex-font-display" style={{ fontSize: 16, fontWeight: 700 }}>Nightlife & Clubs</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)" }}>Best parties & beach clubs</div>
                </div>
              </Link>
            </div>

            {/* Bottom row - Spa & Wellness centered */}
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              {/* Spa & Wellness */}
              <Link
                to="/spa/1"
                onClick={() => trackCategoryClick("spa")}
                className="vex-glass vex-tilt"
                style={{ textDecoration: "none", color: "#fff", borderRadius: 20, padding: 18, display: "block", minWidth: 180, maxWidth: 320 }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: "linear-gradient(135deg,#14b8a6,#06b6d4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, marginBottom: 6,
                  }}>🧖</div>
                  <div className="vex-font-display" style={{ fontSize: 16, fontWeight: 700 }}>Spa & Wellness</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)" }}>Relaxation and rejuvenation</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Curved transition */}
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, zIndex: 5 }}>
          <WaveDivider fill="#fffaf0" />
        </div>
      </section>

      {isLivePanelOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(8, 4, 1, 0.8)", zIndex: 70, padding: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "min(1160px, 100%)", maxHeight: "92vh", overflowY: "auto", borderRadius: 28, background: "#fffaf0", border: "1px solid rgba(249,115,22,.2)", boxShadow: "0 24px 80px rgba(0,0,0,.25)", padding: "24px 24px 30px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
              <div>
                <div className="vex-eyebrow" style={{ color: "#b45309" }}>LIVE LOCATION</div>
                <h3 className="vex-font-display" style={{ fontSize: "1.6rem", margin: "6px 0 4px", color: "#1a1208" }}>Explore Near Me</h3>
                <p style={{ margin: 0, color: "#5b4632", maxWidth: 620, lineHeight: 1.65 }}>
                  Discover nearby restaurants, beaches and nightlife around your current location in real time.
                </p>
              </div>
              <button
                onClick={() => setIsLivePanelOpen(false)}
                style={{ border: "none", background: "rgba(249,115,22,.1)", color: "#9a2c0f", borderRadius: 999, width: 36, height: 36, cursor: "pointer", fontSize: 18 }}
              >
                ×
              </button>
            </div>

            <div className="vex-live-shell">
              <div className="vex-live-panel">
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                  {[
                    { value: "all", label: "All" },
                    { value: "restaurants", label: "Restaurants" },
                    { value: "beaches", label: "Beaches" },
                    { value: "nightlife", label: "Nightlife" },
                    { value: "nature", label: "Nature" },
                  ].map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setSelectedCategory(filter.value)}
                      style={{
                        border: "1px solid rgba(249,115,22,.2)",
                        background: selectedCategory === filter.value ? "#f97316" : "#fff",
                        color: selectedCategory === filter.value ? "#fff" : "#7c4a12",
                        borderRadius: 999,
                        padding: "7px 12px",
                        cursor: "pointer",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                <div style={{ marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#b45309" }}>
                    {locationStatus === "loading" ? "Finding your location…" : locationStatus === "ready" ? "Live recommendations" : locationStatus === "unsupported" ? "Location unavailable" : locationStatus === "denied" ? "Permission denied" : "Tap to unlock live suggestions"}
                  </div>
                  <button
                    onClick={openLivePanel}
                    style={{ border: "none", background: "linear-gradient(135deg, #f97316, #fbbf24)", color: "#1a0f00", borderRadius: 999, padding: "8px 12px", cursor: "pointer", fontSize: 12, fontWeight: 700 }}
                  >
                    Refresh
                  </button>
                </div>

                {locationStatus === "loading" ? (
                  <div style={{ padding: "18px 16px", borderRadius: 16, background: "rgba(251,191,36,.12)", color: "#7c4a12", fontWeight: 600 }}>
                    Allow location access to see nearby spots sorted by distance and get turn-by-turn directions.
                  </div>
                ) : locationStatus === "unsupported" ? (
                  <div style={{ padding: "18px 16px", borderRadius: 16, background: "rgba(251,191,36,.12)", color: "#7c4a12", fontWeight: 600 }}>
                    This browser does not support geolocation. You can still browse curated nearby destinations below.
                  </div>
                ) : locationStatus === "denied" ? (
                  <div style={{ padding: "18px 16px", borderRadius: 16, background: "rgba(251,191,36,.12)", color: "#7c4a12", fontWeight: 600 }}>
                    Location permission was blocked. You can still explore recommended places around Goa.
                  </div>
                ) : null}

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
                  {nearbyPlaces.map((place) => (
                    <button
                      key={place.id}
                      onClick={() => setSelectedPlace(place)}
                      style={{
                        border: selectedPlace?.id === place.id ? "1px solid rgba(249,115,22,.5)" : "1px solid rgba(233,201,142,.8)",
                        background: selectedPlace?.id === place.id ? "rgba(254,242,199,.95)" : "#fff",
                        borderRadius: 16,
                        padding: "14px 14px",
                        textAlign: "left",
                        cursor: "pointer",
                        boxShadow: selectedPlace?.id === place.id ? "0 8px 28px -10px rgba(249,115,22,.4)" : "none",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
                        <div>
                          <div style={{ fontWeight: 700, color: "#1a1208", marginBottom: 4 }}>{place.name}</div>
                          <div style={{ fontSize: 12, color: "#8b6a3c", lineHeight: 1.5 }}>{place.description}</div>
                        </div>
                        {userLocation && (
                          <div style={{ fontSize: 12, color: "#b45309", fontWeight: 700, whiteSpace: "nowrap" }}>
                            {formatDistance(place.distance)}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="vex-live-map">
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#b45309" }}>Map view</div>
                  <div style={{ fontSize: 14, color: "#5b4632", marginTop: 4 }}>
                    {selectedPlace ? `${selectedPlace.name} • ${selectedPlace.address}` : "Choose a place to inspect it on the map"}
                  </div>
                </div>

                <div className="vex-live-map-frame">
                  <MapContainer
                    center={userLocation ? [userLocation.lat, userLocation.lon] : [15.4989, 73.8278]}
                    zoom={userLocation ? 12 : 9}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {userLocation && (
                      <Marker position={[userLocation.lat, userLocation.lon]} icon={markerIcon("#14b8a6")}>
                        <Popup>You are here</Popup>
                      </Marker>
                    )}
                    {nearbyPlaces.map((place) => (
                      <Marker
                        key={place.id}
                        position={place.coords}
                        icon={markerIcon(place.category === "restaurants" ? "#f97316" : place.category === "nightlife" ? "#a855f7" : place.category === "nature" ? "#0f766e" : "#eab308")}
                        eventHandlers={{ click: () => setSelectedPlace(place) }}
                      >
                        <Popup>
                          <div style={{ minWidth: 180 }}>
                            <strong>{place.name}</strong>
                            <div style={{ fontSize: 12, color: "#5b4632", marginTop: 4 }}>{place.address}</div>
                            {userLocation && (
                              <div style={{ fontSize: 12, color: "#b45309", marginTop: 6, fontWeight: 700 }}>
                                {formatDistance(place.distance)} away
                              </div>
                            )}
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>

                {selectedPlace && (
                  <div style={{ marginTop: 12, padding: "14px 14px", borderRadius: 16, background: "rgba(249,115,22,.08)", border: "1px solid rgba(249,115,22,.16)" }}>
                    <div style={{ fontWeight: 700, color: "#1a1208" }}>{selectedPlace.name}</div>
                    <div style={{ fontSize: 13, color: "#5b4632", marginTop: 4 }}>{selectedPlace.address}</div>
                    <div style={{ fontSize: 13, color: "#5b4632", marginTop: 6 }}>{selectedPlace.description}</div>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${selectedPlace.coords[0]},${selectedPlace.coords[1]}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-block", marginTop: 10, color: "#b45309", fontWeight: 700 }}
                    >
                      Open directions ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== PREMIUM WEEKEND EXPERIENCE (DA LUNA) ===== */}
      <section style={{ background: "#fffaf0", padding: "20px 0 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div className="vex-eyebrow" style={{ marginBottom: 8 }}>★ Featured Partner</div>
            <h2 className="vex-section-title" style={{ marginBottom: 8 }}>Weekend Experience at Da Luna</h2>
            <p style={{ marginTop: 10, fontSize: 14, color: "#7a5a2a", maxWidth: 680, margin: "0 auto" }}>
              A refined evening of music, indulgence and elevated hospitality designed for the perfect Goa weekend.
            </p>
          </div>

          <div style={{
            position: "relative",
            borderRadius: 28,
            overflow: "hidden",
            border: "1px solid rgba(234,179,8,.4)",
            background: "linear-gradient(135deg, #140f07 0%, #24180c 45%, #0f0b05 100%)",
            boxShadow: "0 30px 80px -24px rgba(80,45,10,.55)",
            padding: "30px 28px",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top left, rgba(251,191,36,.16), transparent 34%), radial-gradient(circle at bottom right, rgba(180,83,9,.16), transparent 36%), linear-gradient(120deg, rgba(255,255,255,.03), transparent 70%)" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 24 }}>
                <div className="vex-font-display" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#fef3c7", letterSpacing: "0.06em", fontWeight: 700 }}>
                  DA LUNA GOA
                </div>
                <div className="vex-eyebrow" style={{ color: "#fbbf24", marginTop: 8, letterSpacing: "0.3em" }}>
                  WEEKEND EXPERIENCE
                </div>
                <div style={{ marginTop: 12, color: "#f7e2ba", fontSize: 15, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><FaClock /> Friday • Saturday • Sunday</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><FaClock /> Happy Hours 6:00 PM – 9:00 PM</span>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.95fr", gap: 16, alignItems: "stretch" }}>
                <div style={{
                  borderRadius: 22,
                  padding: "22px 20px",
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(251,191,36,.2)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,.04)",
                }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", color: "#111", background: "linear-gradient(135deg, #f59e0b, #fde68a)", marginBottom: 12 }}>
                    <FaBeer size={18} />
                  </div>
                  <div className="vex-font-display" style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Beer Bucket</div>
                  <div style={{ color: "#f7e2ba", fontSize: 14, lineHeight: 1.6 }}>Buy 1 Bucket</div>
                  <div style={{ color: "#fbbf24", fontWeight: 700, fontSize: 15, marginTop: 4 }}>Get 1 FREE</div>
                </div>

                <div style={{
                  borderRadius: 22,
                  padding: "22px 20px",
                  background: "linear-gradient(145deg, rgba(255,255,255,.07) 0%, rgba(120,53,15,.16) 100%)",
                  border: "1px solid rgba(251,191,36,.24)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,.06), 0 14px 30px -18px rgba(0,0,0,.7)",
                }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", color: "#111", background: "linear-gradient(135deg, #fbbf24, #fde68a)", marginBottom: 12 }}>
                    <FaGift size={18} />
                  </div>
                  <div className="vex-font-display" style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Premium Sheesha</div>
                  <div style={{ color: "#f7e2ba", fontSize: 14, lineHeight: 1.6 }}>Book 2</div>
                  <div style={{ color: "#fbbf24", fontWeight: 700, fontSize: 15, marginTop: 4 }}>Get 25% OFF</div>
                </div>

                <div style={{
                  borderRadius: 22,
                  padding: "22px 20px",
                  background: "linear-gradient(145deg, rgba(255,255,255,.08) 0%, rgba(120,53,15,.2) 100%)",
                  border: "1px solid rgba(251,191,36,.24)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,.06), 0 14px 30px -18px rgba(0,0,0,.7)",
                  gridColumn: "1 / -1",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                }}>
                  <div style={{ width: 50, height: 50, minWidth: 50, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", color: "#111", background: "linear-gradient(135deg, #f97316, #fde68a)" }}>
                    <FaPizzaSlice size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="vex-font-display" style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Pizza Special</div>
                    <div style={{ color: "#f7e2ba", fontSize: 14, lineHeight: 1.6 }}>Order Any Pizza</div>
                    <div style={{ color: "#fbbf24", fontWeight: 700, fontSize: 15, marginTop: 4 }}>Get 1 Beer FREE</div>
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginTop: 18 }}>
                {[
                  { icon: <FaMusic />, label: "Live Music" },
                  { icon: <FaMicrophoneAlt />, label: "Karaoke Night" },
                  { icon: <FaBeer />, label: "DJ Experience" },
                ].map((item) => (
                  <div key={item.label} style={{ borderRadius: 16, padding: "12px 14px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(251,191,36,.16)", color: "#f7e2ba", display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                    <span style={{ color: "#fbbf24" }}>{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24, textAlign: "center" }}>
                <a
                  href="https://www.google.com/search?q=Da+Luna+Goa"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "12px 20px",
                    borderRadius: 999,
                    background: "linear-gradient(135deg, #c77d13 0%, #fbbf24 45%, #fde68a 100%)",
                    color: "#1b1208",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 12px 30px -10px rgba(199,125,19,.45)",
                  }}
                >
                  <FaPhoneAlt /> Reserve Your Table
                </a>
                <div style={{ marginTop: 10, color: "#d7c08b", fontSize: 13 }}>
                  Seats are limited. Book early to avoid disappointment.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vex-divider-thin" style={{ maxWidth: 600, margin: "40px auto 0" }} />
      </section>

      {/* ===== TRENDING ===== */}
      <section ref={trendingRef} style={{ background: "#fffaf0", padding: "20px 0 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: 26 }}>
            <div className="vex-eyebrow" style={{ marginBottom: 6 }}>Curated By Locals</div>
            <h2 className="vex-section-title">Trending in Goa</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}>
            {trending.map((place, i) => (
              <Link
                key={i}
                to={place.path}
                className="vex-trending-item vex-card-hover"
                style={{
                  textDecoration: "none", color: "inherit",
                  borderRadius: 20, overflow: "hidden",
                  background: "#fff",
                  border: "1px solid rgba(180,140,60,.18)",
                  boxShadow: "0 6px 24px -10px rgba(120,80,20,.18)",
                  animationDelay: `${i * 0.08}s`,
                  display: "block",
                }}
              >
                <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src={place.img}
                    alt={place.name}
                    loading="lazy"
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      transition: "transform .6s cubic-bezier(.2,.7,.2,1)",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,.55) 100%)",
                  }} />
                  <span className="vex-badge" style={{ position: "absolute", top: 12, left: 12 }}>
                    {place.tag}
                  </span>
                </div>
                <div style={{ padding: "14px 16px 16px" }}>
                  <h3 className="vex-font-display" style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>{place.name}</h3>
                  <p style={{ fontSize: 13, color: "#6b5128", margin: "4px 0 8px", lineHeight: 1.5 }}>{place.desc}</p>
                  <p style={{ fontSize: 11.5, color: "#9a7a3a", margin: 0, letterSpacing: ".02em" }}>📍 {place.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="vex-divider-thin" style={{ maxWidth: 600, margin: "50px auto 0" }} />
      </section>

      {/* ===== MUST VISIT ===== */}
      <section style={{ background: "#fffaf0", padding: "20px 0 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: 22 }}>
            <div className="vex-eyebrow" style={{ marginBottom: 6 }}>Editor's Pick</div>
            <h2 className="vex-section-title">Must Visit</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {restaurants.map((restaurant) => {
              const descriptions = {
                "Da Luna Restaurant": "Italian vibes + perfect sunset dining",
                "Elephant Beach Cafe & Bar": "Peaceful vibes + Fresh Food",
                "Thalassa": "Greek food + nightlife experience",
                "Piccola Roma Pizza": "Pizza cravings + cozy Vagator dining",
                "Sakana Japanese Restaurant": "Authentic Japanese flavors + relaxed Anjuna dining",
              }
              const logos = {
                "Da Luna Restaurant": daLunaLogo,
                "Elephant Beach Cafe & Bar": elephantBeachLogo,
                "Thalassa": "https://www.acroncandolimresortgoa.com/explore-goa/local-cuisine-in-goa/thalassa-goa/images/thalassa-goa.jpg",
                "Piccola Roma Pizza": piccoloLogo,
                "Sakana Japanese Restaurant": sakanaLogo,
              }
              const isLuna = restaurant.name === "Da Luna Restaurant"
              return (
                <div
                  key={restaurant.id}
                  className="vex-card-hover"
                  onClick={() => {
                    trackRestaurantClick(restaurant.id, restaurant.name)
                    navigate(`/restaurant/${restaurant.id}`)
                  }}
                  style={{
                    background: isLuna
                      ? "linear-gradient(135deg, #fffbeb 0%, #fff 60%)"
                      : "white",
                    borderRadius: 18,
                    padding: "16px 18px",
                    border: isLuna
                      ? "1px solid rgba(251,191,36,.55)"
                      : "1px solid rgba(180,140,60,.2)",
                    display: "flex", alignItems: "center", gap: 16,
                    boxShadow: isLuna
                      ? "0 10px 30px -12px rgba(251,191,36,.45)"
                      : "0 4px 18px -8px rgba(120,80,20,.15)",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <div className={isLuna ? "vex-luna-ring" : ""} style={{ flexShrink: 0 }}>
                    <img
                      src={logos[restaurant.name]}
                      alt={restaurant.name}
                      style={{
                        width: 60, height: 60, borderRadius: 999,
                        objectFit: "cover", display: "block", background: "#fff",
                      }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <h3 className="vex-font-display" style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{restaurant.name}</h3>
                      {isLuna && <span className="vex-badge">Featured</span>}
                    </div>
                    <p style={{ fontSize: 12.5, color: "#6b5128", margin: "4px 0 0" }}>{descriptions[restaurant.name]}</p>
                  </div>
                  <div style={{ color: "#b45309", fontSize: 22, fontWeight: 300 }}>›</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCES ===== */}
      <section style={{ background: "#fffaf0", padding: "30px 0 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: 22 }}>
            <div className="vex-eyebrow" style={{ marginBottom: 6 }}>Unforgettable Moments</div>
            <h2 className="vex-section-title">Top Experiences</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 14,
          }}>
            {experiences.map((item, i) => (
              <div
                key={i}
                className="vex-exp-card vex-card-hover"
                onClick={() => window.open(item.link, "_blank")}
                style={{
                  background: item.color,
                  borderRadius: 18,
                  padding: "24px 14px",
                  textAlign: "center",
                  border: "1px solid rgba(180,140,60,.18)",
                  cursor: "pointer",
                  boxShadow: "0 4px 16px -6px rgba(120,80,20,.12)",
                }}
              >
                <div style={{ fontSize: 34, marginBottom: 6 }}>{item.icon}</div>
                <div className="vex-font-display" style={{ fontSize: 14, fontWeight: 700, color: "#1a1208" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US — Mario Miranda Goa Style ===== */}
      <section className="mm-section">
        {/* Halftone dot texture */}
        <div className="mm-bg-halftone" />

        {/* Decorative ink blobs */}
        <div className="mm-ink-blob" style={{ width: 320, height: 320, top: -90, right: -90 }} />
        <div className="mm-ink-blob" style={{ width: 220, height: 220, bottom: -70, left: -70 }} />

        {/* Ornamental border frame */}
        <div className="mm-border-frame" />
        <div className="mm-corner tl" />
        <div className="mm-corner tr" />
        <div className="mm-corner bl" />
        <div className="mm-corner br" />

        <div className="mm-inner">
          {/* Top tag */}
          <span className="mm-promise-tag">The Vex Promise</span>

          {/* Eyebrow with rules */}
          <div className="mm-stamp-row">
            <div className="mm-stamp-line" />
            <span className="mm-eyebrow-dark">Goa's #1 Discovery Platform</span>
            <div className="mm-stamp-line" />
          </div>

          {/* Big display heading */}
          <h3 className="mm-heading">
            Why V Exclusive?
          </h3>

          <p className="mm-subheading">No searching. No confusion. Just Experience.</p>

          {/* Ornamental divider */}
          <div className="mm-divider">
            <div className="mm-divider-line" />
            <span style={{ fontSize: 20, lineHeight: 1, color: "#1a1200" }}>✦</span>
            <div className="mm-divider-line" />
          </div>

          <p className="mm-body">
            Instantly discover the best places around you — curated by locals, trusted by thousands of travellers exploring the pearl of the Arabian Sea.
          </p>

          {/* Feature cards */}
          <div className="mm-cards">
            <div className="mm-card">
              <span className="mm-card-icon">📱</span>
              <h3 className="mm-card-title">In-Car QR Experience</h3>
              <p className="mm-card-body">
                Through our in-car QR experience, tourists can instantly explore trusted restaurants, cafés, clubs, beaches, and local businesses without wasting time searching across multiple platforms.
              </p>
            </div>
            <div className="mm-card">
              <span className="mm-card-icon">📍</span>
              <h3 className="mm-card-title">Trusted Partners</h3>
              <p className="mm-card-body">
                We partner with selected venues and brands across Goa to bring useful information directly to our audience — including menus, directions, highlights, and exclusive offers.
              </p>
            </div>
          </div>

          
        </div>
      </section>

 

      {/* ===== GOOGLE REVIEWS ===== */}
      <section style={{ background: "#fffaf0", padding: "20px 20px 70px" }}>
        <div style={{
          maxWidth: 720, margin: "0 auto", textAlign: "center",
          background: "linear-gradient(135deg,#fff 0%, #fffaf0 100%)",
          borderRadius: 24, padding: "36px 24px",
          border: "1px solid rgba(180,140,60,.2)",
          boxShadow: "0 14px 40px -20px rgba(120,80,20,.25)",
        }}>
          <div className="vex-eyebrow" style={{ marginBottom: 10 }}>We'd Love to Hear from You</div>
          <h2 className="vex-section-title" style={{ fontSize: "1.5rem" }}>⭐ Share Your Experience</h2>
          <p style={{ marginTop: 22, fontSize: 14, color: "#6b5128", lineHeight: 1.7 }}>
            Help us improve! Share your V Exclusive experience and let fellow travelers know what makes your Goa journey special.
          </p>
          <button
            onClick={() => window.open("https://www.google.com/search?q=v+exclusive+mobile+ad+solution+goa&oq=V+Exclusive+mobile+ad+solution+goa&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyDQgBEAAYhgMYgAQYigUyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyCggFEAAYgAQYogQyBwgGEAAY7wXSAQg3NTE2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x6a6a96b74749d209:0xcaf71d01236049f5,3,,,,", "_blank")}
            style={{
              marginTop: 22,
              background: "linear-gradient(135deg, #4285f4 0%, #34a853 25%, #fbbc04 50%, #ea4335 100%)",
              color: "white", border: "none", borderRadius: 999,
              padding: "13px 28px", fontSize: 14, fontWeight: 700,
              cursor: "pointer", boxShadow: "0 10px 28px -8px rgba(0,0,0,.25)",
              transition: "transform .25s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px) scale(1.03)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0) scale(1)"}
          >
            ✍️ Write a Review on Google
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        background: "linear-gradient(180deg, #1a0f00 0%, #0d0700 100%)",
        color: "#fff", padding: "50px 20px 30px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 50% 0%, rgba(251,191,36,.12), transparent 55%)",
        }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div className="vex-luna-ring vex-float" style={{ width: 60, height: 60, margin: "0 auto 16px" }}>
            <img src={logo} alt="V Exclusive Goa" style={{ width: "100%", height: "100%", borderRadius: 999, objectFit: "cover", background: "#0f0802" }} />
          </div>
          <h3 className="vex-font-display" style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>
            <span className="vex-hero-title">VExclusive Goa</span>
          </h3>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", marginTop: 6, fontStyle: "italic" }} className="vex-font-serif">
            Your personal Goa guide
          </p>

          <div style={{
            marginTop: 28,
            display: "flex", flexDirection: "column", gap: 10,
            alignItems: "center",
          }}>
            {[
              { icon: <FaPhoneAlt />, text: "+91 91583 06507" },
              { icon: <FaEnvelope />, text: "vkyrental@gmail.com" },
              { icon: <FaMapMarkerAlt />, text: "Panaji, Goa" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                fontSize: 13.5, color: "rgba(255,255,255,.78)",
              }}>
                <span style={{ color: "#fbbf24", fontSize: 13 }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 26, display: "flex", justifyContent: "center", gap: 12 }}>
            {[{ icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/vexclusivegoa/" }].map((s, i) =>
              s.link ? (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vex-social-btn"
                  aria-label={s.label}
                  style={{
                    width: 44, height: 44, borderRadius: 999,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.15)",
                    color: "#fbbf24", fontSize: 16, textDecoration: "none",
                  }}
                >{s.icon}</a>
              ) : (
                <span key={i} className="vex-social-btn" style={{
                  width: 44, height: 44, borderRadius: 999,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.15)",
                  color: "#fbbf24", fontSize: 16,
                }}>{s.icon}</span>
              )
            )}
          </div>

          <div className="vex-divider-thin" style={{ margin: "32px auto 18px", maxWidth: 320, opacity: .5 }} />
          <div style={{ fontSize: 11.5, letterSpacing: ".15em", color: "rgba(255,255,255,.5)", textTransform: "uppercase" }}>
            © 2026 VExclusive Goa
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home