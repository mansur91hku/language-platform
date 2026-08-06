import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Legacy2023PathwaySelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  const [exitDirection, setExitDirection] = useState("up");

  useEffect(() => {
    sessionStorage.removeItem("legacy2023PathwayOrigin");
  }, []);

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
              navigate("/english", { state: { direction: "down" } });
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

        <section className="text-center py-8">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            English
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            Students are streamed to different pathways according to their
            English qualifications on admission.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Click below to read the details of the streaming criteria.
          </p>
          <a
            href="https://cle.hkust.edu.hk/sites/default/files/E-Comm%20Streaming%20Table_2024-25_CLE%20Website_Updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center px-6 py-3 rounded-full
              bg-blue-600 text-white font-medium shadow-sm
              hover:bg-blue-700 hover:shadow-md transition-all duration-300
            "
          >
            View Streaming Criteria
          </a>
        </section>

        <section className="text-center mb-10">
          <h3 className="text-4xl font-semibold tracking-tight">
            Select your pathway
          </h3>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/english/2023/pathway1", {
                  state: { direction: "up" },
                });
              }, 300);
            }}
            className="
              group bg-gradient-to-b from-blue-50 to-indigo-100
              border border-blue-200 rounded-[32px] p-10 text-left
              shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
            "
          >
            <h3 className="text-4xl font-semibold mb-4">Pathway 1</h3>
            <p className="text-gray-700">
              for students who have met the English admission requirement
            </p>
          </button>

          <button
            onClick={() => {
              setExitDirection("up");
              setTimeout(() => {
                navigate("/english/2023/pathway2", {
                  state: { direction: "up" },
                });
              }, 300);
            }}
            className="
              group bg-gradient-to-b from-blue-50 to-indigo-100
              border border-blue-200 rounded-[32px] p-10 text-left
              shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
            "
          >
            <h3 className="text-4xl font-semibold mb-4">Pathway 2</h3>
            <p className="text-gray-700">
              for students whose proficiency level is beyond the English language
              admission requirement
            </p>
          </button>
        </section>
      </main>
    </motion.div>
  );
}