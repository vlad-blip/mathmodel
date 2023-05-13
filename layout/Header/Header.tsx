import styles from "./Header.module.scss";
import Navigation from "@/components/Navigation/Navigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.hat}>
        <p>Полтавський університет економіки і торгівлі</p>
        <p>кафедра комп{"'"}ютерних наук та інформаційних технологій</p>
      </div>
      <Navigation />
    </header>
  );
}
