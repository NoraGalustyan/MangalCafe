// sections/Menu.tsx
import styles from "../styles/Menu.module.css";
import ShashlikImg from "../assets/images/menu/шашлык.jpg";
import LulyaImg from "../assets/images/menu/люля.jpg";
import HarchoImg from "../assets/images/menu/харчо.jpg";

const Menu = () => {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.menuContent}>
        <h2 className={styles.sectionTitle}>Наше Изысканное Меню</h2>
        <p className={styles.description}>
          Мы гордимся нашим разнообразным меню, в котором каждый найдет что-то
          по своему вкусу. От сочных шашлыков, приготовленных на живом огне, до
          нежных закусок и ароматных супов — мы используем только лучшие
          ингредиенты для создания кулинарных шедевров.
        </p>

        <div className={styles.menuItemsGrid}>
          {/* Пример блюда 1 */}
          <div className={styles.menuItem}>
            <div className={styles.itemImagePlaceholder}>
              <img src={ShashlikImg} alt="" />
            </div>
            <h3 className={styles.itemName}>Шашлык из свинины</h3>
            <p className={styles.itemDescription}>
              Нежный, сочный шашлык из маринованной свинины, приготовленный на
              открытом огне. Подается с зеленью и маринованным луком.
            </p>
            <p className={styles.itemPrice}>1200 руб.</p>
          </div>

          {/* Пример блюда 2 */}
          <div className={styles.menuItem}>
            <div className={styles.itemImagePlaceholder}>
              <img src={LulyaImg} alt="" />
            </div>
            <h3 className={styles.itemName}>Люля-кебаб из баранины</h3>
            <p className={styles.itemDescription}>
              Ароматный кебаб из рубленой баранины с пряными специями,
              запеченный на мангале до золотистой корочки.
            </p>
            <p className={styles.itemPrice}>1350 руб.</p>
          </div>

          {/* Пример блюда 3 */}
          {/* <div className={styles.menuItem}>
            <div className={styles.itemImagePlaceholder}>[Фото блюда]</div>
            <h3 className={styles.itemName}>Салат "Греческий"</h3>
            <p className={styles.itemDescription}>
              Классический освежающий салат со свежими овощами, сыром фета и
              оливковым маслом.
            </p>
            <p className={styles.itemPrice}>450 руб.</p>
          </div> */}

          {/* Пример блюда 4 */}
          <div className={styles.menuItem}>
            <div className={styles.itemImagePlaceholder}>
              <img src={HarchoImg} alt="" />
            </div>
            <h3 className={styles.itemName}>Суп Харчо</h3>
            <p className={styles.itemDescription}>
              Наваристый и ароматный грузинский суп с говядиной, рисом и
              пикантными специями.
            </p>
            <p className={styles.itemPrice}>550 руб.</p>
          </div>
        </div>

        <div className={styles.moreDishesLink}>
          <p>
            Это лишь малая часть наших блюд! Полный ассортимент вы можете найти
            в нашем меню
          </p>
          {/* Кнопка заказа, оформленная отдельно */}
          <a
            href="https://delivery.restik.com/cafe-cafe"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.orderBtn} btn`} // Используем общий класс 'btn'
          >
            Посмотреть Все Блюда и Оформить Заказ
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
