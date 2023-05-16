import Image from "next/image";
import Link from "next/link";

import styles from "./News.module.scss";

type NewsProps = {
  id: string;
  thumbnail: string;
  date: string;
  title: string;
  description: string;
};

export default function News({
  id,
  thumbnail,
  date,
  title,
  description,
}: NewsProps) {
  const formatedDated = date.split("T")[0];

  return (
    <div className={styles.container}>
      <Link className={styles.link} href={`/news/${id}`}>
        <Image
          className={styles.img}
          src={thumbnail}
          width={420}
          height={260}
          alt="News cover"
        />
        <div className={styles.content}>
          <p className="sub">{formatedDated}</p>
          <div>
            <h3 className="h-3">{title}</h3>
            <p className="text-1">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
