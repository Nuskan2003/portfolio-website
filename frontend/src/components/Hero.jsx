import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm">
              Welcome To My Portfolio
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Hi, I'm
              <span className="block text-blue-600">
                Nuskan Nazar
              </span>
            </h1>

            <div className="text-2xl mt-6 font-medium">

              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Node.js Developer",
                  2000,
                  "UI Enthusiast",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />

            </div>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              I build modern web applications with
              exceptional user experiences using React,
              Node.js, Express, and MySQL.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border rounded-xl hover:scale-105 transition"
              >
                Contact Me
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={profile}
                alt="Profile"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl"
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;