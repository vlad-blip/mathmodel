// import React from "react";

import SyllabusItem from "./SyllabusItem";

import styles from "./SyllabusList.module.scss";
/*<SyllabusItem
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
      />*/
type SyllabusItemType = {};

export default function SyllabusList({ children }: React.ReactElement) {
  return <ul className={styles.list}>{children}</ul>;
}
