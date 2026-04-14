// components/Footer.tsx
import React from "react";
import styles from "../styles/Footer.module.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaFacebook, // Пример другой соцсети
} from "react-icons/fa"; // Установите 'react-icons': npm install react-icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>Мангал-Черноголовка</h3>
          <p>
            Наш адрес: г. Черноголовка, ул. Центральная, д. 1. <br />
            Работаем ежедневно с 11:00 до 23:00.
          </p>
          <p>
            Телефон: <a href="tel:+74965241234">+7 (496) 524-12-34</a>
          </p>
        </div>
        <div className={styles.socialLinks}>
          <h4>Мы в соцсетях:</h4>
          <div className={styles.icons}>
            <a
              href="https://instagram.com/your_cafe_instagram" // Замените на реальную ссылку
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/74965241234" // Замените на реальную ссылку
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://t.me/your_cafe_telegram" // Замените на реальную ссылку
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="https://facebook.com/your_cafe_facebook" // Замените на реальную ссылку
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Мангал-Черноголовка. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
