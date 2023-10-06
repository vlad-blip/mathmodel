import SyllabusItem from "./SyllabusItem";

import styles from "./SyllabusList.module.scss";

export default function SyllabusList() {
  return (
    <ul className={styles.list}>
      <SyllabusItem
        course="1"
        subjects={[
          {
            title: "Архітектура обчислювальних систем",
            syllabus: "https://google.com",
            program: "https://google.com",
          },
        ]}
      />
      <SyllabusItem
        course="2"
        subjects={[
          {
            title: "Архітектура обчислювальних систем",
            syllabus: "https://google.com",
            program: "https://google.com",
          },
        ]}
      />
      <SyllabusItem
        course="3"
        subjects={[
          {
            title: "Архітектура обчислювальних систем",
            syllabus: "https://google.com",
            program: "https://google.com",
          },
        ]}
      />
      <SyllabusItem
        course="4"
        subjects={[
          {
            title: "Архітектура обчислювальних систем",
            syllabus: "https://google.com",
            program: "https://google.com",
          },
          {
            title: "Архітектура обчислювальних систем",
            syllabus: "https://google.com",
            program: "https://google.com",
          },
          {
            title: "Архітектура обчислювальних систем",
            syllabus: "https://google.com",
            program: "https://google.com",
          },
        ]}
      />
    </ul>
  );
}
