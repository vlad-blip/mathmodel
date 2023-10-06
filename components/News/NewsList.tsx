import News from "./News";

import styles from "./NewsList.module.scss";

type News = {
  id: string;
  date: string;
  thumbnail: string;
  title: string;
  pinned: boolean;
  content: string;
};

type NewsListProps = {
  newsList: Array<News>;
  className?: string;
  compact?: boolean;
};

export default function NewsList({
  newsList,
  className,
  compact = false,
}: NewsListProps) {
  return (
    <ul
      className={`${styles.news_list} ${
        compact ? styles.compact : ""
      } ${className}`}
    >
      {newsList.map((news) => (
        <li key={news.id}>
          <News
            content={news.content}
            compact={compact}
            id={news.id}
            thumbnail={news.thumbnail}
            title={news.title}
            date={news.date}
            pinned={news.pinned}
          />
        </li>
      ))}
    </ul>
  );
}
