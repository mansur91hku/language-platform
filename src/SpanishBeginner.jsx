import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


export default function SpanishBeginner() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  const navBtn =
    "inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300 pointer-events-auto";

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <PageNavBar onBack={() => { setExitDirection("down"); setTimeout(() => navigate("/third-languages", { state: { direction: "down" } }), 300); }} />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">Spanish</h2>
          <p className="text-xl text-gray-600">Beginner Level</p>
        </section>

        <section className="flex justify-center">
          <a
            href="https://cle.hkust.edu.hk/courses/lang1330"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full md:w-1/2 bg-gradient-to-b from-yellow-50 to-amber-100 border border-amber-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h4 className="text-3xl font-semibold mb-3">LANG 1330</h4>
            <p className="text-gray-700 mb-4">Spanish Language and Culture for Beginners I</p>
            <span className="text-amber-700 font-medium">View Course Details</span>
          </a>
        </section>

        <section className="text-center mt-10 pb-20">
          <p className="text-lg text-gray-600 mb-6">
            Click on the button below to see the upper-beginner level Spanish course.
          </p>
          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => navigate("/third-languages/spanish/upper-beginner", { state: { direction: "up" } }), 300);
            }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-yellow-50 to-amber-100 border border-amber-200 text-amber-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}
