import NavButton from "./NavButton";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link href={"/"}>
        <Image
          className={styles.logo}
          src={"/Logo.svg"}
          width={90}
          height={90}
          alt="CS logo"
        />
      </Link>
      <ul className={styles.list}>
        <li>
          <NavButton type="default" href="/news" text="Новини" />
        </li>
        <li>
          <NavButton type="expanded" text="Про нас">
            <NavButton type="default" href="/education" text="Склад кафедри" />
            <NavButton
              type="default"
              href="/education"
              text="Історія кафедри"
            />
            <NavButton
              type="default"
              href="/education"
              text="Концепція кафедри"
            />
            <NavButton type="default" href="/education" text="Про нас пишуть" />
            <NavButton type="default" href="/education" text="Випускники" />
          </NavButton>
        </li>
        <li>
          <NavButton type="default" href="/education" text="Освіта" />
        </li>
        <li>
          <NavButton type="default" href="/science" text="Наука" />
        </li>
        <li>
          <NavButton
            type="default"
            href="/connection"
            text="Зв'язки та співробітництво"
          />
        </li>
        <li>
          <NavButton type="default" href="/contacts" text="Контакти" />
        </li>
      </ul>
    </nav>
  );
}
