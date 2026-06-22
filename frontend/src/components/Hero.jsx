import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl font-bold"
        >
          Nuskan Nazar
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Node.js Developer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-2xl mt-4"
        />

        <div className="mt-8 flex justify-center gap-4">

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            View Projects
          </button>

          <button className="px-6 py-3 border rounded-lg">
            Contact Me
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;