import styles from "./Burger.module.scss";

type BurgerProps = {
  onClick: () => void;
  active: boolean;
};

export default function Burger({ onClick, active }: BurgerProps) {
  return (
    <button
      className={`${styles.burger} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
