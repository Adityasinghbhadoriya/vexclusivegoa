
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaPhoneAlt,
  FaDirections,
  FaUtensils,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaFire,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { restaurants } from "../Data/restaurant";
import { trackRestaurantClick } from "../api";

const Restaurant = () => {
  const navigate = useNavigate();
  const priorityOrder = [
    "Da Luna Restaurant",
    "Pincode Bungalow",
    "Burger Factory",
    "Nova Sandwich Shop",
    "Babka Goa",
    "Coco Moga Bakehouse",
    "Calhiz, Village Bar",
    "Boilermaker",
    "Anand Sea Food Bar & Restaurant",
    "Casa Jaali",
  ];

  const featuredRestaurant =
    restaurants.find((restaurant) => restaurant.name === "Da Luna Restaurant") || restaurants[0];

  const otherRestaurants = restaurants
    .filter((restaurant) => restaurant.id !== featuredRestaurant.id)
    .sort((a, b) => {
      const aPriority = priorityOrder.indexOf(a.name);
      const bPriority = priorityOrder.indexOf(b.name);

      if (aPriority !== -1 || bPriority !== -1) {
        if (aPriority === -1) return 1;
        if (bPriority === -1) return -1;
        return aPriority - bPriority;
      }

      return 0;
    });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOffer, setSelectedOffer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + 1) % featuredRestaurant.gallery.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [featuredRestaurant.gallery.length]);

  useEffect(() => {
    if (!selectedOffer) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedOffer(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedOffer]);

  const goToRestaurant = (restaurant) => {
    trackRestaurantClick(restaurant.id, restaurant.name);
    navigate(`/restaurant/${restaurant.id}`);
  };

  const offers = [
    {
      title: "Beer Bucket",
      requirement: "Buy 1 beer bucket",
      reward: "Get 1 FREE",
      details: "Order one beer bucket and receive another beer bucket free as part of Da Luna's Weekend Experience.",
      gradient: "from-amber-500 via-orange-500 to-orange-600",
      emoji: "🍺",
    },
    {
      title: "Premium Sheesha",
      requirement: "Book 2 premium sheeshas",
      reward: "Get 25% OFF",
      details: "Book two premium sheeshas and receive 25% off the sheesha experience at Da Luna.",
      gradient: "from-violet-700 via-fuchsia-700 to-rose-600",
      emoji: "✨",
    },
    {
      title: "Pizza Special",
      requirement: "Order any pizza",
      reward: "Get 1 Beer FREE",
      details: "Choose any pizza from the menu and receive one beer free with your order.",
      gradient: "from-rose-600 via-orange-600 to-amber-500",
      emoji: "🍕",
    },
  ];

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
        @keyframes sheetUp {
          from{opacity:0;transform:translateY(32px)}
          to{opacity:1;transform:translateY(0)}
        }
        .offer-sheet{animation:sheetUp .28s ease-out}
        .offer-ticket{transition:transform .25s ease,box-shadow .25s ease}
        .offer-ticket:hover{transform:translateY(-2px);box-shadow:0 18px 35px -18px rgba(120,53,15,.7)}
        .offer-ticket:active{transform:scale(.99)}
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
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"> Restaurants</span>
          </h1>
          <p className="text-stone-500 text-sm mt-1">
            Top places in Goa curated for you
          </p>
        </div>
      </div>

      <div className="px-5 pt-6 space-y-8">

        {/* Featured Restaurant */}
        <section>
          <div className="flex items-end justify-between mb-3">
            <div className="flex items-center gap-2">
              <FaFire className="text-orange-500" />
              <h2 className="text-lg font-bold text-stone-900">
                Awarded Restaurant
              </h2>
            </div>

            <span className="text-xs text-stone-400 font-medium">
              {currentIndex+1}/{featuredRestaurant.gallery.length}
            </span>
          </div>

          <div
            onClick={() => goToRestaurant(featuredRestaurant)}
            className="relative overflow-hidden rounded-3xl shadow-xl shadow-orange-500/10 cursor-pointer"
          >
            <div className="relative h-72">
              {featuredRestaurant.gallery.map((img,i)=>(
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
                  {featuredRestaurant.offer} • V EXCLUSIVE
                </span>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 shadow-lg">
                <FaStar className="text-amber-400 text-xs" />
                <span className="text-xs font-bold">
                  {featuredRestaurant.rating}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-3xl font-bold text-white">
                  {featuredRestaurant.name}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  {featuredRestaurant.cuisine}
                </p>

                <div className="flex items-center gap-3 mt-2 text-white/80 text-xs flex-wrap">
                  <span>{featuredRestaurant.location}</span>
                  <span>{featuredRestaurant.distance}</span>
                  <span>{featuredRestaurant.reviews} reviews</span>
                </div>
              </div>

              <div className="absolute bottom-[110px] left-5 flex gap-1.5">
                {featuredRestaurant.gallery.map((_,i)=>(
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
                {Icon:FaUtensils,label:"Menu"},
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


        {/* Exclusive Offers */}
        <section>
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-amber-800 uppercase">
              <HiSparkles className="text-amber-600" />
              V Exclusive × Da Luna
            </div>
            <h2 className="mt-2 text-xl font-bold text-stone-900">
              Your Weekend Perks Pass
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-stone-500">
              Tap a pass to see how to redeem your offer at Da Luna.
            </p>
          </div>

          <div className="space-y-3">
            {offers.map((o,i)=>(
              <button
                type="button"
                key={o.title}
                onClick={() => setSelectedOffer(o)}
                aria-label={`View ${o.title} offer details`}
                className={`offer-ticket relative w-full overflow-hidden rounded-2xl bg-linear-to-r ${o.gradient} text-left shadow-lg`}
              >
                <div className="absolute inset-0 opacity-25 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-size-[200%_100%] animate-shimmer" />
                <span className="absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-stone-50" />
                <span className="absolute -right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-stone-50" />

                <div className="relative flex min-h-36">
                  <div className="flex flex-1 flex-col justify-center py-5 pl-6 pr-4">
                    <p className="text-[9px] font-bold tracking-[0.2em] text-white/75 uppercase">
                      Da Luna Offer Pass 0{i + 1}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-xs font-medium text-white/85">
                      {o.requirement}
                    </p>
                    <p className="mt-3 text-[10px] font-semibold tracking-wide text-white/70 uppercase">
                      Tap for details →
                    </p>
                  </div>

                  <div className="flex w-30 shrink-0 flex-col items-center justify-center border-l border-dashed border-white/40 px-3 text-center">
                    <span className="text-3xl drop-shadow-sm">{o.emoji}</span>
                    <span className="mt-2 text-base font-black leading-tight text-white">
                      {o.reward}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5">
            <HiSparkles className="mt-0.5 shrink-0 text-xs text-amber-600" />
            <p className="text-[11px] leading-relaxed text-amber-900">
              Keep this page open and show your selected pass to the Da Luna team before billing.
            </p>
          </div>
        </section>


        {/* Other Restaurants */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-stone-900">
              More Near You
            </h2>
            <span className="text-xs text-stone-400">
              {otherRestaurants.length} places
            </span>
          </div>

          <div className="space-y-3">
            {otherRestaurants.map((r,i)=>(
              <div
                key={r.id}
                onClick={()=>goToRestaurant(r)}
                style={{animationDelay:`${i*80}ms`}}
                className="opacity-0 animate-fade-up flex gap-3 bg-white border border-stone-200 rounded-2xl p-3 shadow-sm hover:shadow-lg transition cursor-pointer"
              >
                <div className="relative shrink-0">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  {r.rating && (
                    <div className="absolute top-1.5 left-1.5 bg-white rounded-full px-1.5 py-0.5 flex items-center gap-0.5">
                      <FaStar className="text-amber-400 text-[9px]" />
                      <span className="text-[10px] font-bold">{r.rating}</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 py-1">
                  <h3 className="font-bold text-stone-900">
                    {r.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {r.cuisine}
                  </p>

                  <div className="flex items-center gap-2 mt-2 text-[11px] text-stone-500 flex-wrap">
                    <span>{r.location}</span>
                    <span>{r.distance}</span>
                  </div>

                  {r.offer && (
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-orange-50 border border-orange-100 px-2 py-1">
                      <HiSparkles className="text-orange-500 text-[10px]"/>
                      <span className="text-[10px] font-semibold text-orange-600">
                        {r.offer}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {selectedOffer && (
        <div className="fixed inset-0 z-100 flex items-end justify-center">
          <button
            type="button"
            aria-label="Close offer details"
            onClick={() => setSelectedOffer(null)}
            className="absolute inset-0 bg-stone-950/65 backdrop-blur-sm"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="offer-dialog-title"
            className="offer-sheet relative z-10 max-h-[88vh] w-full max-w-107.5 overflow-y-auto rounded-t-4xl bg-stone-50 px-5 pb-7 pt-3 shadow-2xl"
          >
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-stone-300" />

            <div className={`relative overflow-hidden rounded-3xl bg-linear-to-br ${selectedOffer.gradient} p-5 text-white shadow-xl`}>
              <div className="absolute -right-5 -top-7 text-8xl opacity-20">
                {selectedOffer.emoji}
              </div>
              <button
                type="button"
                onClick={() => setSelectedOffer(null)}
                aria-label="Close"
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-lg text-white backdrop-blur"
              >
                ×
              </button>
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/75 uppercase">
                V Exclusive × Da Luna
              </p>
              <h3 id="offer-dialog-title" className="mt-2 text-2xl font-bold">
                {selectedOffer.title}
              </h3>
              <p className="mt-5 text-xs font-medium text-white/80">
                {selectedOffer.requirement}
              </p>
              <p className="mt-1 text-4xl font-black leading-none">
                {selectedOffer.reward}
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <h4 className="text-xs font-bold tracking-[0.14em] text-stone-500 uppercase">
                Offer details
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">
                {selectedOffer.details}
              </p>
            </div>

            <div className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <h4 className="text-xs font-bold tracking-[0.14em] text-amber-800 uppercase">
                How to redeem
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-amber-950">
                Show this offer pass to the Da Luna team when ordering and keep it available until billing.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  window.location.href = `tel:${featuredRestaurant.phone}`;
                }}
                className="rounded-2xl bg-stone-900 px-4 py-3.5 text-sm font-bold text-white shadow-lg"
              >
                <FaPhoneAlt className="mx-auto mb-1.5" />
                Reserve a Table
              </button>
              <button
                type="button"
                onClick={() => window.open(featuredRestaurant.googleLink, "_blank", "noopener,noreferrer")}
                className="rounded-2xl bg-linear-to-r from-amber-500 to-orange-500 px-4 py-3.5 text-sm font-bold text-white shadow-lg"
              >
                <FaDirections className="mx-auto mb-1.5" />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
