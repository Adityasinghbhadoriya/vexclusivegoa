import React from "react"
import { Link } from "react-router-dom"
import chaporaLaneImage from "../assets/chaporaLane.jpeg"

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

const ChaporaLane = () => {
  return (
    <div className="vex-font-body w-full overflow-x-hidden bg-white text-black">
      <style>{globalStyle}</style>

      {/* Hero Image */}
      <div className="relative w-full h-120 rounded-b-4xl overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={chaporaLaneImage}
          alt="Chapora Lane"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

        <div className="relative z-10 flex flex-col mt-25 min-h-screen px-6 py-12 text-center">
          <h1
            className="vex-font-display vex-hero-title"
            style={{ fontSize: "clamp(2.4rem, 12vw, 4rem)" }}
          >
            Chapora Lane
          </h1>
          <h2
            className="text-white"
            style={{ marginTop: 12, fontSize: "1.2rem", fontWeight: 500 }}
          >
            Where Goa Slows Down
          </h2>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: "#fefce8", padding: "40px 24px" }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Most people come to North Goa chasing beaches and parties… but the real ones? They end up wandering into places like Chapora Lane without even planning it.
            And that’s the beauty of it.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>🚶‍♂️ It’s Not a “Spot” – It’s a Feeling</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Chapora Lane isn’t some big tourist attraction with boards and tickets. It’s just a quiet stretch in the village of Chapora—narrow roads, old houses, greenery, and that peaceful silence you won’t find in Baga or Calangute.
            You’ll see: Portuguese-style homes with faded colors, locals sitting outside, just watching the day go by, dogs napping in the middle of the road like they own it (they do 😄). No rush. No noise. Just Goa being Goa.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>☕ Hidden Cafés & Slow Evenings</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            What makes Chapora Lane interesting now is the mix of old and new. Some really nice cafés and small spots have quietly come up around here—nothing too flashy, just cozy places where: Coffee turns into long conversations, work laptops open… but rarely get used, time kind of disappears.
            It’s the kind of place where you say “just 10 minutes” and end up staying for hours.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>🌅 Best Time to Explore (Local Style)</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Late afternoon to sunset is perfect. Soft golden light hitting the houses, slight breeze coming in from the river side, less heat, more vibe.
            Or go early morning if you want it completely empty—just you and the sound of birds.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>🏰 Close to the Famous, But Still Quiet</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Funny thing is, Chapora Lane is just minutes away from the very popular Chapora Fort. Thousands of people go up to the fort every day… but very few take the time to explore the lanes below.
            That’s why it still feels untouched.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>👀 What Locals Know</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            We don’t come here for “attractions.” We come here when we want a break from everything else. A slow bike ride, a peaceful walk, or just to clear the head.
            It’s one of those places you don’t post about too much… you just enjoy it.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>⚠️ Respect the Vibe</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Chapora is still a living village. So if you’re visiting: Keep noise low, don’t treat it like a party street, respect people’s homes and space.
            That’s the only way places like this stay special.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>💛 Why Chapora Lane Stays With You</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Goa isn’t always loud. Sometimes, it’s just quiet roads, old walls, and time moving a little slower.
            Chapora Lane reminds you of that.
          </p>

          <div style={{ background: "#fef3c7", padding: 20, borderRadius: 12, marginTop: 30 }}>
            <h4 style={{ fontWeight: 600, marginBottom: 10 }}>📍 Quick Local Summary</h4>
            <p><strong>Location:</strong> Chapora village</p>
            <p><strong>Vibe:</strong> Calm, artsy, slow</p>
            <p><strong>Best time:</strong> Evening or early morning</p>
            <p><strong>Best for:</strong> Walks, cafés, peaceful breaks</p>
            <p style={{ marginTop: 10 }}>
              If you ended up here by accident… good. That’s usually how the best parts of Goa are found 🌿
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

export default ChaporaLane