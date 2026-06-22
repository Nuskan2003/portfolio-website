import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <p className="text-lg leading-relaxed">
              I am a passionate Full Stack Developer
              focused on building scalable web
              applications and intuitive user
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="p-6 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold">
                5+
              </h3>
              <p>Projects Completed</p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold">
                React
              </h3>
              <p>Main Frontend Stack</p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold">
                Node
              </h3>
              <p>Backend Development</p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold">
                MySQL
              </h3>
              <p>Database Design</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;