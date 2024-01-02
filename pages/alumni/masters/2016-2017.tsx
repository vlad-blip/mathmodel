import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";
import Image from "next/image";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2016-2017 н. р.</h1>
        <br />
        <h2 className="h-2">
          Магістри 8.04030203 «Соціальна інформатика» 2014-15 н.р.
        </h2>
        <br />
        <ol>
          <li>Бурмус Олексій Володимирович.</li>
          <li>Кондрашев Денис Максимович.</li>
          <li>Марченко Дмитро Анатолійович.</li>
          <li>Педоренко Сергій Васильович.</li>
          <li>Потерайло Олександр Олександрович.</li>
          <li>Цюрюпа Володимир Сергійович.</li>
          <li>Іву Іфеаниі Майкл.</li>
          <li>Одіма Джонатан.</li>
          <li>Одімегву Ремі Іфеані.</li>
          <li>Шоур Юсіф Камал.</li>
          <li>Прімов Хікмат Назім огли.</li>
          <li>Корост Олександр Олександрович.</li>
        </ol>
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Masters/2016-2017/gradm17_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Masters/2016-2017/gradm17_2.jpg"
              width={400}
              height={400}
              alt=""
            />,
          ]}
        />
      </div>
    </main>
  );
}
