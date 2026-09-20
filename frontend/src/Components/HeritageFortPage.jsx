import { useEffect } from "react"
import { Link } from "react-router-dom"

const sectionIcons = ["🏰", "🌿", "📸", "🌅", "🎒"]

const HeritageFortPage = ({
  title,
  eyebrow,
  subtitle,
  intro,
  overviewTitle = "A peaceful journey through Goa’s past",
  image,
  snapshot,
  tags,
  sections,
  tip,
  caution,
  closingTitle,
  closingText,
  googleLink,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fffaf0] font-sans text-stone-900">
      <section className="relative h-[74vh] min-h-135 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/35 to-stone-950/90" />

        <div className="relative z-10 flex h-full items-end px-5 pb-14 pt-24 sm:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.22em] text-amber-200 uppercase backdrop-blur-md">
              {eyebrow}
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-6xl">
              {title}
            </h1>
            <h2 className="mt-3 text-lg font-semibold text-amber-100 sm:text-2xl">
              {subtitle}
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-12 sm:px-6">
        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-amber-200/70 bg-white p-6 shadow-[0_18px_55px_rgba(120,75,20,0.08)] sm:p-8">
            <div className="mb-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              {overviewTitle}
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
              {sections[0].text}
            </p>
          </article>

          <aside className="rounded-3xl border border-amber-200/70 bg-amber-50 p-6 shadow-[0_18px_55px_rgba(120,75,20,0.06)] sm:p-8">
            <h3 className="font-serif text-xl font-bold">Quick local snapshot</h3>
            <dl className="mt-5 space-y-3 text-sm text-stone-700">
              {snapshot.map(({ label, value }) => (
                <div key={label} className="grid grid-cols-[100px_1fr] gap-3">
                  <dt className="font-bold text-stone-900">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {sections.slice(1).map((section, index) => (
            <article
              key={section.title}
              className="rounded-3xl border border-amber-200/60 bg-white p-6 shadow-[0_15px_45px_rgba(120,75,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(120,75,20,0.1)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 text-2xl">
                {sectionIcons[index + 1] || "✨"}
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold">{section.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">{section.text}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="font-serif text-xl font-bold text-emerald-950">Visitor tip</h3>
            <p className="mt-3 text-sm leading-7 text-emerald-900">{tip}</p>
          </article>
          <article className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="font-serif text-xl font-bold text-orange-950">One thing to know</h3>
            <p className="mt-3 text-sm leading-7 text-orange-900">{caution}</p>
          </article>
        </section>

        <section className="rounded-3xl border border-amber-200/70 bg-white p-7 text-center shadow-[0_18px_55px_rgba(120,75,20,0.07)] sm:p-9">
          <h3 className="font-serif text-2xl font-bold">{closingTitle}</h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-stone-600 sm:text-base">
            {closingText}
          </p>
          <a
            href={googleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-bold text-stone-950 shadow-lg transition hover:-translate-y-0.5"
          >
            🗺️ View on Google Maps →
          </a>
          <div className="mt-6">
            <Link to="/" className="text-sm font-bold text-stone-800 no-underline">
              ← Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HeritageFortPage
