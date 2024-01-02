import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import Image from "next/image";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2018-2019 н. р.</h1>
        <br />
        <h2 className="h-2">
          Магістри спеціальностей 122 «Комп’ютерні науки та інформаційні
          технології», «Комп’ютерні науки»
        </h2>
        <br />
        <ol>
          <li>Данник Олександр Іванович. </li>
          <li>Безмєнов Едуард Геннадійович. </li>
          <li>Бровко Євгеній Сергійович.</li>
          <li>Голубенко Віталій Олександрович.</li>
          <li>Голубенко Владислав Олександрович.</li>
          <li>Задорожній Артем В’ячеславович.</li>
          <li>Кильник Вадим Вікторович.</li>
          <li>Кулєша Іван Васильович.</li>
          <li>Мандрика Віталій Миколайович.</li>
          <li>Нестеренко Євгеній Вікторович.</li>
          <li>Русін Владислав Сергійович.</li>
          <li>Сокол Олександр Валентинович.</li>
          <li>Щербак Олександр Валерійович.</li>
          <li>Ярмоленко Андрій Вікторович.</li>
          <li>Доба Артем Ігорович. </li>
          <li>Домненко Станіслав Володимирович.</li>
          <li>Кармазiна Юлія Валеріївна.</li>
          <li>Гончаренко Дмитро Владиславович.</li>
          <li>Тараканова Анна Станіславівна.</li>
        </ol>
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Masters/2018-2019/gradm19_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Masters/2018-2019/gradm19_2.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Masters/2018-2019/gradm19_3.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Masters/2018-2019/gradm19_4.jpg"
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
