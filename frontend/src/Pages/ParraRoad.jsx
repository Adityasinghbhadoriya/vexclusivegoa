import React from "react"
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

const ParraRoad = () => {
  return (
    <div className="vex-font-body w-full overflow-x-hidden bg-white text-black">
      <style>{globalStyle}</style>

      {/* Hero Image */}
      <div className="relative w-full h-120 rounded-b-4xl overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={parraRoadImage}
          alt="Parra Road"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

        <div className="relative z-10 flex flex-col mt-22 min-h-screen px-6 py-12 text-center">
          <h1
            className="vex-font-display vex-hero-title"
            style={{ fontSize: "clamp(2.4rem, 12vw, 4rem)" }}
          >
            Parra Road
          </h1>
          <h2
            className="text-white"
            style={{ marginTop: 12, fontSize: "1.2rem", fontWeight: 500 }}
          >
            Goa’s Most Photographed Shortcut
          </h2>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: "#fefce8", padding: "40px 24px" }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            If you’ve been around North Goa even for a few days, you’ve definitely heard someone say, “Bro, take the Parra road—it’s faster.”
            That’s how it starts. Not as a tourist spot… but as a shortcut.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Parra Road isn’t just a road—it’s part of our everyday life. Lined with tall coconut trees on both sides, it’s one of those rare places where Goa still feels slow, calm, and untouched… even when the rest of North Goa is buzzing.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>🚗 From Shortcut to Instagram Star</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Before it became famous, Parra Road was just a quiet village stretch connecting Anjuna to Mapusa. Locals used it daily—bikes, scooters, the occasional susegad drive.
            Then came the Bollywood moment. After scenes from Dear Zindagi were shot here, suddenly everyone wanted that same breezy drive.
            Now? You’ll see people stopping their cars in the middle of the road just to click that “perfect coconut road picture.” (Locals still get a little irritated about that 😄)
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>🌅 Best Time to Experience It (Local Tip)</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            If you really want to feel Parra Road—not just see it—go early morning.
            Around 7–9 AM: Soft sunlight coming through the palms, hardly any traffic, cool breeze, proper Goa vibe.
            Evenings are nice too, but mornings… that’s when it still feels like ours.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>☕ What Locals Actually Do Here</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            We don’t come here for photos. We pass through it. Heading to Mapusa market, late-night rides after work, quick peaceful drive to clear the head.
            It’s one of those roads where you slow down without even realizing it.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>⚠️ One Thing You Should Know</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            If you’re visiting: Don’t block the road for photos, watch for local traffic (especially bikes), respect the village vibe.
            It’s still a working road, not a photoshoot set.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>💛 Why Parra Road Feels Special</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Goa isn’t just beaches and parties. Sometimes, it’s just a quiet road, coconut trees, and a moment of peace in between.
            Parra Road is exactly that.
          </p>

          <div style={{ background: "#fef3c7", padding: 20, borderRadius: 12, marginTop: 30 }}>
            <h4 style={{ fontWeight: 600, marginBottom: 10 }}>📍 Quick Local Summary</h4>
            <p><strong>Location:</strong> Between Anjuna & Mapusa</p>
            <p><strong>Famous for:</strong> Coconut tree-lined road</p>
            <p><strong>Best time:</strong> Early morning</p>
            <p><strong>Vibe:</strong> Calm, scenic, local</p>
            <p style={{ marginTop: 10 }}>
              If you’re scanning this while sitting in a cab or rental car—chances are, you’re already on a road like this.
              Take a second, look outside… That’s the real Goa we grew up with 🌴
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

export default ParraRoad