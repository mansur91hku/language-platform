import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


export default function CantoneseBackgroundQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  const navBtn =
    "inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300 pointer-events-auto";

  const cardBase =
    "bg-gradient-to-b from-emerald-50 to-green-100 border border-green-200 rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300";

  const options = [
    {
      title: "Chinese Language Background",
      subtitle: "I studied Chinese as a primary / first language",
      path: "/third-languages/cantonese/chinese-background",
    },
    {
      title: "Non-Chinese Language Background",
      subtitle: "I am learning Chinese / Cantonese as a foreign or second language",
      path: "/third-languages/cantonese/non-chinese-background",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <PageNavBar onBack={() => { setExitDirection("down"); setTimeout(() => navigate("/third-languages", { state: { direction: "down" } }), 300); }} />

      <main className="max-w-5xl mx-auto px-6 pt-4">
        <section className="text-center py-16">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">Cantonese</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Do you have a <span className="font-bold text-gray-800">Chinese language background</span>?
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pb-20">
          {options.map((opt) => (
            <button
              key={opt.title}
              onClick={() => {
                setExitDirection("up");
                setTimeout(() => navigate(opt.path, { state: { direction: "up" } }), 300);
              }}
              className={`${cardBase} text-left`}
            >
              <h3 className="text-2xl font-semibold mb-3">{opt.title}</h3>
              <p className="text-gray-700 mb-4">{opt.subtitle}</p>
              <span className="text-emerald-700 font-medium">View courses</span>
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
