import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MEAL_CATEGORIES } from "../Data/restaurantMealCategories";

const RestaurantCategories = () => {
  const navigate = useNavigate();

  const goToBrowse = (categoryId) => {
    if (categoryId) {
      navigate(`/restaurants/browse?category=${categoryId}`);
      return;
    }
    navigate("/restaurants/browse");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-50">
      <style>{`
        @keyframes catFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes catFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .cat-fade-up {
          opacity: 0;
          animation: catFadeUp 0.55s ease-out forwards;
        }
        .cat-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .cat-card:hover {
          transform: translateY(-4px) scale(1.01);
        }
        .cat-card:active {
          transform: scale(0.985);
        }
        .cat-emoji {
          animation: catFloat 3.2s ease-in-out infinite;
        }
        .cat-wash {
          background: linear-gradient(145deg, #fefce8 0%, #eff6ff 45%, #f0fdf4 78%, #fafaf9 100%);
        }
        .cat-orb {
          filter: blur(48px);
          pointer-events: none;
        }
      `}</style>

      <div className="cat-wash absolute inset-0" />
      <div
        className="cat-orb absolute -left-16 top-24 h-56 w-56 rounded-full bg-yellow-300/45"
        aria-hidden
      />
      <div
        className="cat-orb absolute -right-12 top-72 h-64 w-64 rounded-full bg-sky-300/40"
        aria-hidden
      />
      <div
        className="cat-orb absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-lime-300/40"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="px-5 pt-5 pb-2">
          <div className="mb-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate("/")}
              aria-label="Back to home"
              className="grid h-10 w-10 place-items-center rounded-full border border-stone-200/80 bg-white/80 shadow-sm backdrop-blur"
            >
              <FaArrowLeft className="text-sm text-stone-700" />
            </button>

            <button
              type="button"
              onClick={() => goToBrowse(null)}
              aria-label="View all restaurants"
              className="grid h-10 w-10 place-items-center rounded-full border border-stone-200/80 bg-white/80 text-xl leading-none text-stone-500 shadow-sm backdrop-blur transition hover:bg-white hover:text-stone-800"
            >
              ×
            </button>
          </div>

          <div className="cat-fade-up" style={{ animationDelay: "40ms" }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600/80">
              V Exclusive Dining
            </p>
            <h1 className="mt-2 text-[2rem] font-bold leading-tight tracking-tight text-stone-900">
              What are you{" "}
              <span className="bg-linear-to-r from-yellow-500 via-blue-500 to-green-600 bg-clip-text text-transparent">
                looking for?
              </span>
            </h1>
            <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-stone-500">
              Pick a time of day and we&apos;ll show the best tables for it.
            </p>
          </div>
        </header>

        <main className="flex flex-1 flex-col px-5 pb-8 pt-6">
          <div className="flex flex-1 flex-col justify-center gap-3.5">
            {MEAL_CATEGORIES.map((category, index) => (
              <button
                key={category.id}
                type="button"
                onClick={() => goToBrowse(category.id)}
                className="cat-card cat-fade-up group relative w-full overflow-hidden rounded-3xl border border-white/80 bg-white/75 p-5 text-left shadow-[0_12px_40px_-24px_rgba(28,25,23,0.45)] backdrop-blur-md"
                style={{
                  animationDelay: `${120 + index * 90}ms`,
                  boxShadow: `0 18px 40px -28px ${category.glow}`,
                }}
              >
                <div
                  className={`pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-linear-to-b ${category.accent}`}
                  aria-hidden
                />
                <div
                  className={`pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-linear-to-br ${category.accent} opacity-15 transition-opacity duration-300 group-hover:opacity-25`}
                  aria-hidden
                />

                <div className="relative flex items-center gap-4">
                  <div
                    className={`cat-emoji grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-linear-to-br ${category.accent} text-3xl shadow-lg`}
                    style={{ animationDelay: `${index * 0.4}s` }}
                  >
                    <span className="drop-shadow-sm" aria-hidden>
                      {category.emoji}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-bold tracking-tight text-stone-900">
                      {category.label}
                    </h2>
                    <p className="mt-0.5 text-sm text-stone-500">
                      {category.subtitle}
                    </p>
                  </div>

                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-stone-100 text-stone-400 transition-all duration-280 group-hover:bg-stone-900 group-hover:text-white"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div
            className="cat-fade-up mt-8 text-center"
            style={{ animationDelay: "420ms" }}
          >
            <button
              type="button"
              onClick={() => goToBrowse(null)}
              className="text-sm font-semibold text-stone-500 underline decoration-stone-300 underline-offset-4 transition hover:text-blue-600 hover:decoration-blue-400"
            >
              View All Restaurants
            </button>
            <p className="mt-2 text-[11px] text-stone-400">
              See every curated spot without filtering
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RestaurantCategories;
