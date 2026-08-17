import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


export default function ISDQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  // Prefer deriving year and pathway from the URL when present so direct links work
  const urlYearMatch = location.pathname.match(/^\/english\/(\d{4})\//);
  const year = urlYearMatch ? urlYearMatch[1] : sessionStorage.getItem("englishYear") || "2026";
  const urlPathwayMatch = location.pathname.match(/^\/english\/\d{4}\/(pathway1|pathway2)(?:\/|$)/);
  const pathway = urlPathwayMatch
    ? urlPathwayMatch[1]
    : sessionStorage.getItem("pathwayOrigin") === "pathway2"
    ? "pathway2"
    : "pathway1";

  const previousPage =
    location.state?.previousPage ||
    `/english/${year}/${pathway}/ais`;

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
            Academy of Interdisciplinary Studies
          </h2>

          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Are you in the{" "}
            <span className="font-bold text-gray-800">
              Integrative Systems and Design (ISD)
            </span>{" "}
            program?
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <button
            onClick={() => {
                setExitDirection("up");

                setTimeout(() => {
                                    navigate(`/english/${year}/${pathway}/ais/isd/yes`, {
                                      state: {
                                        direction: "up",
                                        previousPage: `/english/${year}/${pathway}/ais/isd`,
                                      },
                                    });
                                }, 300);
            }}
            className="
              bg-gradient-to-b
              from-teal-50
              to-cyan-100
              border
              border-cyan-200
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
                                    const nextRoute = pathway === "pathway1"
                                      ? `/english/${year}/${pathway}/ais/other-courses`
                                      : `/english/${year}/${pathway}/ais/advanced-communication`;

                                    navigate(nextRoute, {
                                        state: {
                                            direction: "up",
                                            previousPage: location.pathname,
                                        },
                                    });
                                }, 300);
            }}
            className="
              bg-gradient-to-b
              from-teal-50
              to-cyan-100
              border
              border-cyan-200
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