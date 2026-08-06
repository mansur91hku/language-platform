import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Legacy2023AISQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage =
    location.state?.previousPage || "/english/2023/school";

  const [exitDirection, setExitDirection] = useState("up");

  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  const options = [
    { label: "SENG (School of Engineering)", affiliation: "SENG" },
    { label: "SHSS (School of Humanities and Social Science)", affiliation: "SHSS" },
    { label: "SSCI (School of Science)", affiliation: "SSCI" },
    { label: "None of the above", affiliation: "none" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="fixed top-4 left-4 right-4 flex items-center justify-between z-50 pointer-events-none">
        <button
          onClick={() => {
            setExitDirection("down");
            setTimeout(() => {
              navigate(previousPage, { state: { direction: "down" } });
            }, 300);
          }}
          className="
            inline-flex items-center px-6 py-3 rounded-full
            bg-gray-100 text-gray-800 font-medium shadow-sm
            hover:bg-gray-200 hover:shadow-md transition-all duration-300
            pointer-events-auto
          "
        >
          Back
        </button>
        <button
          onClick={() => {
            setExitDirection("down");
            setTimeout(() => {
              navigate("/", { state: { direction: "down" } });
            }, 300);
          }}
          className="
            inline-flex items-center px-6 py-3 rounded-full
            bg-gray-100 text-gray-800 font-medium shadow-sm
            hover:bg-gray-200 hover:shadow-md transition-all duration-300
            pointer-events-auto
          "
        >
          Home
        </button>
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-4">
        <section className="text-center py-12">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            Academy of Interdisciplinary Studies
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Which school is your program affiliated with?
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 max-w-3xl mx-auto pb-16">
          {options.map((option) => (
            <button
              key={option.affiliation}
              onClick={() => {
                setExitDirection("up");
                setTimeout(() => {
                  navigate("/english/2023/ais/isd-question", {
                    state: {
                      direction: "up",
                      previousPage: "/english/2023/ais",
                      affiliation: option.affiliation,
                    },
                  });
                }, 300);
              }}
              className="
                bg-gradient-to-b from-teal-50 to-cyan-100
                border border-cyan-200 rounded-[32px] px-10 py-8
                text-center shadow-md hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-semibold">{option.label}</h3>
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
