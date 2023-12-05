import Image from "next/image";
import Link from "next/link";

import styles from "./News.module.scss";

type NewsProps = {
  id: string;
  thumbnail: string;
  date: string;
  title: string;
  content: string;
  compact: boolean;
};

export default function News({
  id,
  thumbnail,
  date,
  title,
  compact = false,
}: NewsProps) {
  const formatedDated = date.split("T")[0];

  return (
    <div className={`${styles.container} ${compact ? styles.compact : ""}`}>
      <Link className={styles.link} href={`/news/${id}`}>
        {thumbnail && (
          <Image
            className={styles.img}
            src={`https:${thumbnail}`}
            width={420}
            height={260}
            alt="News cover"
          />
        )}
        <div className={styles.content}>
          <p className="sub">{formatedDated}</p>
          <div>
            <h3 className={`h-3 ${styles.news_title}`}>{title}</h3>
            {/* <p className="text-1">{content.substring(0, 40)}</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
