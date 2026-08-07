import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import mahavirWaterfallImage from "../assets/MahavirWaterfall.webp"

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
    background: linear-gradient(90deg, #ecfccb 0%, #86efac 40%, #fde68a 80%, #4ade80 100%);
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
    width: 44px;
    height: 3px;
    background: #16a34a;
    border-radius: 2px;
  }
`

const highlights = [
  {
    icon: "🌿",
    title: "Goa’s wild frontier",
    text: "Bhagwan Mahavir Wildlife Sanctuary is the largest protected forest in Goa, stretching across the lush Western Ghats.",
  },
  {
    icon: "💧",
    title: "Dudhsagar spectacle",
    text: "The sanctuary is famous for Dudhsagar Waterfalls, one of India’s most dramatic and photographed falls.",
  },
  {
    icon: "🦋",
    title: "Biodiversity rich",
    text: "From deer and gaurs to monkeys, squirrels, and countless bird species, the sanctuary is a haven for wildlife lovers.",
  },
  {
    icon: "🌦️",
    title: "Seasonal magic",
    text: "October to March is ideal for trails and wildlife spotting, while the monsoon brings the forest and falls to life.",
  },
  {
    icon: "🏛️",
    title: "History within the forest",
    text: "The sanctuary also surrounds the Tambdi Surla Mahadev Temple, adding a heritage layer to the natural experience.",
  },
  {
    icon: "🧭",
    title: "Respect the wild",
    text: "Stay on designated paths, avoid disturbing animals, and help preserve the forest by leaving it cleaner than you found it.",
  },
]

const BhagwanMahavirWildlife = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="vex-font-body w-full overflow-x-hidden bg-[#f6fdf2] text-black">
      <style>{globalStyle}</style>

      <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover" src={mahavirWaterfallImage} alt="Bhagwan Mahavir Wildlife Sanctuary" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/45 to-[#082f1d]/90" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 py-12 text-center">
          <div className="max-w-3xl">
            <p className="mb-4 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-[#dcfce7]">
              Mollem • South Goa
            </p>
            <h1 className="vex-font-display vex-hero-title" style={{ fontSize: "clamp(2.4rem, 7vw, 4rem)" }}>
              Wildlife Nature Adventure Forest Escape
            </h1>
            <h2 className="mt-4 text-lg font-medium text-white/90 sm:text-xl">Where Goa’s wild side begins</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Bhagwan Mahavir Wildlife Sanctuary is the largest protected wildlife sanctuary in Goa, offering a completely different experience from the state’s beaches and coastal towns.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[28px] border border-[#b7e0b2] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#ecfdf3] px-3 py-1 text-sm font-medium text-[#166534]">Protected Forest</span>
                <span className="rounded-full bg-[#ecfdf3] px-3 py-1 text-sm font-medium text-[#166534]">Dudhsagar</span>
                <span className="rounded-full bg-[#ecfdf3] px-3 py-1 text-sm font-medium text-[#166534]">Nature Trails</span>
              </div>
              <h3 className="vex-section-title" style={{ fontSize: "1.32rem", marginBottom: 12 }}>Goa’s largest protected forest</h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4b4b4b" }}>
                Located in the foothills of the Western Ghats, Bhagwan Mahavir Wildlife Sanctuary forms part of one of the world’s richest biodiversity hotspots. The sanctuary is home to evergreen forests, rivers, waterfalls and hundreds of species of plants and animals.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#b7e0b2] bg-[#f2fdf1] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              <h4 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 14 }}>Quick local snapshot</h4>
              <div className="space-y-3 text-sm text-[#4b4b4b]">
                <p><strong>Location:</strong> Mollem, South Goa</p>
                <p><strong>Established:</strong> 1969</p>
                <p><strong>Famous for:</strong> Dudhsagar Waterfalls, wildlife and forest trails</p>
                <p><strong>Area:</strong> Around 240 sq. km</p>
                <p><strong>Vibe:</strong> Peaceful, adventurous, nature-filled</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-[#cfe8ce] bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecfdf3] text-2xl">{item.icon}</div>
                <h3 className="vex-section-title" style={{ fontSize: "1.15rem", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#5b5b5b" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-[#cfe8ce] bg-[#fcfffa] p-8 text-center shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
          <h4 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 10 }}>Why Bhagwan Mahavir Wildlife Sanctuary deserves your visit</h4>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5b5b5b", maxWidth: 760, margin: "0 auto" }}>
            Some places invite you to relax, while others inspire you to explore. Bhagwan Mahavir Wildlife Sanctuary does both. From the thunder of Dudhsagar Waterfalls to the peaceful beauty of the Western Ghats, every visit offers a chance to discover the wild heart of Goa.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-[24px] border border-[#cfe8ce] bg-[#f2fdf1] p-6">
            <h5 className="vex-font-display" style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>
              📍 Find It Easily
            </h5>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5b5b5b", marginBottom: 14 }}>
              Ready to explore? Open the location in Google Maps and start your journey with turn-by-turn directions.
            </p>
            <a
              href="https://share.google/UvoKZQiVdMg1kFX46"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 18px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)",
                color: "#052e16",
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

export default BhagwanMahavirWildlife
