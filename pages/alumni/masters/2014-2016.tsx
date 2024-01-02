import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import Image from "next/image";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2014-2016 н.р.</h1>
        <br />
        <h2 className="h-2">
          Магістри 8.04030203 «Соціальна інформатика» 2014-15 н.р.
        </h2>
        <br />
        <ol>
          <li>Бен Сауд Тарек Бен Тахер.</li>
          <li>Бочинський Максим Сергійович.</li>
          <li>Душинська Аліна Володимирівна.</li>
          <li>Макаренко Яна Миколаївна.</li>
          <li>Петров Іван Володимирович.</li>
          <li>Смирнов Антон Борисович.</li>
          <li>Спінжар Вікторія Русланівна.</li>
          <li>Ставковий Максим Юрійович.</li>
          <li>Томченко Олексій Васильович.</li>
          <li>Фесик Олександр Олексійович.</li>
          <li>Шаманський В’ячеслав Олегович.</li>
        </ol>
        <Image
          src="/public/Alumni/Masters/2014-2015/grad16_1.jpg"
          width={400}
          height={400}
          alt=""
        />
        <h2 className="h-2">
          Спеціалісти 7.04030203 «Соціальна інформатика» 2014-16 н.р.
        </h2>
        <ol>
          <li>Ворона Максим Віталійович.</li>
          <li>Жулінський Богдан Тарасович.</li>
          <li>Кібіткін Ігор Вікторович.</li>
          <li>Кондрашев Денис Максимович.</li>
          <li>Крамаренко Богдан Валерійович.</li>
          <li>Семенчак Олексій Едуардович.</li>
          <li>Яроха Максим Володимирович.</li>
          <li>Куліш Сергій Олександрович.</li>
        </ol>
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Specialist/2014-2016/grad16_2.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Specialist/2014-2016/grad16_2.jpg"
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
