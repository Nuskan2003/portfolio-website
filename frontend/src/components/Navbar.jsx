import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-xl
        bg-white/10
        border-b
        border-white/20
        shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link to="/">
          <h1
            className="
              text-2xl
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
          </h1>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 font-medium">

          <li>
            <Link to="/">Home</Link>
          </li>

          {isHomePage && (
            <>
              <li>
                <a href="#about">
                  About
                </a>
              </li>

              <li>
                <a href="#skills">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>
            </>
          )}

        </ul>

        {/* Desktop Actions */}

        <div className="hidden md:flex items-center gap-4">

          <Link
            to="/resume"
            download
            className="
              px-4
              py-2
              rounded-lg
              bg-blue-600
              text-white
              hover:bg-blue-700
              transition
            "
          >
            Resume
          </Link>

          <a
            href="https://github.com/Nuskan2003"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammadunuskan/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={22} />
          </a>

          <ThemeToggle />

        </div>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          className="
            md:hidden
            backdrop-blur-xl
            bg-white/20
            border-t
            border-white/20
            p-6
          "
        >
          <ul className="space-y-4 font-medium">

            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {isHomePage && (
              <>
                <li>
                  <a href="#about">
                    About
                  </a>
                </li>

                <li>
                  <a href="#skills">
                    Skills
                  </a>
                </li>

                <li>
                  <a href="#projects">
                    Projects
                  </a>
                </li>

                <li>
                  <a href="#contact">
                    Contact
                  </a>
                </li>
              </>
            )}

          </ul>

          <div className="flex gap-4 mt-6">

            <a
              href="https://github.com/Nuskan2003"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammadunuskan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={22} />
            </a>

            <ThemeToggle />

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;