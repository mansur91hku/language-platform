import { useNavigate, useLocation } from "react-router-dom";
import { buildBreadcrumbs } from "../utils/breadcrumbs";

const navBtn =
  "inline-flex shrink-0 items-center px-6 py-3 rounded-full bg-white/45 text-gray-800 font-medium shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-white/60 backdrop-blur-xl transition-all duration-300 pointer-events-auto hover:bg-white/60";

export default function PageNavBar({ onBack, showBack = true }) {
  const navigate = useNavigate();
  const location = useLocation();
  const breadcrumbs = buildBreadcrumbs(location.pathname);
  const isHomePage = location.pathname === "/";

  return (
    <div className="fixed top-3 left-3 right-3 z-50 flex items-center gap-3 pointer-events-none">
      {showBack ? (
        <button type="button" onClick={onBack} className={navBtn}>
          Back
        </button>
      ) : (
        <div className="w-[88px] shrink-0" />
      )}

      <nav
        aria-label="Navigation path"
        className="pointer-events-auto flex min-w-0 flex-1 items-center overflow-hidden rounded-full border border-white/60 bg-white/30 px-3 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
      >
        <ol className="flex min-w-0 items-center gap-1 overflow-x-auto whitespace-nowrap text-sm text-gray-700">
          {breadcrumbs.length === 0 ? (
            <li className="truncate font-medium text-gray-900">Home</li>
          ) : (
            breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li key={`${crumb.path}-${index}`} className="flex min-w-0 items-center gap-1">
                  {index > 0 && (
                    <span className="shrink-0 text-gray-400" aria-hidden="true">
                      ›
                    </span>
                  )}
                  {isLast ? (
                    <span className="truncate font-medium text-gray-900">
                      {crumb.label}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        navigate(crumb.path, { state: { direction: "down" } })
                      }
                      className="truncate rounded-full px-2 py-1 transition-colors hover:bg-white/50 hover:text-blue-700"
                    >
                      {crumb.label}
                    </button>
                  )}
                </li>
              );
            })
          )}
        </ol>
      </nav>

      {!isHomePage && (
        <button
          type="button"
          onClick={() => navigate("/", { state: { direction: "down" } })}
          className={`${navBtn} pointer-events-auto`}
        >
          Home
        </button>
      )}
    </div>
  );
}
