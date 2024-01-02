import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2015-2016 н.р.</h1>
        <br />
        <h2 className="h-2">
          Бакалаври напряму підготовки 6.040302 «Інформатика»
        </h2>
        <br />
        <ol>
          <li>Газанфарлі Орхан Хабіль огли</li>
          <li>Горобцов Назар Сергійович</li>
          <li>Дворовенко Богдан Ігорович</li>
          <li>Зуєв Роман В’ячеславович</li>
          <li>Наджафова Гюнай Мамед кизи</li>
          <li>Ойедаре Ойефемі Самуел</li>
          <li>Собко Денис Олександрович</li>
        </ol>
        <br />
      </div>
    </main>
  );
}
