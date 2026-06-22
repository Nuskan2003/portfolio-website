import ThemeToggle from "./ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Nuskan Nazar
        </h1>

        <ul className="hidden md:flex gap-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">

          <a
            href="#"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Resume
          </a>

          <a href="#">
            <FaGithub size={22} />
          </a>

          <a href="#">
            <FaLinkedin size={22} />
          </a>

          <ThemeToggle />

        </div>

      </div>
    </nav>
  );
}

export default Navbar;