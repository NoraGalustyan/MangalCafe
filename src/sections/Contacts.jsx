// sections/Contacts.jsx
import React, { useState } from "react";
import styles from "../styles/Contacts.module.css";

const Contacts = () => {
  const [showMap, setShowMap] = useState(false);

  // >>> ВАЖНО: Замените этот URL на сгенерированный вами в Яндекс.Конструкторе <<<
  // Этот placeholder указывает на ваше кафе. В Яндекс.Конструкторе вы можете
  // точно настроить маркер, масштаб и видимую область.
  const yandexMapEmbedUrl =
    "https://yandex.ru/maps/?um=constructor%3Aff7f98e90b924d7805d62d5d977bcba6ac6e08dc3245684afc0f8fbd5d943d2e&source=constructorLink"; // Пример URL

  const handleShowMapClick = () => {
    setShowMap(!showMap);
  };

  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>Мы находимся</h2>
        {/* Убраны контактные данные, оставлена только информация о карте */}

        <div className={styles.mapContainer}>
          {/* Кнопка для показа/скрытия карты */}
          <button
            onClick={handleShowMapClick}
            className={styles.mapToggleButton}
          >
            {showMap ? "Скрыть карту" : "Показать карту"}
          </button>

          {/* Интерактивная Яндекс.Карта */}
          {showMap && (
            <div className={styles.yandexMapWrapper}>
              <iframe
                src={yandexMapEmbedUrl}
                width="100%"
                height="450"
                allowFullScreen
                className={styles.yandexMapIframe}
              ></iframe>
            </div>
          )}
        </div>
        <p className={styles.tagline}>Мы всегда рады нашим гостям!</p>
      </div>
    </section>
  );
};

export default Contacts;
