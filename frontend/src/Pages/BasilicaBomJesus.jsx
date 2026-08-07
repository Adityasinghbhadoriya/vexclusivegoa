import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import basilicaImage from "../assets/Basilica Church.webp"

if (!document.getElementById("vex-fonts")) {
  const link = document.createElement("link")
  link.id = "vex-fonts"
  link.rel = "stylesheet"
  link.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@400,500,600&display=swap"
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
    50%      { transform: translateY(8px); }
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
    icon: "⛪",
    title: "A sacred landmark",
    text: "Built in 1605, the Basilica of Bom Jesus stands as one of Goa’s most important heritage monuments and a treasured place of worship.",
  },
  {
    icon: "🙏",
    title: "The relics of St. Francis Xavier",
    text: "The basilica is best known for housing the sacred relics of St. Francis Xavier, drawing visitors from across the world.",
  },
  {
    icon: "🏛️",
    title: "Baroque beauty",
    text: "Its elegant architecture, rich altar work, marble flooring and carved interiors reflect Goa’s deep Portuguese influence.",
  },
  {
    icon: "🌅",
    title: "Best time to visit",
    text: "Morning is ideal for a quiet visit when the church feels calm, bright and most atmospheric.",
  },
  {
    icon: "🕊️",
    title: "A place to slow down",
    text: "The basilica offers visitors a peaceful moment of reflection, history and culture away from Goa’s busier beaches.",
  },
  {
    icon: "💛",
    title: "Why it feels special",
    text: "More than a monument, the basilica tells the story of faith, heritage and the enduring spirit of old Goa.",
  },
]

const BasilicaBomJesus = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="vex-font-body w-full overflow-x-hidden bg-[#fcf6e8] text-black">
      <style>{globalStyle}</style>

      <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover" src={basilicaImage} alt="Basilica of Bom Jesus" />
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/45 to-[#1b1408]/90" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 py-12 text-center">
          <div className="max-w-3xl">
            <p className="mb-4 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-[#fde68a]">
              Old Goa • Heritage
            </p>
            <h1 className="vex-font-display vex-hero-title" style={{ fontSize: "clamp(2.5rem, 8vw, 4.2rem)" }}>
              Basilica of Bom Jesus
            </h1>
            <h2 className="mt-4 text-lg font-medium text-white/90 sm:text-xl">A sacred landmark where Goa’s history lives on</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              One of Goa’s most important historical and spiritual landmarks, the Basilica of Bom Jesus preserves a remarkable chapter of the state’s Portuguese heritage.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-[28px] border border-[#f1dfb2] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">UNESCO Heritage</span>
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">Sacred Relics</span>
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">Historic Site</span>
              </div>
              <h3 className="vex-section-title" style={{ fontSize: "1.35rem", marginBottom: 12 }}>A place where history and spirituality meet</h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4b4b4b" }}>
                Built in 1605, the Basilica of Bom Jesus is one of the oldest surviving churches in India and a shining example of Baroque architecture. It is most famous for housing the sacred relics of St. Francis Xavier, making it a deeply significant landmark for pilgrims and travellers alike.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f1dfb2] bg-[#fff7e6] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              <h4 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 14 }}>Quick local snapshot</h4>
              <div className="space-y-3 text-sm text-[#4b4b4b]">
                <p><strong>Location:</strong> Old Goa</p>
                <p><strong>Completed:</strong> 1605</p>
                <p><strong>Famous for:</strong> Sacred relics of St. Francis Xavier</p>
                <p><strong>UNESCO Status:</strong> Part of the Churches and Convents of Goa</p>
                <p><strong>Vibe:</strong> Peaceful, historic, spiritual</p>
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
          <h4 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 10 }}>Why the Basilica of Bom Jesus deserves your visit</h4>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5b5b5b", maxWidth: 760, margin: "0 auto" }}>
            Some places are beautiful because of how they look. Others become unforgettable because of the stories they preserve. The Basilica of Bom Jesus is both—a timeless landmark where history, architecture and spirituality come together.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-[24px] border border-[#f1dfb2] bg-[#fff7e6] p-6">
            <h5 className="vex-font-display" style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>
              📍 Find It Easily
            </h5>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5b5b5b", marginBottom: 14 }}>
              Ready to explore? Open the location in Google Maps and start your journey with turn-by-turn directions.
            </p>
            <a
              href="https://share.google/qHan0ncnDQWaolHD5"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 18px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
                color: "#1a0f00",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              🗺️ View on Google Maps →
            </a>
          </div>

          <div className="mt-6">
            <Link to="/" style={{ textDecoration: "none", color: "#000", fontWeight: 700 }}>← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasilicaBomJesus
