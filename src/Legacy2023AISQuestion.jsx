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
    { label: "My program is affiliated with SENG", route: "/english/2023/ais/seng" },
    { label: "My program is affiliated with SHSS", route: "/english/2023/ais/shss" },
    { label: "My program is affiliated with SSCI", route: "/english/2023/ais/ssci" },
    { label: "Marine Environmental Chemistry (MAEC)", route: "/english/2023/ais/maec" },
    { label: "Innovation, Sustainability and Design (ISD)", route: "/english/2023/ais/isd" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <main className="max-w-5xl mx-auto px-6 pt-4">
        <div className="pt-2 flex items-center justify-between">
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
            "
          >
            Home
          </button>
        </div>

        <section className="text-center py-12">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            Academy of Interdisciplinary Studies
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Which best describes your program?
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 max-w-3xl mx-auto pb-16">
          {options.map((option) => (
            <button
              key={option.label}
              onClick={() => {
                setExitDirection("up");
                setTimeout(() => {
                  navigate(option.route, {
                    state: {
                      direction: "up",
                      previousPage: "/english/2023/ais",
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