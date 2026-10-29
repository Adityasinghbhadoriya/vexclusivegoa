import { Link } from "react-router-dom"
import { CORE_DISCOVERY_LINKS } from "../seo/internalLinks"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-50 px-6 py-16 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-900">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-600">
        This URL is not part of V Exclusive Goa. Try one of the guides below, or return home.
      </p>
      <nav aria-label="Popular pages" className="mt-8">
        <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {CORE_DISCOVERY_LINKS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="inline-flex rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-900 shadow-sm"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}
