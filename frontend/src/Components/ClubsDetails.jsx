import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaDirections,
  FaPhoneAlt,
  FaInstagram,
  FaGlassCheers,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { clubs } from "../Data/clubs";

const ClubsDetails = () => {
  const { id } = useParams();
  const club = clubs.find(c => c.id === parseInt(id));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  if (!club) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-600 text-lg">Club not found</p>
      </div>
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % club.gallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [club.gallery.length]);

  const actions = [
    { icon: FaDirections, label: "Directions", sub: "Open in Maps", onClick: () => window.open(club.googleLink, "_blank") },
    { icon: FaPhoneAlt, label: "Call", sub: "Reserve a table", onClick: () => (window.location.href = `tel:${club.phone}`) },
    { icon: FaInstagram, label: "Instagram", sub: club.instagram ? club.instagram.split('/').pop() : "Follow us", onClick: () => window.open(club.instagram, "_blank") },
    { icon: FaGlassCheers, label: "Vibe", sub: "Live music", onClick: () => window.open(club.googleLink, "_blank") },
  ];

  return (
    <div className="min-h-screen bg-stone-50 pb-12">
      <style>{`
        @keyframes shimmer { 0%{background-position:-200% 0}100%{background-position:200% 0} }
        @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)} }
        @keyframes pulseGlow { 0%,100%{box-shadow:0 10px 30px -10px rgba(234,88,12,.5)}50%{box-shadow:0 15px 40px -10px rgba(234,88,12,.8)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)} }
        @keyframes scaleIn { from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)} }
        .animate-shimmer{animation:shimmer 3s linear infinite}
        .animate-float{animation:float 3s ease-in-out infinite}
        .animate-pulse-glow{animation:pulseGlow 2s ease-in-out infinite}
        .animate-fade-in-up{animation:fadeInUp .6s ease-out forwards}
        .animate-scale-in{animation:scaleIn .5s ease-out}
        .scrollbar-none::-webkit-scrollbar{display:none}
        .scrollbar-none{scrollbar-width:none}
      `}</style>

      {/* HERO */}
      <div className="relative h-[68vh] w-full overflow-hidden">
        {club.gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${club.name} ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1500ms] ease-out ${
              i === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 pt-6">
          <button
            onClick={() => window.history.back()}
            className="grid place-items-center h-11 w-11 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 text-white hover:bg-white/30 transition"
          >
            <FaArrowLeft className="text-sm" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className="grid place-items-center h-11 w-11 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 text-white hover:bg-white/30 transition"
            >
              <FaHeart className={`text-sm transition ${liked ? "text-rose-400 scale-110" : ""}`} />
            </button>
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 mb-4">
            <HiSparkles className="text-amber-300 text-xs" />
            <span className="text-xs font-medium text-white tracking-wide">FEATURED PARTNER</span>
          </div>
          <h1 className="text-5xl font-bold text-white tracking-tight leading-none mb-2">
            {club.name}
          </h1>
          <p className="text-white/80 text-base font-light mb-3">{club.vibe}</p>
          <div className="flex items-center gap-4 text-white/90 text-sm">
            <span className="flex items-center gap-1.5">
              <FaStar className="text-amber-300" />
              <span className="font-semibold">{club.rating}</span>
              <span className="text-white/60">({club.reviews})</span>
            </span>
            <span className="h-3 w-px bg-white/30" />
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-xs" />
              <span className="text-xs">{club.location}</span>
            </span>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {club.gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentIndex ? "w-8 bg-white" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content card */}
      <div className="relative -mt-8 mx-4 rounded-t-[2rem] bg-stone-50 px-6 pt-8 pb-6 shadow-2xl">
        {/* Offer */}
        <div className="relative overflow-hidden rounded-3xl p-[1.5px] shadow-[0_10px_40px_-10px_rgba(234,88,12,0.5)] animate-scale-in bg-gradient-to-br from-orange-500 via-rose-500 to-amber-500">
          <div className="relative rounded-[calc(1.5rem-1.5px)] bg-gradient-to-br from-orange-500 via-rose-500 to-amber-500 px-6 py-7 overflow-hidden">
            <div className="absolute inset-0 opacity-30 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] bg-[length:200%_100%] animate-shimmer" />
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-white/85 text-xs font-medium tracking-[0.2em] uppercase mb-1">
                  Exclusive Offer
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black text-white leading-none tracking-tight">10%</span>
                  <span className="text-xl font-semibold text-white/90">OFF</span>
                </div>
                <p className="text-white/85 text-sm mt-2">Show this screen at billing</p>
              </div>
              <div className="grid place-items-center h-20 w-20 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/30 animate-float">
                <HiSparkles className="text-white text-4xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
          {club.tags.map((tag) => (
            <span
              key={tag}
              className="shrink-0 rounded-full bg-stone-100 text-stone-700 text-xs font-medium px-3.5 py-1.5 border border-stone-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hours */}
        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-stone-100 px-4 py-3.5 border border-stone-200">
          <div className="grid place-items-center h-10 w-10 rounded-xl bg-white shadow-sm">
            <FaClock className="text-orange-600 text-sm" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-stone-500">Open today</p>
            <p className="text-sm font-semibold text-stone-900">{club.hours}</p>
          </div>
          <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2.5 py-1 rounded-full">
            OPEN NOW
          </span>
        </div>

        {/* About */}
        <div className="mt-6">
          <h2 className="text-sm font-semibold tracking-wider text-stone-500 uppercase mb-2">About</h2>
          <p className="text-stone-700 text-sm leading-relaxed font-light">
            {club.description}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-7">
          <h2 className="text-sm font-semibold tracking-wider text-stone-500 uppercase mb-3">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {actions.map(({ icon: Icon, label, sub, onClick }, i) => (
              <button
                key={label}
                onClick={onClick}
                style={{ animationDelay: `${i * 80}ms` }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-stone-200 p-4 text-left shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-orange-300 transition animate-fade-in-up opacity-0"
              >
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 text-white mb-3 group-hover:scale-110 group-hover:rotate-3 transition shadow-md">
                  <Icon className="text-base" />
                </div>
                <p className="text-sm font-semibold text-stone-900">{label}</p>
                <p className="text-xs text-stone-500 mt-0.5">{sub}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubsDetails;