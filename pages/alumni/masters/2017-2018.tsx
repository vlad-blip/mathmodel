import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";

import styles from "@/styles/Alumni.module.scss";
import Image from "next/image";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2017-2018 н. р.</h1>
        <br />
        <h2 className="h-2">
          Магістри та спеціалісти спеціальності 122 «Комп’ютерні науки та
          інформаційні технології»
        </h2>
        <br />
        <ol>
          <li>Зайцев Сергій Іванович.</li>
          <li>Ольховий Владислав Володимирович.</li>
          <li>Габеда Сергій Олександрович. </li>
          <li>Максименко Артем Сергійович.</li>
          <li>Морозова Ілона Борисівна.</li>
          <li>Фоменко Олександр Сергійович. </li>
        </ol>
        <Image
          src={"/Alumni/Masters/2017-2018/gradm18.jpg"}
          width={400}
          height={400}
          alt=""
        />
      </div>
    </main>
  );
}
