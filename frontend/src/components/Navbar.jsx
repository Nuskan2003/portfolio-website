import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b">

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

        <div className="hidden md:flex items-center gap-4">

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Resume
          </button>

          <FaGithub size={22} />

          <FaLinkedin size={22} />

          <ThemeToggle />

        </div>

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

      {menuOpen && (
        <div className="md:hidden bg-white p-6">

          <ul className="space-y-4">

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#skills">Skills</a></li>

            <li><a href="#projects">Projects</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;