import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";
import Image from "next/image";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2017-2018 н. р. </h1>
        <br />
        <h2 className="h-2">
          Бакалаври спеціальності 122 «Комп’ютерні науки та інформаційні
          технології» та напряму підготовки 6.040302 «Інформатика»
        </h2>
        <br />
        <ol>
          <li>Дяченко Віталій Олександрович.</li>
          <li>Куркін Володимир Владиславович.</li>
          <li>Куценко Віталій Володимирович.</li>
          <li>Cивокінь Олександр Юрійович.</li>
          <li>Сосновський Дмитро Романович.</li>
          <li>Стовбун Дмитро Олегович.</li>
          <li>Арінін Едуард Сергійович.</li>
          <li>Кравцов Валентин Олександрович.</li>
          <li>Однороб Володимир Володимирович.</li>
          <li>Рудяга Дмитро Сергійович.</li>
          <li>Веприк Валерій Валерійович.</li>
          <li>Гуторов Юрій Андрійович.</li>
          <li>Бах Абібу.</li>
          <li>Мусаєв Сулейман Ельхан огли.</li>
          <li>Бернацька Вікторія Анатоліївна.</li>
        </ol>
        <br />
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Bachelor/2017-2018/gradb18_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2017-2018/gradb18_2.jpg"
              width={400}
              height={400}
              alt=""
            />,
          ]}
        />
        <br />
        <a href="http://www.matmodel.puet.edu.ua/files/grsd-info18.pdf">
          Інформація щодо працевлаштування випускників напряму підготовки
          6.040302 «Інформатика», спеціальності 122 «Комп’ютерні науки та
          інформаційні технології», що закінчили навчання у 2018 році
        </a>
      </div>
    </main>
  );
}
