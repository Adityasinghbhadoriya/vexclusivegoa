import React, { useEffect } from "react"
import { Link } from "react-router-dom"

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

  .vex-font-display { font-family: 'Playfair Display', Georgia, serif; }
  .vex-font-body    { font-family: 'DM Sans', sans-serif; }

  .vex-hero-title {
    background: linear-gradient(90deg, #fef3c7 0%, #fde68a 35%, #ffffff 70%, #d1fae5 100%);
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
    background: #0f766e;
    border-radius: 2px;
  }
`

const highlights = [
  {
    icon: "🌊",
    title: "Quiet coastline",
    text: "Cabo de Rama Beach offers a peaceful stretch of shoreline away from Goa’s busier beach crowds, giving you room to slow down and enjoy the sea.",
  },
  {
    icon: "🏰",
    title: "Historic fort nearby",
    text: "The nearby Cabo de Rama Fort adds the charm of history to your beach visit, making it ideal for a combination of nature and heritage.",
  },
  {
    icon: "🌅",
    title: "Golden sunsets",
    text: "As evening arrives, the cliffs, water and sky transform into one of the most scenic sunset experiences in South Goa.",
  },
  {
    icon: "📸",
    title: "Photographer’s delight",
    text: "The dramatic coastline, sea views and shifting light create beautiful photo opportunities throughout the day.",
  },
  {
    icon: "🚶",
    title: "Perfect for a slow walk",
    text: "Enjoy a peaceful coastal stroll and take in the natural landscape at your own pace.",
  },
  {
    icon: "💛",
    title: "A quieter side of Goa",
    text: "Unlike the louder beach hotspots, Cabo de Rama invites you to appreciate Goa’s landscape, silence and sea breeze.",
  },
]

const CaboDeRamaBeach = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="vex-font-body w-full overflow-x-hidden bg-[#f7fbf8] text-black">
      <style>{globalStyle}</style>

      <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80" alt="Cabo de Rama Beach" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/45 to-[#052e2b]/90" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 py-12 text-center">
          <div className="max-w-3xl">
            <p className="mb-4 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-[#d1fae5]">
              South Goa • Scenic Escape
            </p>
            <h1 className="vex-font-display vex-hero-title" style={{ fontSize: "clamp(2.4rem, 7vw, 4rem)" }}>
              Cabo de Rama Beach
            </h1>
            <h2 className="mt-4 text-lg font-medium text-white/90 sm:text-xl">A quiet escape beneath an ancient fort</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Tucked along South Goa’s coastline, Cabo de Rama Beach is a peaceful retreat where cliffs, sea views and golden sunsets create a truly memorable setting.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[28px] border border-[#b6d9c8] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#ecfdf5] px-3 py-1 text-sm font-medium text-[#0f766e]">Scenic Coastline</span>
                <span className="rounded-full bg-[#ecfdf5] px-3 py-1 text-sm font-medium text-[#0f766e]">Quiet Beach</span>
                <span className="rounded-full bg-[#ecfdf5] px-3 py-1 text-sm font-medium text-[#0f766e]">Historic Fort</span>
              </div>
              <h3 className="vex-section-title" style={{ fontSize: "1.32rem", marginBottom: 12 }}>A beach away from the crowds</h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4b4b4b" }}>
                Cabo de Rama Beach feels different from Goa’s more popular beaches. Instead of busy shacks and large crowds, you will find a peaceful stretch of coast framed by greenery, cliffs and open sea.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#b6d9c8] bg-[#f0fdf7] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              <h4 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 14 }}>Quick local snapshot</h4>
              <div className="space-y-3 text-sm text-[#4b4b4b]">
                <p><strong>Location:</strong> Cabo de Rama, South Goa</p>
                <p><strong>Famous for:</strong> Scenic coastline, sunsets and peaceful surroundings</p>
                <p><strong>Nearby:</strong> Cabo de Rama Fort</p>
                <p><strong>Best time:</strong> October to March</p>
                <p><strong>Vibe:</strong> Quiet, scenic, laid-back</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-[#c8e7da] bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecfdf5] text-2xl">{item.icon}</div>
                <h3 className="vex-section-title" style={{ fontSize: "1.15rem", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#5b5b5b" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-[#c8e7da] bg-[#fcfffd] p-8 text-center shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
          <h4 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 10 }}>Why Cabo de Rama Beach deserves your visit</h4>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5b5b5b", maxWidth: 760, margin: "0 auto" }}>
            Some beaches are made for crowds, music and activity. Cabo de Rama is better suited to slowing down. Pair a peaceful afternoon by the sea with a visit to the historic fort, stay until the evening light reaches the horizon, and you will experience a quieter, more scenic side of Goa that is easy to remember.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-[24px] border border-[#c8e7da] bg-[#f0fdf7] p-6">
            <h5 className="vex-font-display" style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>
              📍 Find It Easily
            </h5>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5b5b5b", marginBottom: 14 }}>
              Ready to explore? Open the location in Google Maps and start your journey with turn-by-turn directions.
            </p>
            <a
              href="https://maps.app.goo.gl/B9WgGtMBBzccScjR8?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 18px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)",
                color: "#052e2b",
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

export default CaboDeRamaBeach
