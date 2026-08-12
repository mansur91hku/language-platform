import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


export default function CantoneseNonChineseBackground() {
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
      <PageNavBar onBack={() => { setExitDirection("down"); setTimeout(() => navigate("/third-languages/cantonese", { state: { direction: "down" } }), 300); }} />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">Cantonese</h2>
          <p className="text-xl text-gray-600">Non-Chinese Language Background</p>
        </section>

        <section className="flex justify-center">
          <a
            href="https://cle.hkust.edu.hk/courses/lang1130"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full md:w-1/2 bg-gradient-to-b from-emerald-50 to-green-100 border border-green-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h4 className="text-3xl font-semibold mb-3">LANG 1130</h4>
            <p className="text-gray-700 mb-4">Cantonese for Non-Chinese Language Background Students I</p>
            <span className="text-emerald-700 font-medium">View Course Details</span>
          </a>
        </section>

        <section className="text-center mt-10 pb-20">
          <button
            onClick={() => {
              setExitDirection("down");
              setTimeout(() => navigate("/third-languages", { state: { direction: "down" } }), 300);
            }}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 rounded-[32px] bg-gradient-to-b from-emerald-50 to-green-100 border border-green-200 text-emerald-700 text-lg font-semibold shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            Explore other language courses
          </button>
        </section>
      </main>
    </motion.div>
  );
}
