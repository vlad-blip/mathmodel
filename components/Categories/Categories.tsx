import Category from "../Category/Category";

import styles from "./Categories.module.scss";

export default function Categories() {
  return (
    <ul className={styles.container}>
      <li>
        <Category name="all">Всі</Category>
      </li>
      <li>
        <Category name="partnering">Зв’язки та співробітництво</Category>
      </li>
      <li>
        <Category name="conferences">Конференції, семінари</Category>
      </li>
      <li>
        <Category name="science">Науково-дослідна робота</Category>
      </li>
      <li>
        <Category name="polling">Опитування</Category>
      </li>
      <li>
        <Category name="press">Про нас пишуть</Category>
      </li>
    </ul>
  );
}
