// sections/Delivery.tsx
import styles from "../styles/Delivery.module.css";

const Delivery = () => {
  return (
    <section id="delivery" className={styles.delivery}>
      <div className={styles.sectionContent}>
        {" "}
        {/* Используем контейнер */}
        <div className={styles.deliveryContent}>
          <h2 className={styles.sectionTitle}>Доставка</h2>
          <p className={styles.tagline}>
            Ваш любимый вкус — прямо к вашей двери!
          </p>
          <h3>Условия быстрой доставки</h3>
          <ul className={styles.deliveryTermsList}>
            <li>
              <strong>Зона доставки:</strong> Мы осуществляем доставку в
              пределах города Черноголовка и ближайших районов (уточняйте карту
              покрытия).
            </li>
            <li>
              <strong>Время доставки:</strong> Обычно занимает от 45 до 90
              минут, в зависимости от загруженности и вашего местоположения.
            </li>
            <li>
              <strong>Минимальный заказ:</strong> Минимальная сумма заказа для
              бесплатной доставки составляет 1500 рублей. При заказе менее 1500
              рублей стоимость доставки составит 200 рублей.
            </li>
            <li>
              <strong>График работы доставки:</strong> Ежедневно с 11:00 до
              22:00.
            </li>
            <li>
              <strong>Оплата:</strong> При получении заказа наличными или
              картой.
            </li>
            <li>
              <strong>Специальные предложения:</strong> Следите за нашими
              акциями — мы часто проводим дни с бесплатной доставкой или
              специальными скидками!
            </li>
          </ul>

          <p>
            Мы тщательно упаковываем каждый заказ, чтобы сохранить тепло и
            свежесть блюд. Наша команда курьеров всегда готова доставить ваш
            любимый шашлык, сочные стейки и ароматные закуски в удобное для вас
            время.
          </p>

          <div className={styles.deliveryAction}>
            {/* Пример кнопки: вам нужно будет реализовать логику перехода или вызова */}
            <a href="tel:+74965222222" className="btn">
              Заказать по телефону
            </a>
            <a
              href="https://delivery.restik.com/cafe-cafe"
              target="_blank"
              className="btn"
              style={{ marginLeft: "15px" }}
            >
              Заказать онлайн
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
