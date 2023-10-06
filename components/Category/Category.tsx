import Link from "next/link";
import styles from "./Category.module.scss";

type Category = {
  children: string;
  selected?: boolean;
  href: string;
};

export default function Category({ children, selected, href }: Category) {
  return (
    <Link
      scroll={false}
      href={href}
      className={`${styles.button} ${selected ? styles.selected : ""}`}
    >
      {children}
    </Link>
  );
}
