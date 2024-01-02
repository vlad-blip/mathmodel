import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import Image from "next/image";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2013-2014 н.р.</h1>
        <br />
        <h2 className="h-2">
          Спеціальності 8.04030203, 7. 04030203 «Соціальна інформатика»
        </h2>
        <ol>
          <li>Войнов Іван Сергійович</li>
          <li>Кізеров Дмитро Володимирович</li>
          <li>Крикля Микола Петрович</li>
          <li>Кучугура Віктор Анатолійович</li>
          <li>Овчаренко Олександр Сергійович</li>
          <li>Полнікова Анна Миколаївна</li>
          <li>Самовик Сергій Миколайович</li>
          <li>Усольцев Сергій Ігорович</li>
          <li>Шішінін Максим Миколайович</li>
          <li>Ященко Михайло Юрійович</li>
          <li>Чечель Олексій Олексійович</li>
        </ol>
        <br />
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Specialist/2013-2014/grad2014_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Specialist/2013-2014/grad2014_1.jpg"
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
