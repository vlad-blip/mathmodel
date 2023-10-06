import { useSearchParams } from "next/navigation";

import Category from "../Category/Category";

import styles from "./Categories.module.scss";

export default function Categories() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search")
    ? `&search=${searchParams.get("search")}`
    : "";

  const selectedCategory = searchParams.get("category") ?? "all";

  return (
    <ul className={styles.container}>
      <li>
        <Category
          selected={"all" === selectedCategory}
          href={`/news/?category=all${search}`}
        >
          Всі
        </Category>
      </li>
      <li>
        <Category
          selected={"connection" === selectedCategory}
          href={`/news/?category=connection${search}`}
        >
          Зв’язки та співробітництво
        </Category>
      </li>
      <li>
        <Category
          selected={"conferences" === selectedCategory}
          href={`/news/?category=conferences${search}`}
        >
          Конференції, семінари
        </Category>
      </li>
      <li>
        <Category
          selected={"science" === selectedCategory}
          href={`/news/?category=science${search}`}
        >
          Науково-дослідна робота
        </Category>
      </li>
      <li>
        <Category
          selected={"press" === selectedCategory}
          href={`/news/?category=press${search}`}
        >
          Про нас пишуть
        </Category>
      </li>
    </ul>
  );
}
