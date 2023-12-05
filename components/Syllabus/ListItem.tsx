import { useState } from "react";

import styles from "./ListItem.module.scss";

type ListItemType = {
  heading: string;
  children: React.ReactNode[] | React.ReactNode;
};

export default function ListItem({ heading, children }: ListItemType) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.course_header}
        onClick={() => setActive((prevActive) => !prevActive)}
      >
        <h3 className={`${styles.course_title} ${active ? styles.active : ""}`}>
          {heading}
        </h3>
        <button className={styles.course_button}>
          <span
            className={`${styles.toggleIcon} ${active ? styles.active : ""}`}
          ></span>
        </button>
      </div>
      {active ? <ul className={styles.list}>{children}</ul> : null}
    </div>
  );
}
