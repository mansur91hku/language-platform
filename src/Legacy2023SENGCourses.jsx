import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Legacy2023SENGCourses() {
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

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            School of Engineering
          </h2>
          <p className="text-xl text-gray-600">
            Required school course (3 credits)
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <a
            href="https://cle.hkust.edu.hk/courses/lang2030"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block bg-gradient-to-b from-orange-50 to-amber-100
              border border-amber-200 rounded-[32px] p-10 text-left
              shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
            "
          >
            <h3 className="text-4xl font-semibold mb-4">LANG 2030</h3>
            <p className="text-gray-700 text-lg mb-4">
              Technical Communication I (3 credits)
            </p>
            <span className="text-orange-700 font-medium">View Course Details</span>
          </a>
        </section>

        <section className="text-center mt-10 pb-16">
          <p className="text-lg text-gray-600 mb-6">
            After completing this course, you may also take Advanced
            Communication courses.
          </p>
          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/english/pathway1/science/advanced-communication", {
                  state: {
                    direction: "up",
                    previousPage: "/english/2023/seng",
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
