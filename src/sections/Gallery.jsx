// sections/Gallery.jsx
import React from "react"; // Импортируем React
import styles from "../styles/Gallery.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Импортируем стили slick
import "slick-carousel/slick/slick-theme.css"; // Импортируем тему slick

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
    // Для того чтобы кастомные стрелки работали, убедитесь, что файлы иконок существуют
    // prevArrow: (
    //   <div className={styles.slickArrowContainer}>
    //     <img
    //       src="/icons/arrow-left.png"
    //       alt="Previous"
    //       className={styles.slickArrow}
    //     />
    //   </div>
    // ),
    // nextArrow: (
    //   <div className={styles.slickArrowContainer}>
    //     <img
    //       src="/icons/arrow-right.png"
    //       alt="Next"
    //       className={styles.slickArrow}
    //     />
    //   </div>
    // ),
    // appendDots: (
    //   dots, // Пользовательская обертка для точек
    // ) => (
    //   <div className={styles.slickDots}>
    //     <ul> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (
    //   i, // Пользовательская стилизация точек
    // ) => <div className={styles.slickDotItem}>{i + 1}</div>,
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
  const images = [
    "/assets/images/gallery/photo1.jpg",
    "/assets/images/gallery/photo2.jpg",
    "/assets/images/gallery/photo3.jpg",
    "/assets/images/gallery/photo4.jpg",
    "/assets/images/gallery/photo5.jpg",
  ];

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
