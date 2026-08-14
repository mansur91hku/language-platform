import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import { getEnglishYear, getPathwayOrigin } from "./utils/englishYear";

export default function OSTQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const year = getEnglishYear() || "2026";
  const pathway = getPathwayOrigin() === "pathway2" ? "pathway2" : "pathway1";
  const previousPage =
    location.state?.previousPage ||
    `/english/${year}/${pathway}/science`;

  const [exitDirection, setExitDirection] = useState("up");

  const initialDirection =
    location.state?.direction === "down"
      ? "-100%"
      : "100%";

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
              navigate(previousPage, { state: { direction: "down" } });
            }, 300);
          }} />
      <main className="max-w-5xl mx-auto px-6 pt-4">

        <section className="text-center py-16">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            School of Science
          </h2>

          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Are you in the <span className="font-bold text-gray-800">
                Ocean Science and Technology (OST)
            </span>{" "}
            program?
           </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <button
            onClick={() => {
                setExitDirection("up");

                setTimeout(() => {
                    navigate(`/english/${year}/${pathway}/science/ost/yes`, {
                      state: {
                        direction: "up",
                        previousPage: location.pathname,
                      },
                    });
                }, 300);
            }}
            className="
              bg-gradient-to-b
              from-sky-50
              to-blue-100
              border
              border-blue-200
              rounded-[32px]
              p-10
              text-center
              shadow-md
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <h3 className="text-4xl font-semibold">
              Yes
            </h3>
          </button>

          <button
            onClick={() => {
                setExitDirection("up");

                setTimeout(() => {
                    navigate(`/english/${year}/${pathway}/science/ost/no`, {
                      state: {
                        direction: "up",
                        previousPage: location.pathname,
                      },
                    });
                }, 300);
            }}
            className="
              bg-gradient-to-b
              from-sky-50
              to-blue-100
              border
              border-blue-200
              rounded-[32px]
              p-10
              text-center
              shadow-md
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <h3 className="text-4xl font-semibold">
              No
            </h3>
          </button>
        </section>
      </main>
    </motion.div>
  );
}