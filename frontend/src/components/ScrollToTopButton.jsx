import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener(
      "scroll",
      toggleVisibility
    );

    return () =>
      window.removeEventListener(
        "scroll",
        toggleVisibility
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-8
        right-8
        z-50
        w-14
        h-14
        rounded-full
        bg-gradient-to-r
        from-blue-600
        via-purple-600
        to-cyan-500
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-blue-500/40
        flex
        items-center
        justify-center
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }
      `}
    >
      <FaArrowUp size={18} />
    </button>
  );
}

export default ScrollToTopButton;