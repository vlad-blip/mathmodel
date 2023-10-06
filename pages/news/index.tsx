import { PrismaClient } from "@prisma/client";

import Search from "@/components/Search/Search";
import ButtonSort from "@/components/ButtonSort/ButtonSort";
import Categories from "@/components/Categories/Categories";
import NewsList from "@/components/News/NewsList";
import NewsForm from "@/components/NewsForm/NewsForm";
import { useAuthContext } from "@/context/AuthContext";

import { useState } from "react";

import styles from "@/styles/News.module.scss";

export default function News({ newsList, pinnedList }: any) {
  const [active, setActive] = useState(false);
  const { user } = useAuthContext();

  const onAddNewsHandler = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <main className="main">
      <div className="container">
        <header className={styles.header}>
          <h1 className="h-1">Новини</h1>
          {user ? (
            <button onClick={onAddNewsHandler}>Додати новину</button>
          ) : null}
        </header>
        <section className={styles.pinned}>
          <h1 className="h-2">Закріплені новини</h1>
          <NewsList className={styles.pinned_list} newsList={pinnedList} />
        </section>
        <div className={styles.filter}>
          <div>
            <Search className={styles.search} placeholder="Пошук новини" />
            <ButtonSort />
          </div>
          <Categories />
        </div>
        {newsList.length > 0 ? (
          <section>
            <NewsList newsList={newsList} compact />
          </section>
        ) : (
          <p className={styles.news_empty}>Новини відсутні</p>
        )}
      </div>
      {active && user ? <NewsForm onClick={onAddNewsHandler} /> : null}
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const prisma = new PrismaClient();
  const category =
    context.query.category === "all" ? null : context.query.category;
  const search = context.query.search;

  const pinnedList = await prisma.news.findMany({
    where: { pinned: true },
  });

  let newsList = [];

  if (category && search) {
    newsList = await prisma.news.findMany({
      where: { category: context.query.category, title: { contains: search } },
    });
  } else if (category) {
    newsList = await prisma.news.findMany({
      where: { category: context.query.category },
    });
  } else if (search) {
    newsList = await prisma.news.findMany({
      where: { title: { contains: search } },
    });
  } else {
    newsList = await prisma.news.findMany();
  }

  // let newsList = [];

  // if (selectedCategory === "all" || undefined) {
  //   newsList = await prisma.news.findMany();
  // } else {
  //   newsList = await prisma.news.findMany({
  //     where: { category: context.query.category },
  //   });
  // }

  return {
    props: {
      pinnedList: JSON.parse(JSON.stringify(pinnedList)),
      newsList: JSON.parse(JSON.stringify(newsList)),
    },
  };
}
