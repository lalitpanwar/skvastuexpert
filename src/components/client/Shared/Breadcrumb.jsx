import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="pr-8 p-4 flex flex-wrap items-center justify-end gap-2 text-sm"
    ><span>You are here: </span>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={index}
            className="flex items-center gap-2"
          >
            {index === 0 && (
              <Home
                size={16}
                className="text-primary"
              />
            )}

            {isLast ? (
              <span className="max-w-xs truncate font-medium text-slate-900">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="
                  text-slate-500
                  transition-colors
                  hover:text-primary
                "
              >
                {item.label}
              </Link>
            )}

            {!isLast && (
              <ChevronRight
                size={16}
                className="text-slate-400"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}