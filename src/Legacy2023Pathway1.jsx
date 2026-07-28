import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Legacy2023Pathway1() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  const [exitDirection, setExitDirection] = useState("up");

  useEffect(() => {
    sessionStorage.setItem("legacy2023PathwayOrigin", "pathway1");
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <div className="pt-2 flex items-center justify-between">
          <button
            onClick={() => {
              setExitDirection("down");
              setTimeout(() => {
                navigate("/english/2023/pathways", {
                  state: { direction: "down" },
                });
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

        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            Pathway 1
          </h2>
          <p className="text-xl text-gray-600">
            Required Common Core courses (6 credits)
          </p>
        </section>

        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="https://cle.hkust.edu.hk/courses/lang1401"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block bg-gradient-to-b from-blue-50 to-indigo-100
              border border-blue-200 rounded-[32px] p-10 text-left
              shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
            "
          >
            <h3 className="text-4xl font-semibold mb-4">LANG 1401 / 1402</h3>
            <p className="text-gray-700 text-lg mb-4">
              English for University Studies (3 credits)
            </p>
            <span className="text-blue-600 font-medium">View Course Details</span>
          </a>

          <a
            href="https://cle.hkust.edu.hk/courses/lang1403"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block bg-gradient-to-b from-blue-50 to-indigo-100
              border border-blue-200 rounded-[32px] p-10 text-left
              shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
            "
          >
            <h3 className="text-4xl font-semibold mb-4">LANG 1403</h3>
            <p className="text-gray-700 text-lg mb-4">
              English for Professional Communication (3 credits)
            </p>
            <span className="text-blue-600 font-medium">View Course Details</span>
          </a>
        </section>

        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">
            Click on the button below to see what's next after these courses.
          </p>
          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/english/2023/school", {
                  state: {
                    direction: "up",
                    previousPage: "/english/2023/pathway1",
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