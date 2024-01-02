import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import Image from "next/image";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2021-2022 н.р</h1>
        <br />
        <h2 className="h-2">Магістри спеціальності 122 «Комп’ютерні науки»</h2>
        <br />
        <ol>
          <li>Алексов Сергій Вікторович </li>
          <li>Гальчун Андрій Миколайович </li>
          <li>Дядечко Максим Валерійович </li>
          <li>Заможський Олександр Олександрович </li>
          <li>Мельницький Ян Віталійович </li>
          <li>Михайловський Роман Михайлович </li>
          <li>Мороз Артур Вадимович </li>
          <li>Недбайло Ярослав Ігорович </li>
          <li>Писаренко Ігор Андрійович </li>
          <li>Сіам Карім Ашрафович </li>
          <li>Фесенко Денис Ігорович </li>
          <li>Цехмейстер Вадим Олександрович </li>
          <li>Рзаєв Емін Фархад огли </li>
        </ol>
        <Image
          src="/Alumni/Masters/2021-2022/mast280322.jpg"
          width={400}
          height={400}
          alt=""
        />
        ,
        <br />
        <a href="http://www.matmodel.puet.edu.ua/files/grm-info22.pdf">
          Інформація щодо працевлаштування випускників спеціальності 122
          «Комп’ютерні науки», що закінчили навчання у 2021-22 н.р.
        </a>
      </div>
    </main>
  );
}
