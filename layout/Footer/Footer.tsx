import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_container} `}>
        <Link className={styles.main_univer_block} href={"http://puet.edu.ua"}>
          <Image
            src={"/PUET_logo.svg"}
            width={100}
            height={90}
            alt="PUET logo"
          />
          <div>
            <h1>Полтавський університет економіки і торгівлі</h1>
            <p>Вищий навчальний заклад Укоопспілки</p>
          </div>
        </Link>
        <div className={styles.navigation}>
          <Link href={"/news"}>Новини</Link>
          <div className={styles.links}>
            <h2 className={styles.links_heading}>Про нас</h2>
            <ul className={styles.links_list}>
              <li>
                <Link href={"/department_staff"}>Склад кафедри</Link>
              </li>
              <li>
                <Link href={"/department_conception"}>Концепція кафедри</Link>
              </li>
              <li>
                <Link href={"/testimonials"}>Про нас пишуть</Link>
              </li>
              <li>
                <Link href={"/alumni"}>Випускники</Link>
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3 className={styles.links_heading}>Освіта</h3>
            <ul className={styles.links_list}>
              <li>
                <Link href={"/department_conception"}>Спеціальності</Link>
              </li>
              <li>
                <Link href={"/discipline"}>Дисципліна</Link>
              </li>
              <li>
                <Link href={"/applicant"}>Абітурієнтові</Link>
              </li>
              <li>
                <Link href={"/methodology"}>
                  Освітньо-професійні програми та навчально-методичне
                  забезпечення
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3 className={styles.links_heading}>Наука</h3>
            <ul className={styles.links_list}>
              <li>
                <Link href={"/department_conception"}>
                  Науково-дослідна робота
                </Link>
              </li>
              <li>
                <Link href={"/seminar-ukr"}>Семінар “КНіПМ”</Link>
              </li>
              <li>
                <Link href={"/seminar-eng"}>Seminar &quot;CS&AM&quot;</Link>
              </li>
              <li>
                <Link href={"/scientific-work"}>Наукова робота студентів</Link>
              </li>
              <li>
                <Link href={"/conferences"}>Конференції, семінари</Link>
              </li>
            </ul>
          </div>
          <Link href={"/contacts-and-work"}>
            Зв{"'"}язки та співробітництво
          </Link>
          <Link href={"/contacts"}>Контакти</Link>
        </div>
      </div>
    </footer>
  );
}
