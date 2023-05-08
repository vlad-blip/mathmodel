import Link from "next/link";
import { MouseEventHandler } from "react";

import styles from "./ButtonOutline.module.scss";

type ButtonOutlineProps = {
  type: "link" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  children: string;
  className?: string;
};

export default function ButtonOutline({
  type,
  onClick,
  href,
  children,
  className,
}: ButtonOutlineProps) {
  return type === "link" && href ? (
    <Link className={`${styles.button} ${className}`} href={href}>
      {children}
    </Link>
  ) : (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
