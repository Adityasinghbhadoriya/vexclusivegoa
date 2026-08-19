import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import fortAguadaMain from "../assets/Fort2.jpeg"

if (!document.getElementById("vex-fonts")) {
  const link = document.createElement("link")
  link.id = "vex-fonts"
  link.rel = "stylesheet"
  link.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@400;500;600;700&display=swap"
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

  .vex-font-display { font-family: 'Playfair Display', Georgia, serif; }
  .vex-font-body    { font-family: 'DM Sans', sans-serif; }

  .vex-hero-title {
    background: linear-gradient(90deg, #fef3c7 0%, #fde68a 35%, #ffffff 70%, #f7d98b 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
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
    width: 42px;
    height: 3px;
    background: #f97316;
    border-radius: 2px;
  }
`

const highlights = [
  {
    icon: "🏛️",
    title: "Historic stronghold",
    text: "Built by the Portuguese in 1612, Fort Aguada served as a key defensive landmark guarding Goa’s coastline and river access.",
  },
  {
    icon: "🌊",
    title: "Strategic seafront",
    text: "Its hilltop position overlooking the Arabian Sea gave it a powerful military advantage, while allowing clear views of approaching ships.",
  },
  {
    icon: "📸",
    title: "Photography paradise",
    text: "The laterite walls, lighthouse and expansive sea vistas make it one of the most photogenic historic spots in North Goa.",
  },
  {
    icon: "🌅",
    title: "Calm coastal views",
    text: "The fort is especially memorable in the early morning or late afternoon when the light softens and the coastline feels even more dramatic.",
  },
  {
    icon: "🧭",
    title: "A glimpse into Goa’s past",
    text: "From its Portuguese-era architecture to the old lighthouse, the fort gives visitors a clear sense of Goa’s colonial and maritime history.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Ideal for slow sightseeing",
    text: "Whether traveling as a couple, family or solo, Fort Aguada offers a relaxed and rewarding cultural stop without the rush of a bigger tourist hotspot.",
  },
]

const FortAguada = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="vex-font-body w-full overflow-x-hidden bg-[#fffaf0] text-black">
      <style>{globalStyle}</style>

      <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={fortAguadaMain}
          alt="Fort Aguada"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#27170d]/90" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 py-12 text-center">
          <div className="max-w-4xl">
            <p className="mb-4 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-[#f7de9d]">
              North Goa • Historic Landmark
            </p>
            <h1 className="vex-font-display vex-hero-title" style={{ fontSize: "clamp(2.6rem, 8vw, 4.3rem)" }}>
              Fort Aguada
            </h1>
            <h2 className="mt-4 text-lg font-medium text-white/90 sm:text-xl">
              Where history meets the Arabian Sea
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
              Standing on a hill overlooking the Arabian Sea, Fort Aguada is one of Goa’s most recognizable historic landmarks, blending Portuguese military history with panoramic coastal beauty.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[28px] border border-[#f1dfb2] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">Historic Fort</span>
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">Lighthouse</span>
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">Sea Views</span>
              </div>
              <h3 className="vex-section-title" style={{ fontSize: "1.32rem", marginBottom: 12 }}>A fortress built to protect Goa</h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4b4b4b" }}>
                Constructed by the Portuguese in 1612, Fort Aguada was designed to defend Goa’s coastline and guard access to the Mandovi River. Its strategic hilltop location made it one of the most important maritime strongholds in the region.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f1dfb2] bg-[#fff7e6] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              <h4 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 14 }}>Quick local snapshot</h4>
              <div className="space-y-3 text-sm text-[#4b4b4b]">
                <p><strong>Location:</strong> Sinquerim, North Goa</p>
                <p><strong>Built:</strong> 1612</p>
                <p><strong>Famous for:</strong> Historic fort, lighthouse, sea views</p>
                <p><strong>Architecture:</strong> Portuguese military architecture</p>
                <p><strong>Best time:</strong> October to March</p>
                <p><strong>Vibe:</strong> Historic, scenic, peaceful</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[#efe0b8] bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff2c8] text-2xl">
                  {item.icon}
                </div>
                <h3 className="vex-section-title" style={{ fontSize: "1.15rem", marginBottom: 10 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#5b5b5b" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-[#edd9a9] bg-[#fffdf7] p-8 text-center shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
          <h4 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 10 }}>Why Fort Aguada deserves your visit</h4>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5b5b5b", maxWidth: 760, margin: "0 auto" }}>
            If you want to experience a different side of Goa beyond beaches and nightlife, Fort Aguada is the perfect place to start. Come for the history, stay for the architecture and panoramic sea views, and leave with a glimpse into the centuries-old story of Goa’s coastline.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-[24px] border border-[#f1dfb2] bg-[#fff7e6] p-6">
            <h5 className="vex-font-display" style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>
              📍 Find It Easily
            </h5>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5b5b5b", marginBottom: 14 }}>
              Opening hours are usually around 9:30 AM to 6:00 PM, and the site is best explored in the cooler parts of the day.
            </p>
            <a
              href="https://share.google/kbx6rnLwRcLblr9e9"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 18px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
                color: "#1a1208",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 12px 28px -12px rgba(249,115,22,.45)",
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

export default FortAguada
