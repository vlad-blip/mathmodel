import News from "./News";
import { INews } from "@/common/types";

import styles from "./NewsList.module.scss";

type NewsListProps = {
  newsList: Array<INews>;
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
      {newsList.map(({ fields, sys }) => (
        <li key={sys.id}>
          <News
            content={fields.content}
            compact={compact}
            id={sys.id}
            thumbnail={fields.thumbnail?.fields.file.url}
            title={fields.title}
            date={fields.date}
          />
        </li>
      ))}
    </ul>
  );
}
