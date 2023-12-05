import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./NavButton.module.scss";

type NavButtonProps = {
  type: "default" | "expanded";
  text: string;
  href?: string;
  children?: React.ReactNode;
};

export default function NavButton({
  type,
  text,
  href,
  children,
}: NavButtonProps) {
  const [isActive, setActive] = useState(false);

  return type === "default" && href ? (
    <Link className={` ${styles.button}`} href={href}>
      <span className={styles.text}>{text}</span>
    </Link>
  ) : (
    <div
      className={`${styles.expanded} ${styles.button} ${
        isActive ? styles.active : ""
      }`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <span className={styles.text}>{text}</span>
      <Image
        className={styles.chevron}
        src={"/Chevron_down.svg"}
        width={10}
        height={7}
        alt="Chevron down"
      />
      <div className={styles.list}>{children}</div>
    </div>
  );
}
