import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LanguageHomePage() {
  const navigate = useNavigate();

  const options = [
    {
      title: "English",
      subtitle: "Explore English language courses",
      cardClass: "from-blue-50 to-indigo-100 border-blue-200",
    },
    {
      title: "Chinese",
      subtitle: "Browse Chinese language offerings",
      cardClass: "from-red-50 to-rose-100 border-rose-200",
    },
    {
      title: "Third Languages",
      subtitle:
        "Discover Japanese, Cantonese, Spanish, French, and Korean course options",
      cardClass: "from-emerald-50 to-green-100 border-green-200",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      
      <main className="max-w-7xl mx-auto px-6 pt-8">
        <section className="flex flex-col items-center justify-center text-center py-24 md:py-32">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            Select language
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl">
            Browse language course options and discover your learning path.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
          {options.map((option) => (
            <button
              key={option.title}
              onClick={() => {
                if (option.title === "English") {
                  navigate("/english");
                }
              }}
              className={`group bg-gradient-to-b ${option.cardClass} border rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
            >
              <h3 className="text-3xl font-semibold mb-3">
                {option.title}
              </h3>

              <p className="text-gray-700 mb-6">
                {option.subtitle}
              </p>

              <span className="text-blue-600 font-medium group-hover:underline">
                View courses
              </span>
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}