import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

import SelectionList from "../SelectionList/SelectionList";

import styles from "./ButtonSort.module.scss";

export default function ButtonSort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const order = params.get("order");
  const buttonText = order === "ascending" ? "Дата ↑" : "Дата ↓";
  const [isHidden, setIsHidden] = useState(true);

  const setHiddenHandler = () => setIsHidden((prevIsHidden) => !prevIsHidden);

  const buttonClickHandler = (order: string) => {
    params.set("order", order);

    router.push(`${pathname}/?${params}`, "", { scroll: false });
    setIsHidden(true);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={setHiddenHandler}>
        {buttonText}
      </button>
      {isHidden ? null : (
        <SelectionList>
          <li>
            <button onClick={() => buttonClickHandler("descending")}>
              Дата ↓
            </button>
          </li>
          <li>
            <button onClick={() => buttonClickHandler("ascending")}>
              Дата ↑
            </button>
          </li>
        </SelectionList>
      )}
    </div>
  );
}
