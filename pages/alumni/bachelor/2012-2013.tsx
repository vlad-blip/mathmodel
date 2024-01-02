import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2013-2014 н.р.</h1>
        <br />
        <h2 className="h-2">
          Бакалаври напряму підготовки 6.040302 «Інформатика»
        </h2>
        <br />
        <ol>
          <li>Бігдан Олександр Романович</li>
          <li>Войнов Іван Сергійович</li>
          <li>Кізеров Дмитро Володимирович </li>
          <li>Кучугура Віктор Анатолійович</li>
          <li>Овчаренко Олександр Сергійович</li>
          <li>Петля Костянтин Миколайович </li>
          <li>Полнікова Анна Миколаївна </li>
          <li>Самовик&nbsp; Сергій Миколайович</li>
          <li>Ставицький Дмитро Олександрович</li>
          <li>Усольцев Сергій Ігорович </li>
          <li>Халімон&nbsp; Андрій Вікторович</li>
          <li>Шішінін Максим Миколайович</li>
          <li>Ященко Михайло Юрійович</li>
          <li>Чечель Олексій Олексійович </li>
        </ol>
        <br />
      </div>
    </main>
  );
}
