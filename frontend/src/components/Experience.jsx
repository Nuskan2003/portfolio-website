import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    title: "Portfolio Website",
    description: "Designed and developed a modern full-stack portfolio.",
  },
  {
    year: "2025",
    title: "Indoor Sports Booking System",
    description: "Built a sports facility booking platform using React and Node.js.",
  },
  {
    year: "2024",
    title: "Travel Information System",
    description: "Developed a travel planning web application.",
  },
  {
    year: "2023",
    title: "Library Management System",
    description: "Created a desktop-based library management solution.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Experience & Projects
        </h2>

        <div className="relative border-l-4 border-blue-600 ml-6">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-12 ml-8"
            >
              <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[11px]" />

              <span className="text-blue-600 font-bold">
                {item.year}
              </span>

              <h3 className="text-2xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-slate-500 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;