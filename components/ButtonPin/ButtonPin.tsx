import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import styles from "./ButtonPin.module.scss";

type ButtonPinType = {
  pinned: boolean;
};

export default function ButtonPin({ pinned = false }: ButtonPinType) {
  const [isActive, setIsActive] = useState(pinned);

  const onClickHandler = (event: any) => {
    event.preventDefault();

    setIsActive((prevActive) => !prevActive);
  };

  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={onClickHandler}
    >
      <FontAwesomeIcon icon={faThumbTack} width={"12px"} />
    </button>
  );
}
