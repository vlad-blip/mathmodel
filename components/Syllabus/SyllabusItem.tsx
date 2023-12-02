import Link from "next/link";
import styles from "./SyllabusItem.module.scss";

type SyllabusItemType = {
  title: string;
  programList: string[];
  syllabusList: string[];
};

export default function SyllabusItem({
  title,
  programList,
  syllabusList,
}: SyllabusItemType) {
  return (
    <div className={styles.container}>
      <h3 className={styles.subject_title}>{title}</h3>
      <ul className={styles.subject_links}>
        <li>
          <ul className={`${styles.subject_links} ${styles.subject_sub_links}`}>
            {programList.map((program, i) => (
              <li key={i}>
                <Link className={styles.subject_link} href={program}>
                  Робоча програма
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className={`${styles.subject_links} ${styles.subject_sub_links}`}>
            {syllabusList.map((syllabus, i) => (
              <li key={i}>
                <Link className={styles.subject_link} href={syllabus}>
                  Силабус
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
