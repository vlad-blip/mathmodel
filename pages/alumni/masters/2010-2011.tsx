import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2010-2011 н.р</h1>
        <br />
        <h2 className="h-2">Магістри 8.080204 «Соціальна інформатика»</h2>
        <br />
        <ol>
          <li>Антонець Олег Миколайович</li>
          <li>Бернацький Василь&nbsp; Сергійович </li>
          <li>Гордієнко Анна Володимирівна</li>
          <li>Дігтяр Артем Васильович </li>
          <li>Дорошенко Андрій Олександрович </li>
          <li>Костерін Ярослав Ігорович </li>
          <li>Костеріна Оксана Олександрівна </li>
          <li>Максименко Микола Леонідович </li>
          <li>Олійник Світлана Віталіївна</li>
          <li>Трейтяченко Михайло Григорович</li>
        </ol>
        <br />
        <h2 className="h-2">Спеціалісти 7.080204 «Соціальна інформатика»</h2>
        <ol>
          <li>Добрянський Петро Петрович </li>
          <li>Койнаш Михайло Сергійович </li>
          <li>Колісник Віта Василівна </li>
          <li>Котляревський Антон Ігорович </li>
          <li>Миколаєнко Юлія Олександрівна</li>
          <li>Могильний Віталій Олександрович</li>
          <li>Нуріахметов Едуард Ільдарович </li>
          <li>Петров Нікіта Юрійович </li>
          <li>Реєнт&nbsp; Євгеній Вікторович </li>
          <li>&nbsp;Тимченко Ростислав Миколайович </li>
          <li>&nbsp;Шаталов&nbsp; Богдан&nbsp; Володимирович </li>
        </ol>
      </div>
    </main>
  );
}
