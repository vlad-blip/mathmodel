import ButtonOutline from "../ButtonOutline/ButtonOutline";
import Image from "next/image";

import styles from "./Staff.module.scss";

type StaffProps = {
  img: string;
  name: string;
  description: string;
  url: string;
};

export default function Staff({ img, name, description, url }: StaffProps) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={img}
        width={260}
        height={300}
        alt={`${name} photo`}
      />
      <h3 className="h-3">{name}</h3>
      <p className={styles.description}>{description}</p>
      <ButtonOutline type="link" href={url}>
        Докладніше
      </ButtonOutline>
    </div>
  );
}
