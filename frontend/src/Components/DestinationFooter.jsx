import { Link, useLocation } from "react-router-dom"
import { CORE_DISCOVERY_LINKS, RELATED_DESTINATIONS } from "../seo/internalLinks"
import PageBreadcrumbs from "./PageBreadcrumbs"

/**
 * Shared destination-page footer: breadcrumbs + contextual internal links.
 * Preserves existing “Back to Home” intent without redesigning page layouts.
 */
export default function DestinationFooter({ relatedPath }) {
  const { pathname } = useLocation()
  const path = relatedPath || pathname.replace(/\/+$/, "") || "/"
  const related = RELATED_DESTINATIONS[path] || []

  return (
    <div className="mt-6 space-y-4">
      <PageBreadcrumbs pathname={path} />

      {related.length > 0 && (
        <nav aria-label="Related Goa guides">
          <p className="mb-2 text-sm font-semibold text-stone-800">Related guides</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {related.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="font-medium text-stone-700 underline-offset-2 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <nav aria-label="Explore V Exclusive Goa">
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {CORE_DISCOVERY_LINKS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="font-bold text-stone-900 no-underline underline-offset-2 hover:underline"
              >
                {item.to === "/" ? "← Back to Home" : item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
