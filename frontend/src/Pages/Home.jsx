import React, { useRef, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import CategoryCard from "../Components/CategoryCard"
import { restaurants } from "../Data/restaurant"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa"
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
if (typeof document !== "undefined" && !document.getElementById("vex-fonts")) {
  const link = document.createElement("link")
  link.id = "vex-fonts"
  link.rel = "stylesheet"
  link.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=Cormorant+Garamond:wght@500;600;700&display=swap"
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
            <div className="vex-eyebrow vex-pulse-glow" style={{
              color: "#fff", background: "rgba(251,191,36,.18)",
              padding: "6px 12px", borderRadius: 999, fontSize: 10,
              border: "1px solid rgba(251,191,36,.45)",
            }}>
              ● LIVE
            </div>
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
            <span className="vex-hero-title">Discover Goa</span>
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
          <div className="vex-fade-up" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, animationDelay: ".85s" }}>
            {/* Restaurants */}
            <Link
              to="/restaurants"
              onClick={() => trackCategoryClick("restaurants")}
              className="vex-glass vex-tilt"
              style={{ textDecoration: "none", color: "#fff", borderRadius: 20, padding: 18, display: "block" }}
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
              style={{ textDecoration: "none", color: "#fff", borderRadius: 20, padding: 18, display: "block" }}
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
        </div>

        {/* Curved transition */}
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, zIndex: 5 }}>
          <WaveDivider fill="#fffaf0" />
        </div>
      </section>

      {/* ===== OFFERS SLIDER (DA LUNA — Featured Partner) ===== */}
      <section style={{ background: "#fffaf0", padding: "20px 0 50px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 22 }}>
            <div className="vex-eyebrow" style={{ marginBottom: 8 }}>★ Featured Partner</div>
            <h2 className="vex-section-title" style={{ marginBottom: 4 }}>Exclusive Offers at Da Luna</h2>
            <p style={{ marginTop: 18, fontSize: 13.5, color: "#7a5a2a" }}>
              Hand-picked deals from Goa's most loved Italian sunset spot.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 30px 60px -25px rgba(120,60,0,.35), 0 8px 24px -8px rgba(120,60,0,.15)",
              border: "1px solid rgba(251,191,36,.35)",
              background: "#000",
              userSelect: "none",
              touchAction: "pan-y",
            }}
            onPointerDown={(e) => { dragStartX.current = e.clientX; hasDragged.current = false }}
            onPointerMove={(e) => {
              if (dragStartX.current === null) return
              if (Math.abs(e.clientX - dragStartX.current) > 30) hasDragged.current = true
            }}
            onPointerUp={(e) => {
              if (!hasDragged.current || dragStartX.current === null) { dragStartX.current = null; return }
              const delta = e.clientX - dragStartX.current
              if (delta > 40) prevSlide()
              else if (delta < -40) nextSlide()
              dragStartX.current = null
            }}
            onPointerLeave={() => { dragStartX.current = null }}
          >
            <div style={{
              display: "flex",
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: isAnimating ? "transform .8s cubic-bezier(.2,.7,.2,1)" : "transform .8s cubic-bezier(.2,.7,.2,1)",
            }}>
              {offerImages.map((img, index) => (
                <div key={index} style={{ minWidth: "100%", position: "relative", aspectRatio: "16/9", maxHeight: 360, background: "#000" }}>
                  <img
                    src={img}
                    alt={`Da Luna Offer ${index + 1}`}
                    draggable={false}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,.0) 55%, rgba(0,0,0,.55) 100%)",
                    pointerEvents: "none",
                  }} />
                  <div style={{
                    position: "absolute", top: 14, left: 14,
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                    <span className="vex-badge">DA LUNA</span>
                    <span className="vex-eyebrow" style={{ color: "#fde68a", fontSize: 10 }}>EXCLUSIVE</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow controls */}
            <button
              onClick={prevSlide}
              aria-label="Previous offer"
              style={{
                position: "absolute", top: "50%", left: 10, transform: "translateY(-50%)",
                width: 38, height: 38, borderRadius: 999,
                background: "rgba(0,0,0,.45)", color: "#fff", border: "1px solid rgba(255,255,255,.25)",
                cursor: "pointer", backdropFilter: "blur(6px)", fontSize: 18,
              }}
            >‹</button>
            <button
              onClick={nextSlide}
              aria-label="Next offer"
              style={{
                position: "absolute", top: "50%", right: 10, transform: "translateY(-50%)",
                width: 38, height: 38, borderRadius: 999,
                background: "rgba(0,0,0,.45)", color: "#fff", border: "1px solid rgba(255,255,255,.25)",
                cursor: "pointer", backdropFilter: "blur(6px)", fontSize: 18,
              }}
            >›</button>
          </div>

          {/* Dots indicator */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 18 }}>
            {offerImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { goToSlide(i); restartAutoAdvance() }}
                className="rounded-full focus:outline-none"
                style={{
                  width: currentSlide === i ? 24 : 8, height: 8, borderRadius: 999,
                  background: currentSlide === i
                    ? "linear-gradient(90deg,#f97316,#fbbf24)"
                    : "#fde68a",
                  transition: "all .35s ease",
                  border: "none", cursor: "pointer",
                }}
                aria-label={`Go to offer ${i + 1}`}
              />
            ))}
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
              }
              const logos = {
                "Da Luna Restaurant": daLunaLogo,
                "Elephant Beach Cafe & Bar": elephantBeachLogo,
                "Thalassa": "https://www.acroncandolimresortgoa.com/explore-goa/local-cuisine-in-goa/thalassa-goa/images/thalassa-goa.jpg",
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

      {/* ===== WHY US ===== */}
      <section style={{
        padding: "60px 20px",
        background: "linear-gradient(135deg, #1a0f00 0%, #2a1a08 50%, #1a0f00 100%)",
        color: "#fff", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 50% 0%, rgba(251,191,36,.18), transparent 60%)",
        }} />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <div className="vex-eyebrow" style={{ color: "#fbbf24", marginBottom: 12 }}>The Vex Promise</div>
          <h2 className="vex-font-display" style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: 700, margin: 0 }}>
            <span className="vex-hero-title">✨ Why VExclusive?</span>
          </h2>
          <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,.78)" }}>
            No searching. No confusion. Just scan and instantly discover the best places around you.
          </p>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section style={{ background: "#fffaf0", padding: "60px 20px" }}>
        <div style={{
          maxWidth: 1000, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: 20,
        }}>
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
                borderRadius: 22,
                padding: 26,
                border: "1px solid rgba(180,140,60,.2)",
                boxShadow: "0 8px 28px -14px rgba(120,80,20,.2)",
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: "linear-gradient(135deg, #fbbf24, #f97316)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, marginBottom: 14,
                boxShadow: "0 8px 20px -6px rgba(249,115,22,.45)",
              }}>{f.icon}</div>
              <h3 className="vex-font-display" style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>{f.title}</h3>
              <p style={{ fontSize: 13.5, color: "#6b5128", lineHeight: 1.65, margin: 0 }}>{f.body}</p>
            </div>
          ))}
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
