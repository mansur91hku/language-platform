import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function AISCourseSelection() {
  const navigate = useNavigate();
  const location = useLocation();

  const [exitDirection, setExitDirection] = useState("up");

  const initialDirection =
    location.state?.direction === "down"
      ? "-100%"
      : "100%";

  const courses = [
    {
      code: "LANG 1406",
      title: "Academic English for Business Studies",
      url: "https://cle.hkust.edu.hk/courses/lang1406",
      color: "from-emerald-50 to-green-100 border-green-200",
      textColor: "text-green-700",
    },
    {
      code: "LANG 1407",
      title: "Academic English for Engineering Studies",
      url: "https://cle.hkust.edu.hk/courses/lang1407",
      color: "from-orange-50 to-amber-100 border-amber-200",
      textColor: "text-orange-700",
    },
    {
      code: "LANG 1408",
      title: "Academic English for Humanities and Social Science Studies",
      url: "https://cle.hkust.edu.hk/courses/lang1408",
      color: "from-purple-50 to-violet-100 border-violet-200",
      textColor: "text-violet-700",
    },
    {
      code: "LANG 1409",
      title: "Academic English for Science Studies",
      url: "https://cle.hkust.edu.hk/courses/lang1409",
      color: "from-sky-50 to-blue-100 border-blue-200",
      textColor: "text-blue-700",
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
                navigate("/english/pathway1/school", {
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
            Academy of Interdisciplinary Studies
          </h2>

          <p className="text-xl text-gray-600">
            You may select any of these four courses
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
            {courses.map((course) => (
                <a
                  key={course.code}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block bg-gradient-to-b ${course.color} border rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
                >
                <h3 className="text-4xl font-semibold mb-4">
                    {course.code}
                </h3>

                <p className="text-gray-700 text-lg mb-4">
                    {course.title}
                </p>

                <span className={`${course.textColor} font-medium`}>
                    View Course Details
                </span>
                </a>
            ))}
        </section>
        <section className="text-center mt-10">
            <p className="text-lg text-gray-600 mb-6">
                Click on the button below to see what's next after this course.
            </p>

            <button
              onClick={() => {
                setExitDirection("up");

                setTimeout(() => {
                  navigate("/english/pathway1/ais/isd", {
                    state: {
                      direction: "up",
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