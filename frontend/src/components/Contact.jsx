import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaFileDownload,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 pointer-events-none">

        <div
          className="
            absolute
            top-20
            left-20
            w-80
            h-80
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-10
            right-10
            w-96
            h-96
            rounded-full
            bg-purple-500/10
            blur-3xl
          "
        />

      </div>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-blue-100
              dark:bg-slate-800
              text-blue-600
              dark:text-blue-300
              font-semibold
              mb-6
            "
          >
            Get In Touch
          </span>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-bold
              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            Let's Build Something Amazing
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-400
            "
          >
            Have an internship opportunity,
            freelance project or simply want
            to connect? I'd love to hear from
            you.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              bg-white/80
              dark:bg-slate-900/70
              backdrop-blur-xl
              border
              border-slate-200
              dark:border-slate-700
              shadow-2xl
              p-8
            "
          >

            <h3 className="text-3xl font-bold">
              Let's Work Together
            </h3>

            <p
              className="
                mt-5
                leading-8
                text-slate-600
                dark:text-slate-400
              "
            >
              I'm currently available for
              internships and software
              development opportunities.
              Whether you have an exciting
              project or simply want to
              connect, feel free to reach
              out.
            </p>

            <div className="space-y-7 mt-10">

              <div className="flex items-center gap-5">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-blue-100
                    dark:bg-slate-800
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaEnvelope
                    className="text-blue-500"
                  />
                </div>

                <div>

                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="text-slate-500 dark:text-slate-400">
                    nuskanm988@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-blue-100
                    dark:bg-slate-800
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaMapMarkerAlt
                    className="text-blue-500"
                  />
                </div>

                <div>

                  <p className="font-semibold">
                    Galle
                  </p>

                  <p className="text-slate-500 dark:text-slate-400">
                    Sri Lanka
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-green-100
                    dark:bg-green-900/40
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div>

                  <p className="font-semibold">
                    Status
                  </p>

                  <p className="text-green-600 font-medium">
                    Available for Internships
                  </p>

                </div>

              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-12">

              <a
                href="https://github.com/Nuskan2003"
                target="_blank"
                rel="noreferrer"
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-slate-900
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:scale-110
                  transition
                "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammadunuskan/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-600
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:scale-110
                  transition
                "
              >
                <FaLinkedin size={22} />
              </a>

              <Link
                to="/resume"
                className="
                  flex
                  items-center
                  gap-3
                  px-6
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-600
                  text-white
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                <FaFileDownload />

                Resume
              </Link>

            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              bg-white/80
              dark:bg-slate-900/70
              backdrop-blur-xl
              border
              border-slate-200
              dark:border-slate-700
              shadow-2xl
              p-8
              space-y-6
            "
          >

            <h3 className="text-3xl font-bold mb-2">
              Send Me a Message
            </h3>

            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Fill out the form below and I'll get back to you
              as soon as possible.
            </p>

            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                p-4
                rounded-2xl
                border
                border-slate-300
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                transition
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                p-4
                rounded-2xl
                border
                border-slate-300
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                transition
              "
            />

            <input
              type="text"
              placeholder="Subject"
              className="
                w-full
                p-4
                rounded-2xl
                border
                border-slate-300
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                transition
              "
            />

            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              className="
                w-full
                p-4
                rounded-2xl
                border
                border-slate-300
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                transition
              "
            />

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                via-purple-600
                to-cyan-500
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                hover:scale-[1.02]
                transition
                shadow-lg
              "
            >
              <FaPaperPlane />

              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;