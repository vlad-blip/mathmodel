import { useState } from "react";
import Link from "next/link";

import styles from "./SyllabusItem.module.scss";

type Subjects = {
  title: string;
  program: string;
  syllabus: string;
};

type SyllabusItemType = {
  course: string;
  subjects: Subjects[];
};

export default function SyllabusItem({ course, subjects }: SyllabusItemType) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.course_header}>
        <h3 className={`${styles.course_title} ${active ? styles.active : ""}`}>
          {course} курс
        </h3>
        <button
          className={styles.course_button}
          onClick={() => setActive((prevActive) => !prevActive)}
        >
          <span
            className={`${styles.toggleIcon} ${active ? styles.active : ""}`}
          ></span>
        </button>
      </div>
      {active ? (
        <ul className={styles.subject_list}>
          {subjects.map((subject) => {
            return (
              <li>
                <div>
                  <p className={styles.subject_title}>{subject.title}</p>
                  <ul className={styles.subject_links}>
                    <Link href={subject.program}>Робоча програма</Link>
                    <Link href={subject.syllabus}>Силабус</Link>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
