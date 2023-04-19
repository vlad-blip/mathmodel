import Link from "next/link";
import styles from "./NavButton.module.scss";

type NavButtonProps = {
  type: "default" | "chevron";
  text: string;
  href: string;
  children: React.ReactNode;
};

export default function NavButton({
  type,
  text,
  href,
  children,
}: NavButtonProps) {
  return (
    <Link className={styles[type]} href={href}>
      {text}
    </Link>
  );
}
