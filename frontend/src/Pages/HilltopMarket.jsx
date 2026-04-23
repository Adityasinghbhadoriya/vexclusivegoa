import React from "react"
import { Link } from "react-router-dom"
import hilltopMarketImage from "../assets/Hiltopmarket.jpg"

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

const HilltopMarket = () => {
  return (
    <div className="vex-font-body w-full overflow-x-hidden bg-white text-black">
      <style>{globalStyle}</style>

      {/* Hero Image */}
      <div className="relative w-full h-120 rounded-b-4xl overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={hilltopMarketImage}
          alt="Hilltop Market"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

        <div className="relative z-10 flex flex-col mt-25 min-h-screen px-6 py-12 text-center">
          <h1
            className="vex-font-display vex-hero-title"
            style={{ fontSize: "clamp(2.4rem, 12vw, 4rem)" }}
          >
            Hilltop Market
          </h1>
          <h2
            className="text-white"
            style={{ marginTop: 12, fontSize: "1.2rem", fontWeight: 500 }}
          >
            Goa’s Night Bazaar Above the Chaos
          </h2>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: "#fefce8", padding: "40px 24px" }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            If you’ve been around North Goa long enough, someone’s definitely told you:
            “Sunday ko Hilltop jaana, bro… full vibe milega.”
            They’re talking about the famous Hilltop Market—a place that’s not just a market, not just a party… but a proper Goan Sunday ritual.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>🎶 Not Your Regular Market</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Hilltop Market isn’t like your usual flea markets. It sits up in Vagator, surrounded by trees, open sky, and that raw Goa energy.
            By evening, the place slowly comes alive—music starts building, lights come on, and stalls begin buzzing.
            You’ll find: Boho clothes & festival outfits, handmade jewelry, dreamcatchers, crystals, art pieces, street food from all over.
            But honestly, people don’t just come here to shop. They come for the vibe.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>🔊 The Real Scene – Music & Energy</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Right next to the market is the legendary Hilltop Goa, known for its psychedelic trance parties.
            So while you’re walking through the stalls, you’ll hear: Deep bass, psytrance beats, live DJ sets in the background.
            It’s like shopping inside a music festival.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>🌅 When to Go (Local Timing)</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Hilltop Market usually kicks off on Sundays (especially during season).
            Best time? 5 PM onwards → Chill browsing, 7 PM to late → Full power vibe.
            After sunset, the lights, music, and crowd hit differently.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>👀 What Locals Will Tell You</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            We don’t go there just to “buy stuff.” We go because: It’s a good pre-party scene, you meet interesting people from all over the world, the energy feels free, creative, and a little wild.
            It’s one of those places where nobody cares who you are—just enjoy.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>⚠️ Small Heads-Up</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            It gets crowded during peak season, prices can be touristy (don’t hesitate to bargain a bit), keep your belongings safe, and yeah… wear something comfortable. You’ll end up walking, dancing, and chilling all in one go.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>💛 Why Hilltop Market is Special</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Goa has many markets… But Hilltop is different. It’s not about buying things—it’s about feeling something.
            Music in the air, lights in the trees, strangers becoming friends for a night… That’s Hilltop.
          </p>

          <div style={{ background: "#fef3c7", padding: 20, borderRadius: 12, marginTop: 30 }}>
            <h4 style={{ fontWeight: 600, marginBottom: 10 }}>📍 Quick Local Summary</h4>
            <p><strong>Location:</strong> Vagator</p>
            <p><strong>Day:</strong> Mostly Sundays</p>
            <p><strong>Vibe:</strong> Night market + party energy</p>
            <p><strong>Best for:</strong> Shopping, music, meeting people</p>
            <p style={{ marginTop: 10 }}>
              If you’re scanning this on your way there… Don’t rush. Walk slow, feel the music, and just go with the flow.
              That’s how Hilltop is meant to be experienced 🔊🌴
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div style={{ background: "#fbbf24", padding: "20px 24px", textAlign: "center" }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#000', fontWeight: 600 }}>← Back to Home</Link>
      </div>
    </div>
  )
}

export default HilltopMarket