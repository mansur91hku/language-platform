import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function AdvancedCommunicationCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage =
    location.state?.previousPage ||
    "/english/pathway1/science/ost/no";

  const [exitDirection, setExitDirection] = useState("up");

  const initialDirection =
    location.state?.direction === "down"
      ? "-100%"
      : "100%";

  const courses = [
    {
      code: "LANG 2063",
      title: "Writing for Workplace Success",
      url: "https://cle.hkust.edu.hk/courses/lang2063",
    },
    {
      code: "LANG 2064",
      title: "Speaking for Workplace Success",
      url: "https://cle.hkust.edu.hk/courses/lang2064",
    },
    {
      code: "LANG 2065",
      title: "Research Writing",
      url: "https://cle.hkust.edu.hk/courses/lang2065",
    },
    {
      code: "LANG 2066",
      title:
        "Dynamic Science Communication: Engaging Audiences with Science Busking",
      url: "https://cle.hkust.edu.hk/courses/lang2066",
    },
    {
      code: "LANG 2067",
      title:
        "Digital Communication: Expressing Your Perspective in Digital Spaces",
      url: "https://cle.hkust.edu.hk/courses/lang2067",
    },
    {
      code: "LANG 2068",
      title: "Speaking with Impact",
      url: "https://cle.hkust.edu.hk/courses/lang2068",
    },
    {
      code: "LANG 2069",
      title: "Supercommunication Offline and On: The Art of Connecting",
      url: "https://cle.hkust.edu.hk/courses/lang2069",
    },
    {
      code: "LANG 2071",
      title:
        "From Proposal to Applause: Navigating the Academic Conference Journey",
      url: "https://cle.hkust.edu.hk/courses/lang2071",
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
      <main className="max-w-7xl mx-auto px-6 pt-4">
        <div className="pt-2 flex items-center justify-between">
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
          <button
            onClick={() => {
              setExitDirection("down");

              setTimeout(() => {
                navigate("/", {
                  state: { direction: "down" },
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
            Home
          </button>
        </div>

        <section className="text-center py-10">
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto">
            Now you may also take the following{" "}
            <span className="font-bold text-gray-800">
                Advanced Communication
            </span>{" "}
                courses under the English Communication group, as{" "}
            <span className="font-bold italic text-gray-800">
                free electives
            </span>{" "}
                or as{" "}
            <span className="font-bold italic text-gray-800">
                a substitute for credits in{" "}
                <a
                    href="https://uce.ust.hk/web/courses_2025/curriculum.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    CTDL or UxOP Common Core
                </a>
            </span>{" "}
            areas.
           </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
          {courses.map((course) => (
            <a
              key={course.code}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                bg-gradient-to-b
                from-blue-50
                to-indigo-100
                border
                border-blue-200
                rounded-[32px]
                p-8
                text-left
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h3 className="text-3xl font-semibold mb-3">
                {course.code}
              </h3>

              <p className="text-gray-700 mb-4">
                {course.title}
              </p>

              <span className="text-blue-700 font-medium">
                View Course Details
              </span>
            </a>
          ))}
        </section>
      </main>
    </motion.div>
  );
}