import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import Image from "next/image";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2012-2013 н.р.</h1>
        <br />
        <h2 className="h-2">Магістри 8.04030203 «Соціальна інформатика»</h2>
        <ol>
          <li>Ванжа Сергій Валерійович</li>
          <li>Глинський Костянтин Григорович</li>
          <li>Гонтар Аліна Юріївна</li>
          <li>Івахова Юлія Сергіївна</li>
          <li>Мандя Олег Олександрович</li>
          <li>Овсяник Сергій Андрійович</li>
          <li>Пасько Станіслав Юрійович</li>
          <li>Проданець Сергій Васильович</li>
          <li>Скворцов Денис Валерійович</li>
          <li>Шклярчук Яна Станіславівна</li>
        </ol>
        <h2 className="h-2">Спеціалісти 7. 04030203 «Соціальна інформатика»</h2>
        <ol>
          <li>Бабенко Дмитро Анатолійович</li>
          <li>Білокінь Дмитро Сергійович</li>
          <li>Васецький Артем Сергійович</li>
          <li>Гавриленко Андрій Анатолійович</li>
          <li>Євтушенко Сергій Олександрович</li>
          <li>Кліменко Олександр Олександрович</li>
          <li>Ляшенко Ярослава Олександрівна</li>
          <li>Мороз Ярослав Валерійович</li>
          <li>Мотрій Руслан Петрович</li>
          <li>Нефьодов Олександр Ігорович</li>
          <li>Олефір Дмитро Олександрович</li>
          <li>Полибенко Василь Петрович</li>
          <li>Різун Дмитро Геннадійович</li>
          <li>Солопіхін Микита Олегович</li>
        </ol>
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Specialist/2012-2013/grad2013_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Specialist/2012-2013/grad2013_2.jpg"
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
