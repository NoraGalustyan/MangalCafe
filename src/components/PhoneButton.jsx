// components/PhoneButton.tsx
import { useEffect, useState } from "react";
import styles from "../styles/PhoneButton.module.css";

const PhoneButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Высота футера (вам нужно будет определить ее точно, или задать фиксированное значение)
      // Предположим, футер имеет высоту около 200px
      const footerHeight = 200; // Может потребоваться точная настройка
      const footerElement = document.querySelector("footer");
      const footerActualHeight = footerElement
        ? footerElement.offsetHeight
        : footerHeight;

      const scrollThreshold = footerActualHeight + 50; // Показать кнопку, пока до футера не останется N пикселей
      setIsVisible(
        window.innerHeight + window.scrollY <
          document.body.offsetHeight - scrollThreshold,
      );
      // Альтернатива: спрятать, когда прокрутка слишком большая
      // const hide = window.location.hash !== '' && window.scrollY > 300; // Пример, если есть якоря
      // setIsVisible(!hide);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <div className={styles.phoneButtonContainer}>
        {" "}
        {/* Контейнер для позиционирования */}
        <a
          href="tel:+74965241234"
          className={`${styles.phoneBtn} animate-pulse`}
          aria-label="Позвонить"
        >
          {/* Можно добавить иконку телефона из react-icons */}
          📞 {/* Пример */}
        </a>
      </div>
    )
  );
};

export default PhoneButton;
