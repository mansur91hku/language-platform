import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


export default function ChineseBackgroundSelection() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  const [exitDirection, setExitDirection] = useState("up");

  const options = [
    {
      title: "Chinese Language Background",
      subtitle:
        "I studied Chinese as a primary / first language (e.g. HKDSE Chinese, Gaokao Chinese, GSAT, or equivalent)",
      cardClass: "from-rose-50 to-red-100 border-red-200",
      path: "/chinese/background",
    },
    {
      title: "Non-Chinese Language Background",
      subtitle:
        "I am learning Chinese as a foreign / second language (e.g. studied Chinese through HSK levels)",
      cardClass: "from-orange-50 to-amber-100 border-amber-200",
      path: "/chinese/non-background",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{
        y: exitDirection === "up" ? "-100%" : "100%",
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <PageNavBar onBack={() => {
            setExitDirection("down");
            setTimeout(() => {
              navigate("/", { state: { direction: "down" } });
            }, 300);
          }} />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="flex flex-col items-center justify-center text-center py-10 md:py-14">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-5">
            Chinese
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mb-4">
            Please select your Chinese language background to find the right courses for you.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
          {options.map((option) => (
            <button
              key={option.title}
              onClick={() => {
                setExitDirection("up");
                setTimeout(() => {
                  navigate(option.path, {
                    state: { direction: "up" },
                  });
                }, 300);
              }}
              className={`group bg-gradient-to-b ${option.cardClass} border rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
            >
              <h3 className="text-3xl font-semibold mb-3">{option.title}</h3>
              <p className="text-gray-700 mb-6">{option.subtitle}</p>
              <span className="text-red-700 font-medium group-hover:underline">
                View courses
              </span>
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
