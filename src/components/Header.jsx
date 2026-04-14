// export default Header;

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Мангал-Черноголовка</div>
      <nav
        className={`${styles.nav} ${isMenuOpen ? styles.navMobileOpen : ""}`}
      >
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          О нас
        </ScrollLink>
        <ScrollLink
          to="menu"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          Меню
        </ScrollLink>
        <ScrollLink
          to="why-us"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          Почему выбирают нас
        </ScrollLink>
        <ScrollLink
          to="gallery"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          Галерея
        </ScrollLink>
        <ScrollLink
          to="delivery"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          Доставка
        </ScrollLink>
        <ScrollLink
          to="contacts"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          Контакты
        </ScrollLink>
        <a
          href="https://delivery.restik.com/cafe-cafe"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.orderBtn} btn`} // Применяем класс btn для стилизации
        >
          Оформить заказ
        </a>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </header>
  );
};

export default Header;
