import Image from "next/image";

import styles from "./ButtonSlider.module.scss";
import { MouseEventHandler } from "react";

type ButtonSliderProps = {
  direction: "right" | "left";
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export default function ButtonSlider({
  direction,
  onClick,
  className = "",
}: ButtonSliderProps) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      <Image
        className={`${styles.icon} ${styles[direction]}`}
        src={"/Left_arrow.svg"}
        width={25}
        height={17}
        alt="Arrow icon"
      />
    </button>
  );
}
