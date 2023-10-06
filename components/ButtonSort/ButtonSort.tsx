import { useState } from "react";

import SelectionList from "../SelectionList/SelectionList";

import styles from "./ButtonSort.module.scss";

export default function ButtonSort() {
  const [query, setQuery] = useState("Дата ↓");
  const [isHidden, setIsHidden] = useState(true);

  const setHiddenHandler = () => setIsHidden((prevIsHidden) => !prevIsHidden);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={setHiddenHandler}>
        {query}
      </button>
      {isHidden ? null : (
        <SelectionList>
          <li>
            <button onClick={() => setQuery("Дата ↓")}>Дата ↓</button>
          </li>
          <li>
            <button onClick={() => setQuery("Дата ↑")}>Дата ↑</button>
          </li>
        </SelectionList>
      )}
    </div>
  );
}
