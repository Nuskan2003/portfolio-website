import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;