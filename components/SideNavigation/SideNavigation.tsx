import styles from "./SideNavigation.module.scss";

type SideNavigationProps = {
  children: React.ReactNode[] | React.ReactNode;
};

export default function SideNavigation({ children }: SideNavigationProps) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {children && Array.isArray(children) ? (
          children.map((child) => <li className={styles.list_item}>{child}</li>)
        ) : (
          <li className={styles.list_item}>{children}</li>
        )}
      </ul>
    </nav>
  );
}
