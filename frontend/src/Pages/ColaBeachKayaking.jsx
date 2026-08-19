import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import colabeach1 from "../assets/Colabeach1.jpeg"

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
    icon: "🛶",
    title: "Paddle Through Nature",
    text: "Glide across Cola’s calm lagoon between coconut palms, greenery and a peaceful South Goa landscape.",
  },
  {
    icon: "🌴",
    title: "Quiet Coastal Escape",
    text: "Away from the busier beaches, Cola gives you a more relaxed and scenic environment for a gentle outdoor adventure.",
  },
  {
    icon: "☀️",
    title: "Best Time to Go",
    text: "The most comfortable window is between October and March, with early mornings and late afternoons offering the best light and calm conditions.",
  },
  {
    icon: "💰",
    title: "Accessible Cost",
    text: "Kayaking here often starts around ₹499 per person, depending on the operator, duration and package selected.",
  },
]

const ColaBeachKayaking = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="vex-font-body w-full overflow-x-hidden bg-[#fffaf0] text-black">
      <style>{globalStyle}</style>

      <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={colabeach1}
          alt="Cola Beach Kayaking"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#1b1408]/90" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 py-12 text-center">
          <div className="max-w-4xl">
            <p className="mb-4 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-[#fde68a]">
              South Goa • Kayaking
            </p>
            <h1 className="vex-font-display vex-hero-title" style={{ fontSize: "clamp(2.7rem, 9vw, 4.8rem)" }}>
              Cola Beach Kayaking
            </h1>
            <h2 className="mt-4 text-lg font-medium text-white/90 sm:text-xl">
              A peaceful adventure in Goa’s quieter side
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
              Glide through a natural lagoon surrounded by coconut palms and lush greenery, taking in the calm scenery and slow rhythm of South Goa.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[28px] border border-[#f1dfb2] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">Nature Escape</span>
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">Scenic Waters</span>
                <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-medium text-[#8a5a00]">Calm Vibes</span>
              </div>
              <h3 className="vex-section-title" style={{ fontSize: "1.32rem", marginBottom: 12 }}>A beachside adventure with a slower rhythm</h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4b4b4b" }}>
                Cola Beach is known for its peaceful lagoon, green surroundings and relaxed South Goa energy. Kayaking lets you move through that beauty at a gentler pace, soaking in the coast with a sense of calm that feels easy to stay in.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f1dfb2] bg-[#fff7e6] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              <h4 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 14 }}>Quick local snapshot</h4>
              <div className="space-y-3 text-sm text-[#4b4b4b]">
                <p><strong>Location:</strong> Cola Beach, South Goa</p>
                <p><strong>Activity:</strong> Kayaking</p>
                <p><strong>Best time:</strong> October to March</p>
                <p><strong>Typical duration:</strong> 30–60 minutes</p>
                <p><strong>Approx. cost:</strong> From ₹499 per person</p>
                <p><strong>Vibe:</strong> Quiet, scenic, relaxing</p>
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
          <h4 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 10 }}>Why Cola Beach deserves a spot in your Goa plan</h4>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5b5b5b", maxWidth: 760, margin: "0 auto" }}>
            If you want a more peaceful and scenic Goa experience, kayaking at Cola is a beautiful choice. It is simple, relaxing and ideal for couples, families, solo travelers and anyone who enjoys the outdoors at their own pace.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-[24px] border border-[#f1dfb2] bg-[#fff7e6] p-6">
            <h5 className="vex-font-display" style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>
              📍 Find It Easily
            </h5>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5b5b5b", marginBottom: 14 }}>
              Ready to explore? Open the location in Google Maps and start your journey with turn-by-turn directions.
            </p>
            <a
              href="https://share.google/v5XrhxpwoX6hRBF4Q"
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

export default ColaBeachKayaking
