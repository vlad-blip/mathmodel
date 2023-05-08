import Link from "next/link";

import styles from "@/styles/404.module.scss";

export default function Custom404() {
  return (
    <main className={`${styles.bsod} ${styles.container}`}>
      <div>
        <h1 className={`${styles.neg} ${styles.title}`}>
          <span className={styles.bg}>Error - 404</span>
        </h1>
        <p className={styles.sub}>Сталася помилка, для того щоб продовжити:</p>
        <p>* Поверніться на головну сторінку.</p>
        <br />
        <p>* Повідомте нам про помилку та спробуйте пізніше ще раз.</p>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Повернутися на головну сторінку
          </Link>
          &nbsp;|&nbsp;
        </nav>
      </div>
    </main>
  );
}
