import Pagination from "@/components/Pagination/Pagination";
import { client } from "@/utils/contentful";
import Search from "@/components/Search/Search";
import ButtonSort from "@/components/ButtonSort/ButtonSort";
import Categories from "@/components/Categories/Categories";
import NewsList from "@/components/News/NewsList";

import styles from "@/styles/News.module.scss";

export default function News({ newsList, pinnedList, total }: any) {
  return (
    <main className="main">
      <div className="container">
        <header className={styles.header}>
          <h1 className="h-1">Новини</h1>
        </header>
        {pinnedList.length > 0 && (
          <section className={styles.pinned}>
            <h1 className="h-2">Закріплені новини</h1>
            <NewsList className={styles.pinned_list} newsList={pinnedList} />
          </section>
        )}
        <div className={styles.filter}>
          <div>
            <Search className={styles.search} placeholder="Пошук новини" />
            <ButtonSort />
          </div>
          <div className={styles.categories_wrapper}>
            <Categories />
          </div>
        </div>
        {newsList.length > 0 ? (
          <section>
            <NewsList newsList={newsList} compact />
            <Pagination className={styles.pagination} totalPages={total} />
          </section>
        ) : (
          <p className={styles.news_empty}>Новини відсутні</p>
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const NEWS_PER_PAGE = 10;

  const category =
    context.query.category === "all" ? "" : context.query.category;
  const search = context.query.search;
  const order = context.query.order || "descending";
  const page: number = context.query.page || 1;

  const orderType = order === "descending" ? "-fields.date" : "fields.date";

  const { items: newsList, total } = await client.getEntries({
    content_type: "news",
    "fields.category": category,
    query: search,
    limit: NEWS_PER_PAGE,
    skip: (page - 1) * NEWS_PER_PAGE,
    order: [orderType],
  });

  const totalPages = Math.ceil(total / NEWS_PER_PAGE);

  const pinnedNewsEntries = await client.getEntries({
    content_type: "news",
    "fields.pinned": "true",
  });

  const pinnedList = pinnedNewsEntries.items.slice(0, 3);

  return {
    props: {
      pinnedList: JSON.parse(JSON.stringify(pinnedList)),
      newsList: JSON.parse(JSON.stringify(newsList)),
      total: totalPages,
    },
  };
}
