import News from "./News";

import styles from "./NewsList.module.scss";
type News = {
  id: string;
  date: string;
  description: string;
  img: string;
  title: string;
};

type NewsListProps = {
  newsList: Array<News>;
};

export default function NewsList({ newsList }: NewsListProps) {
  return (
    <ul className={styles.news_list}>
      {newsList.map((news) => (
        <li key={news.id}>
          <News
            img={news.img}
            title={news.title}
            date={news.date}
            description={news.description}
          />
        </li>
      ))}
    </ul>
  );
}
