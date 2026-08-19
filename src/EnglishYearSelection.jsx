import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import { setEnglishYear } from "./utils/englishYear";

export default function EnglishYearSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const years = ["2023", "2024", "2025", "2026"];

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <PageNavBar
        onBack={() => {
          setExitDirection("down");
          setTimeout(() => {
            navigate("/", { state: { direction: "down" } });
          }, 300);
        }}
      />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="flex flex-col items-center justify-center py-10 text-center md:py-14">
          <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            English
          </h2>

          <p className="max-w-2xl text-xl text-gray-600">
            Select when you started your university studies
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 pb-8 md:grid-cols-2">
          {years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => {
                setExitDirection("up");
                setEnglishYear(year);

                setTimeout(() => {
                  const routeMap = {
                    "2023": "/english/2023/pathway1",
                    "2024": "/english/2024/pathways",
                    "2025": "/english/2025/pathways",
                    "2026": "/english/2026/pathways",
                  };

                  navigate(routeMap[year], {
                    state: {
                      direction: "up",
                      previousPage: "/english",
                    },
                  });
                }, 300);
              }}
              className="group rounded-[32px] border border-blue-200 bg-gradient-to-b from-blue-50 to-indigo-100 p-8 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="mb-4 text-5xl font-semibold">{year}</h3>

              <p className="mb-6 text-gray-700">
                View English course options for this cohort
              </p>

              <span className="font-medium text-blue-600 group-hover:underline">
                Continue
              </span>
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
