import styles from "./Fact.module.scss";
import Image from "next/image";

type FactProps = {
  title: string;
  img: string;
  number: string;
  description: string;
};

export default function Fact({ title, img, number, description }: FactProps) {
  return (
    <div className={styles.container}>
      <h2 className="h-2">{title}</h2>
      <Image
        className={styles.img}
        src={img}
        width={145}
        height={145}
        alt="Fact illustraion"
      />
      <p className={styles.number}>{number}</p>
      <p className="text-1">
        <b>{description}</b>
      </p>
    </div>
  );
}
