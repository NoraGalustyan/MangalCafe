// sections/Gallery.jsx
import React from "react"; // Импортируем React
import styles from "../styles/Gallery.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Импортируем стили slick
import "slick-carousel/slick/slick-theme.css"; // Импортируем тему slick

import photo1 from "../assets/images/gallery/photo1.jpg"; // Обратите внимание на путь!
import photo2 from "../assets/images/gallery/photo2.jpg";
import photo3 from "../assets/images/gallery/photo3.jpg";
import photo4 from "../assets/images/gallery/photo4.jpg";
import photo5 from "../assets/images/gallery/photo5.jpg";

const Gallery = () => {
  const settings = {
    dots: true, // Показывать точки навигации
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость анимации
    slidesToShow: 1, // Сколько слайдов показывать одновременно
    slidesToScroll: 1, // Сколько слайдов перелистывать за раз
    autoplay: true, // Автоматическая прокрутка
    autoplaySpeed: 3000, // Пауза между автоматическими слайдами
    arrows: true, // Показывать стрелки навигации
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Скрываем стрелки на мобильных, если нужно
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  // Предполагаемые пути к вашим файлам изображений
  const images = [photo1, photo2, photo3, photo4, photo5];

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>Галерея</h2>
        <p className={styles.tagline}>
          Эстетика вкуса: почувствуйте атмосферу нашего кафе
        </p>
        <div className={styles.slickContainer}>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Gallery item ${index + 1}`}
                  className={styles.slickImage}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
