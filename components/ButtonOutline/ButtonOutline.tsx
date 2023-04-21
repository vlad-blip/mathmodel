import Link from "next/link";

import styles from "./ButtonOutline.module.scss";

type ButtonOutlineProps = {
  type: "link" | "button";
  onClick?: () => {};
  href?: string;
  children: string;
};

export default function ButtonOutline({
  type,
  onClick,
  href,
  children,
}: ButtonOutlineProps) {
  return type === "link" && href ? (
    <Link className={styles.button} href={href}>
      {children}
    </Link>
  ) : (
    <button className={styles.button} onClick={onClick}></button>
  );
}
