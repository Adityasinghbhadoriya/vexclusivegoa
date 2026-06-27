import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import parraRoadImage from "../assets/parra-road.jpg"

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
    background: linear-gradient(90deg, #fbbf24 0%, #f97316 40%, #fbbf24 80%, #f97316 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
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

const highlights = [
  {
    icon: "🚗",
    title: "From Shortcut to Instagram Star",
    text: "Parra Road started as a practical route between Anjuna and Mapusa, then grew into one of Goa’s most photographed drives after its cinematic moment on screen.",
  },
  {
    icon: "🌅",
    title: "Best Time to Experience It",
    text: "Early morning is the real magic — soft sunlight through the palms, little traffic and the kind of calm that feels almost cinematic.",
  },
  {
    icon: "☕",
    title: "What Locals Actually Do Here",
    text: "We use it for market runs, late-night rides and quick drives to clear the head. It is a road we live around, not just a place we visit.",
  },
  {
    icon: "⚠️",
    title: "One Thing You Should Know",
    text: "It is still a working road, not a photo set. Respect the village vibe, don’t block traffic and let locals pass through comfortably.",
  },
  {
    icon: "💛",
    title: "Why It Feels Special",
    text: "Goa isn’t just beaches and parties. Sometimes it is a quiet road, coconut trees and a moment of peace in between.",
  },
]

const ParraRoad = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="vex-font-body w-full overflow-x-hidden bg-[#fcf6e8] text-black">
      <style>{globalStyle}</style>

      <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover" src={parraRoadImage} alt="Parra Road" />
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/45 to-[#1b1408]/90" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 py-12 text-center">
          <div className="max-w-3xl">
            <p className="mb-4 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-[#fde68a]">
              Parra • Scenic Drive
            </p>
            <h1 className="vex-font-display vex-hero-title" style={{ fontSize: "clamp(2.6rem, 9vw, 4.4rem)" }}>
              Parra Road
            </h1>
            <h2 className="mt-4 text-lg font-medium text-white/90 sm:text-xl">Goa’s Most Photographed Shortcut</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              What starts as a shortcut soon becomes a memory — a coconut-lined stretch of Goa that feels both everyday and iconic.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-[28px] border border-[#f1dfb2] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">Coconut Lined</span>
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">Photogenic</span>
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">Local Route</span>
              </div>
              <h3 className="vex-section-title" style={{ fontSize: "1.35rem", marginBottom: 12 }}>A quiet road that became iconic</h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4b4b4b" }}>
                Parra Road is part of everyday life in North Goa — a calm village stretch that still feels slow, local and untouched even when the rest of the region is buzzing.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f1dfb2] bg-[#fff7e6] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              <h4 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 14 }}>Quick local snapshot</h4>
              <div className="space-y-3 text-sm text-[#4b4b4b]">
                <p><strong>Location:</strong> Between Anjuna & Mapusa</p>
                <p><strong>Famous for:</strong> Coconut tree-lined road</p>
                <p><strong>Best time:</strong> Early morning</p>
                <p><strong>Vibe:</strong> Calm, scenic, local</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-[#efe0b8] bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff2c8] text-2xl">{item.icon}</div>
                <h3 className="vex-section-title" style={{ fontSize: "1.15rem", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#5b5b5b" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-[#edd9a9] bg-[#fffdf7] p-8 text-center shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
          <h4 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 10 }}>Why Parra Road feels special</h4>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5b5b5b", maxWidth: 760, margin: "0 auto" }}>
            Take a second, look outside and you will see the real Goa — not just the famous spots, but the quiet roads that still hold the everyday soul of the place.
          </p>
          <div className="mt-6">
            <Link to="/" style={{ textDecoration: "none", color: "#000", fontWeight: 700 }}>← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParraRoad