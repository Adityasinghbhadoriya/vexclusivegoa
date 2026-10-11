import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { NIGHTLIFE_CATEGORIES } from "../Data/nightlifeCategories";

const NightlifeCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-50">
      <style>{`
        @keyframes nightlifeFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nightlife-fade-up {
          opacity: 0;
          animation: nightlifeFadeUp .55s ease-out forwards;
        }
      `}</style>

      <div className="absolute inset-0 bg-linear-to-br from-amber-50 via-orange-50 to-stone-100" />
      <div className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-amber-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 top-72 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="px-5 pt-5 pb-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            aria-label="Go back"
            className="mb-8 grid h-10 w-10 place-items-center rounded-full border border-stone-200/80 bg-white/80 shadow-sm backdrop-blur"
          >
            <FaArrowLeft className="text-sm text-stone-700" />
          </button>

          <div className="nightlife-fade-up" style={{ animationDelay: "40ms" }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-700/80">
              V Exclusive Nightlife
            </p>
            <h1 className="mt-2 text-[2rem] font-bold leading-tight tracking-tight text-stone-900">
              Find your next night out.
            </h1>
            <p className="mt-2 max-w-76 text-sm leading-relaxed text-stone-500">
              Choose the kind of nightlife you want to explore in Goa.
            </p>
          </div>
        </header>

        <main className="flex flex-1 flex-col justify-center gap-3.5 px-5 pb-10 pt-8">
          {NIGHTLIFE_CATEGORIES.map((category, index) => (
            <button
              key={category.id}
              type="button"
              onClick={() => navigate(`/clubs/browse?category=${category.id}`)}
              className="nightlife-fade-up group relative w-full overflow-hidden rounded-3xl border border-white/80 bg-white/75 p-5 text-left shadow-[0_12px_40px_-24px_rgba(28,25,23,0.45)] backdrop-blur-md transition duration-300 hover:-translate-y-1"
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
                  className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-linear-to-br ${category.accent} text-3xl shadow-lg`}
                  aria-hidden
                >
                  {category.emoji}
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
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-stone-100 text-stone-400 transition-all group-hover:bg-stone-900 group-hover:text-white"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </button>
          ))}
        </main>
      </div>
    </div>
  );
};

export default NightlifeCategories;