import React from "react"
import { Link } from "react-router-dom"

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

const MandremBeach = () => {
  return (
    <div className="vex-font-body w-full overflow-x-hidden bg-yellow-300 text-black">
      <style>{globalStyle}</style>

      {/* Hero Image */}
      <div className="relative w-full min-h-screen rounded-b-4xl overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Mandrem Beach"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

        <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 py-12 text-center">
          <h1
            className="vex-font-display vex-hero-title"
            style={{ fontSize: "clamp(2.4rem, 12vw, 4rem)" }}
          >
            Mandrem Beach
          </h1>
          <h2
            className="text-white"
            style={{ marginTop: 12, fontSize: "1.2rem", fontWeight: 500 }}
          >
            The Quiet Side of North Goa
          </h2>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: "#fefce8", padding: "40px 24px" }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            If North Goa ever feels too loud, too crowded, too “on”… just head a little further up, and you’ll find Mandrem Beach waiting like it’s in no hurry at all.
            This is where Goa slows down properly.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>🏖️ Not Your Typical Party Beach</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Mandrem isn’t about loud music or packed shacks. It’s clean, open, and peaceful—long stretches of soft sand, fewer crowds, and that calm sound of waves that actually lets you think.
            You’ll see: People doing yoga by the shore, solo travelers just lying down with a book, couples taking slow walks without noise around.
            It feels more like an escape than a “scene.”
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>🌅 Mornings Here Hit Different</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Ask any local or long-time traveler—Mandrem mornings are something else. Soft sunrise over the water, almost empty beach, cool breeze, no chaos.
            If you want that “this is why I came to Goa” moment… this is it.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>🌉 The Little Details You’ll Notice</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            One thing that makes Mandrem unique is the small wooden bridges over the backwaters near the beach. You cross them, and suddenly everything feels quieter, more tucked away.
            Also, the sand here is softer compared to many other beaches—and yeah, you’ll feel the difference when you walk barefoot.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>☕ Cafés, But Make It Chill</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Mandrem has cafés and beach shacks, but they match the vibe: No loud blasting music, more healthy food, smoothie bowls, seafood, people sitting for hours, not rushing anything.
            It’s less about partying… more about unwinding.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>👀 What Locals Will Tell You</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            We don’t come to Mandrem for hype. We come here when: We need peace, we want a long drive with a calm destination, or just to get away from the usual North Goa rush.
            It’s one of those beaches you don’t want getting “too famous.”
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>⚠️ Just One Thing</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Because it’s peaceful, let it stay that way: Keep the noise low, avoid littering (this beach is actually clean—rare for North Goa), respect the calm vibe.
          </p>

          <h3 className="vex-section-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>💛 Why Mandrem Feels Different</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            Goa has two sides. One is loud, fun, and chaotic. The other is slow, quiet, and real.
            Mandrem Beach sits right in that second category.
          </p>

          <div style={{ background: "#fef3c7", padding: 20, borderRadius: 12, marginTop: 30 }}>
            <h4 style={{ fontWeight: 600, marginBottom: 10 }}>📍 Quick Local Summary</h4>
            <p><strong>Location:</strong> North Goa (above Ashwem)</p>
            <p><strong>Vibe:</strong> Calm, clean, peaceful</p>
            <p><strong>Best time:</strong> Sunrise or sunset</p>
            <p><strong>Best for:</strong> Relaxing, walking, disconnecting</p>
            <p style={{ marginTop: 10 }}>
              If you’re reading this after scanning a QR in your cab or car… maybe skip one party night and come here instead.
              Sit by the water, do nothing for a while… That’s the kind of Goa you don’t forget 🌊🌴
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

export default MandremBeach