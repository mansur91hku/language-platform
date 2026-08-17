import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


export default function Legacy2023SSCICourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage =
    location.state?.previousPage || "/english/2023/school";

  const [exitDirection, setExitDirection] = useState("up");

  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <PageNavBar onBack={() => {
            setExitDirection("down");
            setTimeout(() => {
              navigate(previousPage, { state: { direction: "down" } });
            }, 300);
          }} />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            School of Science
          </h2>
          <p className="text-xl text-gray-600">
            Required school course (3 credits)
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <a
            href="https://cle.hkust.edu.hk/courses/lang2010"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block bg-gradient-to-b from-sky-50 to-blue-100
              border border-blue-200 rounded-[32px] p-10 text-left
              shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
            "
          >
            <h3 className="text-4xl font-semibold mb-4">LANG 2010</h3>
            <p className="text-gray-700 text-lg mb-4">
              English for Science I (3 credits)
            </p>
            <span className="text-blue-600 font-medium">View Course Details</span>
          </a>
        </section>

        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">
            Click the button below to answer a few questions about your program.
          </p>
          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/english/2023/ais/lang2062", {
                  state: {
                    direction: "up",
                    previousPage: location.pathname,
                    affiliation: "SSCI",
                  },
                });
              }, 300);
            }}
            className="
              inline-flex items-center justify-center
              min-w-[220px] px-10 py-5 rounded-[32px]
              bg-gradient-to-b from-blue-50 to-indigo-100
              border border-blue-200 text-blue-700 text-lg font-semibold
              shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
            "
          >
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}
