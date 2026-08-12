import { useNavigate, useLocation } from "react-router-dom";
import { buildBreadcrumbs } from "../utils/breadcrumbs";

const navBtn =
  "inline-flex shrink-0 items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300 pointer-events-auto";

export default function PageNavBar({ onBack, showBack = true }) {
  const navigate = useNavigate();
  const location = useLocation();
  const breadcrumbs = buildBreadcrumbs(location.pathname);

  const handleHome = () => {
    navigate("/", { state: { direction: "down" } });
  };

  return (
    <div className="fixed top-4 left-4 right-4 flex items-center gap-3 z-50 pointer-events-none">
      {showBack ? (
        <button type="button" onClick={onBack} className={navBtn}>
          Back
        </button>
      ) : (
        <div className="w-[88px] shrink-0" />
      )}

      <nav
        aria-label="Navigation path"
        className="pointer-events-auto flex min-w-0 flex-1 items-center overflow-hidden rounded-md border border-[#d1d1d1] bg-[#f3f3f3] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
      >
        <ol className="flex min-w-0 items-center gap-1 overflow-x-auto whitespace-nowrap text-sm text-gray-700">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={crumb.path} className="flex min-w-0 items-center gap-1">
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
                    className="truncate rounded px-1 hover:bg-[#e5e5e5] hover:text-blue-700"
                  >
                    {crumb.label}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <button type="button" onClick={handleHome} className={navBtn}>
        Home
      </button>
    </div>
  );
}
