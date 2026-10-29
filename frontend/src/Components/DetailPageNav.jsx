import { Link } from "react-router-dom"
import PageBreadcrumbs from "./PageBreadcrumbs"

/**
 * Compact breadcrumbs + parent listing links for venue detail pages.
 */
export default function DetailPageNav({ pathname, parentTo, parentLabel }) {
  return (
    <div className="mt-8 border-t border-stone-200 pt-6">
      <PageBreadcrumbs pathname={pathname} />
      <nav aria-label="More from V Exclusive Goa" className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <Link to={parentTo} className="font-semibold text-stone-900 underline-offset-2 hover:underline">
          ← {parentLabel}
        </Link>
        <Link to="/" className="font-medium text-stone-700 underline-offset-2 hover:underline">
          Home
        </Link>
      </nav>
    </div>
  )
}
