import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";
import Image from "next/image";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2022-2023 н.р</h1>
        <p>Всього кафедра випустила 480 бакалаврів за 2008-2022 рр.</p>
        <br />
        <h2 className="h-2">Бакалаври спеціальності «Комп’ютерні науки»</h2>
        <br />
        <ol>
          <li>Абрамов Михайло Сергійович</li>
          <li>Ананенко Ірина Віталіївна</li>
          <li>Банасюкевич Лілія Сергіївна</li>
          <li>Береговий Ростислав Романович</li>
          <li>Бондар Дарина Олександрівна</li>
          <li>Варава Андрій Вікторович</li>
          <li>Гераскевич Роман Сергійович</li>
          <li>Головатенко Зоряна Геннадіївна</li>
          <li>Гриб Денис Миколайович</li>
          <li>Дзюба Олександр Петрович</li>
          <li>Кадесніков Олександр Васильович</li>
          <li>Кандиба Марина Ігорівна</li>
          <li>Кизименко Сергій Анатолійович</li>
          <li>Козир Володимир Анатолійович</li>
          <li>Коляка Денис Вікторович</li>
          <li>Комар Ілля Ігорович</li>
          <li>Коцюба Родіон Олегович</li>
          <li>Кравченко Родіон Юрійович</li>
          <li>Левандовський Дмитро Вадимович</li>
          <li>Ломака Богдан Анатолійович</li>
          <li>Луковець Ігор Олексійович</li>
          <li>Лутченко Олена Євгеніївна</li>
          <li>Малишевський Андрій Олександрович</li>
          <li>Мамон Олександр Олександрович</li>
          <li>Мельніков Іван Дмитрович</li>
          <li>Новіков Євгеній Віталійович</li>
          <li>Пархоменко Андрій Юрійович</li>
          <li>Пархоменко Данило Олександрович</li>
          <li>Покидько Максим Богданович</li>
          <li>Рибак Віталій Андрійович</li>
          <li>Супрун Станіслав Григорович</li>
          <li>Тацій Денис Сергійович</li>
          <li>Терещенко Богдан Сергійович</li>
          <li>Тягло Дмитро Романович</li>
          <li>Фролов Данило Олегович</li>
          <li>Чорнищук Руслан Васильович</li>
          <li>Шаповалов Іван Романович</li>
          <li>Шатохін Микита Олегович</li>
          <li>Швець Вероніка Григорівна</li>
          <li>Шморгун Богдан Олегович</li>
        </ol>
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Bachelor/2022-2023/def23_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2022-2023/def23_2.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2022-2023/def23_3.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2022-2023/def23_4.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2022-2023/def23_5.jpg"
              width={400}
              height={400}
              alt=""
            />,
          ]}
        />
        <br />
        <a href="http://www.matmodel.puet.edu.ua/files/grsd-info22.pdf">
          Інформація щодо працевлаштування випускників спеціальності 122
          «Комп’ютерні науки», що закінчили навчання у 2022 році
        </a>
      </div>
    </main>
  );
}
