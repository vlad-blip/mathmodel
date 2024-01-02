import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";
import Image from "next/image";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2020-2021 н. р.</h1>
        <br />
        <h2 className="h-2">Магістри спеціальності 122 «Комп’ютерні науки»</h2>
        <br />
        <ol>
          <li>Гусак Юрій Сергійович. </li>
          <li>Жайворонок Ярослав Ігорович. </li>
          <li>Кривошей Олег Сергійович. </li>
          <li>Товстоножко Олександр Анатолійович. </li>
          <li>Чипенко Богдан Юрійович. </li>
          <li>Белінська Вікторія Володимирівна. </li>
          <li>Олефіренко Валерій Васильович. </li>
          <li>Стельнік Андрій Іванович. </li>
          <li>Коломієць Євгеній Сергійович.</li>
          <li>Остапов Ігор Сергійович.</li>
        </ol>
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Masters/2020-2021/def180621_2.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Masters/2020-2021/mast241220_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Masters/2020-2021/mast241220_2.jpg"
              width={400}
              height={400}
              alt=""
            />,
          ]}
        />
        <br />
        <a href="http://www.matmodel.puet.edu.ua/files/grm-info21.pdf">
          Інформація щодо працевлаштування випускників спеціальності 122
          «Комп’ютерні науки», що закінчили навчання у 2020-21 н.р.
        </a>
      </div>
    </main>
  );
}
