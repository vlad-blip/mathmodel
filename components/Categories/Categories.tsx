import Category from "../Category/Category";

import styles from "./Categories.module.scss";

export default function Categories() {
  return (
    <ul className={styles.container}>
      <li>
        <Category selected>Всі</Category>
      </li>
      <li>
        <Category>Зв’язки та співробітництво</Category>
      </li>
      <li>
        <Category>Конференції, семінари</Category>
      </li>
      <li>
        <Category>Науково-дослідна робота</Category>
      </li>
      <li>
        <Category>Про нас пишуть</Category>
      </li>
    </ul>
  );
}
