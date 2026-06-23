import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function AnimatedBackground() {
  const { darkMode } =
    useContext(ThemeContext);

  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <div
        style={{
          position: "absolute",
          left: position.x - 300,
          top: position.y - 300,
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: darkMode
            ? "radial-gradient(circle, rgba(59,130,246,0.25), rgba(168,85,247,0.20), rgba(34,211,238,0.15), transparent 75%)"
            : "radial-gradient(circle, rgba(59,130,246,0.18), rgba(168,85,247,0.12), transparent 70%)",

          transition:
            "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
    </div>
  );
}

export default AnimatedBackground;