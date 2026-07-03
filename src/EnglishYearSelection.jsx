import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function EnglishYearSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection =
    location.state?.direction === "down"
      ? "-100%"
      : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  const years = ["2023", "2024", "2025", "2026"];

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{
        y: exitDirection === "up" ? "-100%" : "100%",
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <div className="pt-4">
          <button
            onClick={() => {
              setExitDirection("down");

              setTimeout(() => {
                navigate("/");
              }, 300);
            }}
            className="
              inline-flex
              items-center
              px-6
              py-3
              rounded-full
              bg-gray-100
              text-gray-800
              font-medium
              shadow-sm
              hover:bg-gray-200
              hover:shadow-md
              transition-all
              duration-300
            "
          >
            Back
          </button>
        </div>

        <section className="flex flex-col items-center justify-center text-center py-10 md:py-14">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            English
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl">
            Select when you started your university studies
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                setExitDirection("up");

                setTimeout(() => {
                  if (year === "2025" || year === "2026") {
                    navigate("/english/pathways");
                  }
                }, 300);
              }}

              className="
                group
                bg-gradient-to-b
                from-blue-50
                to-indigo-100
                border
                border-blue-200
                rounded-[32px]
                p-8
                text-left
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h3 className="text-5xl font-semibold mb-4">
                {year}
              </h3>

              <p className="text-gray-700 mb-6">
                View English course options for this cohort
              </p>

              <span className="text-blue-600 font-medium group-hover:underline">
                Continue
              </span>
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}