import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";
import Image from "next/image";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2018-2019 н. р.</h1>
        <br />
        <h2 className="h-2">
          Бакалаври напряму підготовки 6.040302 «Інформатика»
        </h2>
        <br />
        <ol>
          <li>Випiровська Дарина Олександрівна</li>
          <li>Гарбуз Інна Василівна.</li>
          <li>Шпоротько (Дорош) Валентина Юріївна.</li>
          <li>Капустян Аліна Олександрівна.</li>
          <li>Белінська Вікторія Володимирівна.</li>
          <li>Гальчун Андрій Миколайович.</li>
          <li>Глоба Максим Іванович.</li>
          <li>Гусак Юрій Сергійович.</li>
          <li>Жайворонок Ярослав Ігорович.</li>
          <li>Кривошей Олег Сергійович.</li>
          <li>Медведєв Ігор Сергійович.</li>
          <li>Мирончук Ігор Сергійович.</li>
          <li>Бардаченко Світлана Русланівна.</li>
          <li>Гребенюк Дмитро Сергійович.</li>
          <li>Грязний Павло Юрійович.</li>
          <li>Корсун Ольга Сергіївна.</li>
          <li>Олефіренко Валерій Васильович.</li>
          <li>Товстоножко Олександр Анатолійович.</li>
          <li>Хрупа Владислав Олександрович.</li>
          <li>Цеба Микола Олександрович.</li>
          <li>Чипенко Богдан Юрійович. </li>
          <li>Масмалієв Панах Аскар огли.</li>
          <li>Гмиза Богдан Юрійович.</li>
          <li>Голод Олексій Романович.</li>
          <li>Фурса Едгар Миколайович.</li>
          <li>Мордасова Ірина Володимирівна.</li>
          <li>Шакуро Вадим Євгенійович.</li>
        </ol>
        <br />
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Bachelor/2018-2019/bach19_0.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2018-2019/bach19_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2018-2019/bach19_2.jpg"
              width={400}
              height={400}
              alt=""
            />,
          ]}
        />
        <a href="http://www.matmodel.puet.edu.ua/files/grsd-info19.pdf">
          Інформація щодо працевлаштування випускників напряму підготовки
          6.040302 «Інформатика», що закінчили навчання у 2019 році
        </a>
      </div>
    </main>
  );
}
