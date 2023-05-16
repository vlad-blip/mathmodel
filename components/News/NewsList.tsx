import News from "./News";

import styles from "./NewsList.module.scss";
type News = {
  id: string;
  date: string;
  description: string;
  thumbnail: string;
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
            id={news.id}
            thumbnail={news.thumbnail}
            title={news.title}
            date={news.date}
            description={news.description}
          />
        </li>
      ))}
    </ul>
  );
}
