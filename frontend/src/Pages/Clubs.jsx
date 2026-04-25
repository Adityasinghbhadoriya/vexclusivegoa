import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaPhoneAlt,
  FaDirections,
  FaGlassCheers,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaFire,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { clubs } from "../Data/clubs";
import { trackClubClick } from "../api";

const Clubs = () => {
  const navigate = useNavigate();
  const featuredClub = clubs[0];
  const otherClubs = clubs.slice(1);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + 1) % featuredClub.gallery.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [featuredClub.gallery.length]);

  const goToClub = (club) => {
    trackClubClick(club.id);
    navigate(`/club/${club.id}`);
  };



  return (
    <div className="min-h-screen bg-stone-50 pb-12">
      <style>{`
        @keyframes shimmer {
          0%{background-position:-200% 0}
          100%{background-position:200% 0}
        }
        @keyframes float {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-6px)}
        }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(16px)}
          to{opacity:1;transform:translateY(0)}
        }
        .animate-shimmer{animation:shimmer 3s linear infinite}
        .animate-float{animation:float 3s ease-in-out infinite}
        .animate-fade-up{animation:fadeUp .5s ease-out forwards}
        .scrollbar-none::-webkit-scrollbar{display:none}
        .scrollbar-none{scrollbar-width:none}
      `}</style>

      {/* Header */}
      <div className="sticky top-0 z-30 bg-stone-50/80 backdrop-blur-xl border-b border-stone-200/60">
        <div className="px-5 pt-5 pb-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate("/")}
              className="grid place-items-center h-10 w-10 rounded-full bg-white border border-stone-200 shadow-sm"
            >
              <FaArrowLeft className="text-sm" />
            </button>

            <div className="flex items-center gap-1.5 text-stone-600 text-sm">
              <FaMapMarkerAlt className="text-orange-500 text-xs" />
              <span className="font-medium">Goa</span>
            </div>

            <div className="grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 text-white font-bold shadow-md">
              V
            </div>
          </div>

          <h1 className="text-3xl font-bold text-stone-900 tracking-tight">
            Discover 
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"> Nightlife</span>
          </h1>
          <p className="text-stone-500 text-sm mt-1">
            Top clubs in Goa curated for you
          </p>
        </div>
      </div>

      <div className="px-5 pt-6 space-y-8">

        {/* Featured Club */}
        <section>
          <div className="flex items-end justify-between mb-3">
            <div className="flex items-center gap-2">
              <FaFire className="text-orange-500" />
              <h2 className="text-lg font-bold text-stone-900">
                Featured Club
              </h2>
            </div>

            <span className="text-xs text-stone-400 font-medium">
              {currentIndex+1}/{featuredClub.gallery.length}
            </span>
          </div>

          <div
            onClick={() => goToClub(featuredClub)}
            className="relative overflow-hidden rounded-3xl shadow-xl shadow-orange-500/10 cursor-pointer"
          >
            <div className="relative h-72">
              {featuredClub.gallery.map((img,i)=>(
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms]
                  ${i===currentIndex ? "opacity-100 scale-100":"opacity-0 scale-105"}`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-3 py-1.5">
                <HiSparkles className="text-amber-300 text-xs"/>
                <span className="text-xs font-semibold text-white">
                  10% OFF • V EXCLUSIVE
                </span>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 shadow-lg">
                <FaStar className="text-amber-400 text-xs" />
                <span className="text-xs font-bold">
                  {featuredClub.rating}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-3xl font-bold text-white">
                  {featuredClub.name}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  {featuredClub.vibe}
                </p>

                <div className="flex items-center gap-3 mt-2 text-white/80 text-xs flex-wrap">
                  <span>{featuredClub.location}</span>
                  <span>{featuredClub.distance}</span>
                  <span>{featuredClub.reviews} reviews</span>
                </div>
              </div>

              <div className="absolute bottom-[110px] left-5 flex gap-1.5">
                {featuredClub.gallery.map((_,i)=>(
                  <button
                    key={i}
                    onClick={(e)=>{
                      e.stopPropagation();
                      setCurrentIndex(i)
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i===currentIndex ? "w-8 bg-white" : "w-3 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 bg-white">
              {[
                {Icon:FaDirections,label:"Directions"},
                {Icon:FaPhoneAlt,label:"Call"},
                {Icon:FaGlassCheers,label:"Vibe"},
              ].map(({Icon,label},i)=>(
                <button
                  key={label}
                  onClick={(e)=>e.stopPropagation()}
                  className={`flex flex-col items-center gap-1 py-3.5 text-xs font-medium hover:bg-orange-50 ${
                    i!==2 ? "border-r border-stone-100":""
                  }`}
                >
                  <Icon className="text-base"/>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>


        {/* Other Clubs */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-stone-900">
              More Clubs
            </h2>
            <span className="text-xs text-stone-400">
              {otherClubs.length} places
            </span>
          </div>

          <div className="space-y-3">
            {otherClubs.map((c,i)=>(
              <div
                key={c.id}
                onClick={()=>goToClub(c)}
                style={{animationDelay:`${i*80}ms`}}
                className="opacity-0 animate-fade-up flex gap-3 bg-white border border-stone-200 rounded-2xl p-3 shadow-sm hover:shadow-lg transition cursor-pointer"
              >
                <div className="relative shrink-0">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-white rounded-full px-1.5 py-0.5 flex items-center gap-0.5">
                    <FaStar className="text-amber-400 text-[9px]" />
                    <span className="text-[10px] font-bold">{c.rating}</span>
                  </div>
                </div>

                <div className="flex-1 py-1">
                  <h3 className="font-bold text-stone-900">
                    {c.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {c.vibe}
                  </p>

                  <div className="flex items-center gap-2 mt-2 text-[11px] text-stone-500 flex-wrap">
                    <span>{c.location}</span>
                    <span>{c.distance}</span>
                  </div>

                  <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-orange-50 border border-orange-100 px-2 py-1">
                    <HiSparkles className="text-orange-500 text-[10px]"/>
                    <span className="text-[10px] font-semibold text-orange-600">
                      10% OFF
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Clubs;
