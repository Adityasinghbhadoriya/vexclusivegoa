import { Link } from "react-router-dom"
import { getBreadcrumbs } from "../seo/breadcrumbs"

/**
 * Visible breadcrumb trail. Keep markup semantic so BreadcrumbList JSON-LD matches the UI.
 */
export default function PageBreadcrumbs({ pathname }) {
  const items = getBreadcrumbs(pathname)
  if (!items.length) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-stone-600">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.path}-${item.name}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <span aria-hidden="true" className="text-stone-400">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="font-semibold text-stone-900">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="underline-offset-2 hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
