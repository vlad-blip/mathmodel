import "react-multi-carousel/lib/styles.css";

import styles from "./Partners.module.scss";

type PartnersProps = {
  children: Array<React.ReactNode> | React.ReactNode;
};

export default function Partners({ children }: PartnersProps) {
  return (
    <div className={styles.container}>
      <div className={styles["slide-track"]}>
        {children && Array.isArray(children) ? (
          <>
            {children.map((child, i) => (
              <div key={i} className={styles.slide}>
                {child}
              </div>
            ))}
            {children.map((child, i) => (
              <div key={i} className={styles.slide}>
                {child}
              </div>
            ))}
          </>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </div>
  );
}
