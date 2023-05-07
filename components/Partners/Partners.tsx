import ButtonSlider from "../ButtonSlider/ButtonSlider";

import styles from "./Partners.module.scss";

type PartnersProps = {
  children: Array<React.ReactNode> | React.ReactNode;
};

export default function Partners({ children }: PartnersProps) {
  return (
    <div className={styles.container}>
      <ButtonSlider direction="left" onClick={() => {}} />
      {children && Array.isArray(children) ? (
        <ul className={styles.list}>
          {children.map((child, i) => (
            <li key={i}>{child}</li>
          ))}
        </ul>
      ) : (
        <div>{children}</div>
      )}
      <ButtonSlider direction="right" onClick={() => {}} />
    </div>
  );
}
