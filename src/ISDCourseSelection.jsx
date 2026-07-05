import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function ISDCourseSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage =
    location.state?.previousPage ||
    "/english/pathway1/ais/isd";

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
      <main className="max-w-6xl mx-auto px-6 pt-4">
        <div className="pt-2">
          <button
            onClick={() => {
              setExitDirection("down");

              setTimeout(() => {
                navigate(previousPage, {
                  state: {
                    direction: "down",
                  },
                });
              }, 300);
            }}
            className="
              inline-flex
              items-center
              px-6
              py-3
              rounded-full
              bg-gray-100
              text-gray-800
              font-medium
              shadow-sm
              hover:bg-gray-200
              hover:shadow-md
              transition-all
              duration-300
            "
          >
            Back
          </button>
        </div>

        <section className="text-center py-10">
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Since you are in the{" "}
            <span className="font-bold text-gray-800">
              Innovation, Design and Technology (ISD)
            </span>
            , you are required to take the following course:
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
            <a
                href="https://cle.hkust.edu.hk/courses/lang4036"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    block
                    bg-gradient-to-b
                    from-teal-50
                    to-cyan-100
                    border
                    border-cyan-200
                    rounded-[32px]
                    p-10
                    text-left
                    shadow-md
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                "
            >
                <h3 className="text-4xl font-semibold mb-4">
                    LANG 4036
                </h3>

                <p className="text-gray-700 text-lg mb-4">
                    Technical Communication for Technology Projects
                </p>

                <span className="text-cyan-700 font-medium">
                    View Course Details
                </span>
            </a>
        </section>

        <section className="text-center mt-10">
          <p className="text-lg text-gray-600 mb-6">
            Click on the button below to see what's next after this course.
          </p>

          <button
            onClick={() => {
                setExitDirection("up");

                setTimeout(() => {
                    navigate("/english/pathway1/science/advanced-communication", {
                        state: {
                            direction: "up",
                            previousPage: "/english/pathway1/ais/isd/yes",
                        },
                    });
                }, 300);
            }}
            className="
              inline-flex
              items-center
              justify-center
              min-w-[220px]
              px-10
              py-5
              rounded-[32px]
              bg-gradient-to-b
              from-blue-50
              to-indigo-100
              border
              border-blue-200
              text-blue-700
              text-lg
              font-semibold
              shadow-md
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            Continue
          </button>
        </section>
      </main>
    </motion.div>
  );
}