import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";
import Image from "next/image";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2016-2017 н.р.</h1>
        <br />
        <h2 className="h-2">
          Бакалаври напряму підготовки 6.040302 «Інформатика»
        </h2>
        <br />
        <ol>
          <li>Архипов Юрій Віталійович.</li>
          <li>Безмєнов Едуард Геннадійович.</li>
          <li>Степанян Євгеній Олексійович.</li>
          <li>Щербак Олександр Валерійович.</li>
          <li>Бровко Євгеній Сергійович.</li>
          <li>Голубенко Віталій Олександрович.</li>
          <li>Голубенко Владислав Олександрович.</li>
          <li>Гуменюк Євген Сергійович.</li>
          <li>Домненко Станіслав Володимирович.</li>
          <li>Задорожній Артем В’ячеславович.</li>
          <li>Закаблук Олег Леонідович.</li>
          <li>Кильник Вадим Вікторович.</li>
          <li>Кулєша Іван Васильович.</li>
          <li>Ладур Єгор В’ячеславович.</li>
          <li>Мандрика Віталій Миколайович.</li>
          <li>Нестеренко Євгеній Вікторович.</li>
          <li>Посканний Олександр Олександрович.</li>
          <li>Русін Владислав Сергійович.</li>
          <li>Сімінько Євген Олександрович.</li>
          <li>Сокол Олександр Валентинович.</li>
          <li>Ярмоленко Андрій Вікторович.</li>
          <li>Рамазанов Етібар Ханлар огли.</li>
          <li>Воловик Наталія Петрівна.</li>
          <li>Доба Артем Ігорович.</li>
          <li>Сіраджов Ілкін Мехманович.</li>
          <li>Стасюк Юстина Василівна.</li>
          <li>Трубін Богдан Володимирович.</li>
        </ol>
        <br />
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Bachelor/2016-2017/gradb17_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2016-2017/gradb17_2.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2016-2017/gradb17_3.jpg"
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
