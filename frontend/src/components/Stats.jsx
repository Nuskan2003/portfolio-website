import { motion } from "framer-motion";

const stats = [
  {
    value: "5+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "2+",
    label: "Years Learning",
  },
  {
    value: "100%",
    label: "Passion",
  },
];

function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{
                scale: 1.05,
              }}
              className="backdrop-blur-lg bg-white/60 border rounded-3xl p-8 text-center shadow-xl"
            >
              <h3 className="text-5xl font-bold text-blue-600">
                {stat.value}
              </h3>

              <p className="mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;