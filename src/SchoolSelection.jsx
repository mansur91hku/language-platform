import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function SchoolSelection() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathwayOrigin = sessionStorage.getItem("pathwayOrigin");
  const previousPage =
    pathwayOrigin === "pathway1"
      ? "/english/pathway1"
      : "/english/pathways";

  const [exitDirection, setExitDirection] = useState("up");

  const initialDirection =
    location.state?.direction === "down"
      ? "-100%"
      : "100%";

  const schools = [
  {
    name: "School of Science (SSCI)",
    cardClass: "from-sky-50 to-blue-100 border-blue-200",
  },
  {
    name: "School of Engineering (SENG)",
    cardClass: "from-orange-50 to-amber-100 border-amber-200",
  },
  {
    name: "School of Business and Management (SBM)",
    cardClass: "from-emerald-50 to-green-100 border-green-200",
  },
  {
    name: "School of Humanities and Social Science (SHSS)",
    cardClass: "from-purple-50 to-violet-100 border-violet-200",
  },
  {
    name: "School of Medicine (SMED)",
    cardClass: "from-rose-50 to-red-100 border-red-200",
  },
  {
    name: "Academy of Interdisciplinary Studies (AIS)",
    cardClass: "from-teal-50 to-cyan-100 border-cyan-200",
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
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            School Selection
          </h2>

          <p className="text-xl text-gray-600">
            Select your school/faculty:
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
          {schools.map((school) => (
            <button
              key={school.name}
              onClick={() => {
                setExitDirection("up");

                setTimeout(() => {
                  const schoolPath = location.pathname;

                  if (school.name === "School of Science (SSCI)") {
                    navigate("/english/pathway1/science", {
                      state: {
                        direction: "up",
                        previousPage: schoolPath,
                        schoolSelectionPreviousPage: previousPage,
                      },
                    });
                  }

                  if (school.name === "School of Engineering (SENG)") {
                    navigate("/english/pathway1/engineering", {
                      state: {
                        direction: "up",
                        previousPage: schoolPath,
                        schoolSelectionPreviousPage: previousPage,
                      },
                    });
                  }

                  if (school.name === "School of Business and Management (SBM)") {
                    navigate("/english/pathway1/business", {
                      state: {
                        direction: "up",
                        previousPage: schoolPath,
                        schoolSelectionPreviousPage: previousPage,
                      },
                    });
                  }

                  if (school.name === "School of Humanities and Social Science (SHSS)") {
                    navigate("/english/pathway1/humanities", {
                      state: {
                        direction: "up",
                        previousPage: schoolPath,
                        schoolSelectionPreviousPage: previousPage,
                      },
                    });
                  }

                  if (school.name === "Academy of Interdisciplinary Studies (AIS)") {
                    navigate("/english/pathway1/ais", {
                      state: {
                        direction: "up",
                        previousPage: schoolPath,
                        schoolSelectionPreviousPage: previousPage,
                      },
                    });
                  }
                }, 300);
              }}

              className={`group bg-gradient-to-b ${school.cardClass} border rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
            >
              <h3 className="text-2xl font-semibold mb-2">
                {school.name}
              </h3>

              <span className="text-blue-600 font-medium group-hover:underline">
                Continue
              </span>
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}