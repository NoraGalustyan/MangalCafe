// components/ScrollButton.tsx
import { useEffect, useState } from "react";
import styles from "../styles/ScrollButton.module.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показываем кнопку, если прокрутка больше 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className={`${styles.scrollBtn} btn-scroll-up`}
        aria-label="Наверх"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollButton;
