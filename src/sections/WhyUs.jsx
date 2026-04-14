// sections/WhyUs.tsx
import styles from "../styles/WhyUs.module.css";

const WhyUs = () => {
  return (
    <section id="why-us" className={styles.whyUs}>
      <div className={styles.sectionContent}>
        {" "}
        {/* Добавим контейнер для контента, как в About */}
        <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
        <p className={styles.tagline}>Гармония вкуса и уюта для вас!</p>
        <div className={styles.listWrapper}>
          {" "}
          {/* Обертка для центрирования списка */}
          <ul>
            <li>Свежие, натуральные продукты от проверенных поставщиков.</li>
            <li>Авторские рецепты, созданные с любовью и мастерством.</li>
            <li>Уютная атмосфера, где каждый найдет свой уголок.</li>
            <li>Быстрая и бережная доставка прямо до вашей двери.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
