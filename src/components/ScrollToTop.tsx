
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
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
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-6 right-6 bg-fg-black text-fg-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-40`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
