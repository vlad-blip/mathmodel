import styles from "./SubjectList.module.scss";

export default function SubjectList({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <ul className={styles.subject_list}>
      {Array.isArray(children) ? (
        children.map((child, i) => <li key={i}>{child}</li>)
      ) : (
        <li>{children}</li>
      )}
    </ul>
  );
}
