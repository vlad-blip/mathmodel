import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2014-2015 н.р.</h1>
        <br />
        <h2 className="h-2">
          Бакалаври напряму підготовки 6.040302 «Інформатика»
        </h2>
        <br />
        <ol>
          <li>Журавель Євген Вікторович</li>
          <li>Куліш Сергій Олександрович</li>
          <li>Марченко Дмитро Анатолійович </li>
          <li>Педоренко Сергій Васильович</li>
          <li>Потерайло Олександр Олександрович</li>
          <li>Цюрюпа Володимир Сергійович</li>
          <li>Прімов Хікмат Назім огли</li>
          <li>Рустамов Парвін Рашадет огли</li>
          <li>Іву Іфеаниі Майкл </li>
          <li>Одіма Джонатан </li>
          <li>Одімегву Ремі Іфеані </li>
          <li>Схеба Болуватіфе Олуранті Грейс</li>
          <li>Тіджджані Мухаммад Назіфі</li>
          <li>Шоур Юсіф Камал</li>
        </ol>
        <br />
      </div>
    </main>
  );
}
