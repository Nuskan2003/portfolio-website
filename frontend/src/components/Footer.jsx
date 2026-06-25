import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        mt-24
        border-t
        border-slate-200
        dark:border-slate-800
        bg-white/60
        dark:bg-slate-950/60
        backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            -top-20
            -left-20
            w-72
            h-72
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-80
            h-80
            rounded-full
            bg-purple-500/10
            blur-3xl
          "
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}

          <div>

            <h2
              className="
                text-4xl
                font-bold
                bg-gradient-to-r
                from-blue-500
                via-purple-500
                to-cyan-400
                text-transparent
                bg-clip-text
              "
            >
              Nuskan Nazar
            </h2>

            <p
              className="
                mt-5
                leading-8
                text-slate-600
                dark:text-slate-400
              "
            >
              Passionate Full Stack Developer
              focused on building modern,
              responsive and user-friendly
              web applications with clean
              UI and scalable backend
              solutions.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#home"
                  className="hover:text-blue-500 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-blue-500 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-500 transition"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-500 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-500 transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Connect
            </h3>

            <div className="flex gap-4 flex-wrap">

              <a
                href="https://github.com/Nuskan2003"
                target="_blank"
                rel="noreferrer"
                className="
                  w-14
                  h-14
                  rounded-xl
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
                  rounded-xl
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

            </div>

            <button
              onClick={scrollToTop}
              className="
                mt-10
                flex
                items-center
                gap-3
                text-blue-500
                font-semibold
                hover:translate-y-[-2px]
                transition
              "
            >
              <FaArrowUp />

              Back to Top
            </button>

          </div>

        </div>

        <div
          className="
            mt-16
            pt-8
            border-t
            border-slate-200
            dark:border-slate-800
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          <p className="text-slate-500 text-sm">
            © 2026 Nuskan Nazar. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Built with React • Tailwind CSS • Framer Motion
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;