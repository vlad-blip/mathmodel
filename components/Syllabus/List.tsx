import styles from "./List.module.scss";

export default function List({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <ul className={styles.list}>
      {Array.isArray(children) ? (
        children.map((child, i) => <li key={i}>{child}</li>)
      ) : (
        <li>{children}</li>
      )}
    </ul>
  );
}
