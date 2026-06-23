import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";

const badges = [
  { name: "React", top: "-10%", left: "40%", duration: 3.2 },
  { name: "HTML", top: "10%", left: "-20%", duration: 3.8 },
  { name: "JavaScript", top: "10%", right: "-25%", duration: 4.1 },
  { name: "CSS", top: "40%", left: "-30%", duration: 3.5 },
  { name: "Node.js", top: "40%", right: "-30%", duration: 4.3 },
  { name: "MySQL", bottom: "15%", left: "-25%", duration: 3.7 },
  { name: "Express", bottom: "15%", right: "-25%", duration: 4.0 },
  { name: "Java", bottom: "-10%", left: "15%", duration: 3.4 },
  { name: "GitHub", bottom: "-10%", right: "15%", duration: 4.2 },
  { name: "Python", bottom: "-20%", left: "40%", duration: 3.9 },
];

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span
              className="
                px-4
                py-2
                rounded-full
                bg-blue-100
                text-blue-600
                text-sm
              "
            >
              Welcome To My Portfolio
            </span>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-bold
                mt-6
                leading-tight
              "
            >
              Hi, I'm

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-500
                  via-purple-500
                  to-cyan-400
                  text-transparent
                  bg-clip-text
                "
              >
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

            <p className="mt-6 text-lg text-slate-500">
              I build modern, scalable web applications
              with exceptional user experiences using
              React, Node.js, Express, and MySQL.
            </p>

          </motion.div>

          {/* Right Content */}

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="relative">

              {/* Floating Badges */}

              {badges.map((badge) => (
                <motion.div
                  key={badge.name}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: badge.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    px-5
                    py-2
                    rounded-full
                    backdrop-blur-xl
                    bg-white/80
                    dark:bg-slate-800/80
                    border
                    border-white/20
                    shadow-xl
                    text-sm
                    font-medium
                    whitespace-nowrap
                  "
                  style={badge}
                >
                  {badge.name}
                </motion.div>
              ))}

              {/* Gradient Glow Ring */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  via-purple-500
                  to-cyan-500
                  blur-2xl
                  opacity-30
                  scale-110
                "
              />

              {/* Profile Image */}

              <img
                src={profile}
                alt="Profile"
                className="
                  relative
                  w-80
                  h-80
                  rounded-full
                  object-cover
                  border-4
                  border-white
                  shadow-2xl
                "
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;