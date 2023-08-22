import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";

type SearchType = {
  placeholder: string;
};

export default function Search({ placeholder }: SearchType) {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
