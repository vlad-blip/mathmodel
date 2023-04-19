import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.hat}>
        <div>
          <p>Полтавський університет економіки і торгівлі</p>
          <p>кафедра комп{"'"}ютерних наук та інформаційних технологій</p>
        </div>
      </div>
    </header>
  );
}
