import { useSearchParams, usePathname } from "next/navigation";

import Link from "next/link";

import styles from "./Category.module.scss";

type Category = {
  children: string;
  name: string;
};

export default function Category({ children, name }: Category) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams.toString());

  const selected = params.get("category") === name;

  params.set("category", name);

  const generatedLink = `${pathname}/?${params}`;

  return (
    <Link
      scroll={false}
      href={generatedLink}
      className={`${styles.button} ${selected ? styles.selected : ""}`}
    >
      {children}
    </Link>
  );
}
