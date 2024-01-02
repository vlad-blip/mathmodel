import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";
import Image from "next/image";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2019-2020 н. р.</h1>
        <br />
        <h2 className="h-2">Магістри спеціальності 122 «Комп’ютерні науки»</h2>
        <br />
        <ol>
          <li>Долгов Владислав Олегович. </li>
          <li>Кравцов Валентин Олександрович. </li>
          <li>Куркін Володимир Владиславович. </li>
          <li>Куценко Віталій Володимирович. </li>
          <li>Москаленко Артем Олегович. </li>
          <li>Сивокінь Олександр Юрійович. </li>
          <li>Сосновський Дмитро Романович. </li>
          <li>Стовбун Дмитро Олегович. </li>
          <li>Чуб Олександр Іванович. </li>
          <li>Самборська Ксенія Юріївна. </li>
          <li>Антоненко Анна Анатоліївна. </li>
          <li>Гусар Михайло Васильович. </li>
          <li>Козодуб Владислав Сергійович. </li>
          <li>Григор’єв Владислав Віталійович. </li>
        </ol>
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Masters/2019-2020/mast100620.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Masters/2019-2020/mast100620.jpg"
              width={400}
              height={400}
              alt=""
            />,
          ]}
        />
        <br />
        <a href="http://www.matmodel.puet.edu.ua/files/grm-info20.pdf">
          Інформація щодо працевлаштування випускників спеціальності 122
          «Комп’ютерні науки», що закінчили навчання у 2019-20 н.р.
        </a>
      </div>
    </main>
  );
}
