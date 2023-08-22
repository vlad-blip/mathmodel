import styles from "./Category.module.scss";

type Category = {
  children: string;
  selected?: boolean;
};

export default function Category({ children, selected }: Category) {
  return (
    <button className={`${styles.button} ${selected ? styles.selected : ""}`}>
      {children}
    </button>
  );
}
