import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


export default function ChineseLANG1133Elective() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const previousPage = location.state?.previousPage || "/chinese/background/gcs";
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
      <PageNavBar onBack={() => {
            setExitDirection("down");
            setTimeout(() => navigate(previousPage, { state: { direction: "down" } }), 300);
          }} />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">
            Elective Course
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You may also take the following elective:
          </p>
        </section>

        <section className="flex justify-center pb-20">
          <a
            href="https://cle.hkust.edu.hk/courses/lang1133"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full md:w-1/2 bg-gradient-to-b from-rose-50 to-red-100 border border-red-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h4 className="text-3xl font-semibold mb-3">LANG 1133</h4>
            <p className="text-gray-700 mb-4">
              Cantonese for Chinese Language Background Students I
            </p>
            <span className="text-red-700 font-medium">View Course Details</span>
          </a>
        </section>
      </main>
    </motion.div>
  );
}
