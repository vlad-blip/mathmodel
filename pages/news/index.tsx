import Search from "@/components/Search/Search";
import ButtonSort from "@/components/ButtonSort/ButtonSort";
import Categories from "@/components/Categories/Categories";

import styles from "@/styles/News.module.scss";

export default function News() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="h-1 page-heading">Новини</h1>
        <div className={styles.filter}>
          <div>
            <Search placeholder="Пошук новини" />
            <ButtonSort />
          </div>
          <Categories />
        </div>
      </div>
    </main>
  );
}
