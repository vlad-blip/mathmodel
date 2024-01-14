import { useState } from "react";

import NavButton from "./NavButton";
import Image from "next/image";
import Link from "next/link";
import Burger from "./Burger";

import styles from "./Navigation.module.scss";

export default function Navigation() {
  const [active, setActive] = useState(false);

  const linkClickHandler = () => {
    setActive(false);
  };

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
      <ul className={`${styles.list} ${active ? styles.active : ""}`}>
        <li>
          <NavButton
            onClick={linkClickHandler}
            type="default"
            href="/news?category=all"
            text="Новини"
          />
        </li>
        <li>
          <NavButton type="expanded" text="Про нас">
            <NavButton
              onClick={linkClickHandler}
              type="default"
              href="/department_staff"
              text="Склад кафедри"
            />
            <NavButton
              onClick={linkClickHandler}
              type="default"
              href="/history"
              text="Історія кафедри"
            />
            <NavButton
              onClick={linkClickHandler}
              type="default"
              href="/alumni/bachelor/2022-2023"
              text="Випускники"
            />
          </NavButton>
        </li>
        <li>
          <NavButton type="expanded" href="/education" text="Освіта">
            <NavButton
              onClick={linkClickHandler}
              type="default"
              href="/disciplines"
              text="Дисципліни"
            />
            <NavButton
              onClick={linkClickHandler}
              type="default"
              href="/methodology"
              text="Освітньо-професійні програми та навчально-методичне забезпечення"
            />
          </NavButton>
        </li>
        <li>
          <NavButton type="expanded" href="/science" text="Наука">
            <NavButton
              onClick={linkClickHandler}
              type="default"
              href="/science-and-research"
              text="Науково-дослідна робота"
            />
            <NavButton type="default" href="/seminars" text="Семінари" />
          </NavButton>
        </li>
        <li>
          <NavButton
            onClick={linkClickHandler}
            type="default"
            href="/connection"
            text="Зв'язки та співробітництво"
          />
        </li>
        <li>
          <NavButton
            onClick={linkClickHandler}
            type="default"
            href="/contacts"
            text="Контакти"
          />
        </li>
      </ul>
      <Burger
        onClick={() => setActive((prevActive) => !prevActive)}
        active={active}
      />
    </nav>
  );
}
