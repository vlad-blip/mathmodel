import styles from "./SelectionList.module.scss";

type SelectionListType = {
  children: Array<React.ReactNode> | React.ReactNode;
};

export default function SelectionList({ children }: SelectionListType) {
  return <ul className={styles.container}>{children}</ul>;
}
