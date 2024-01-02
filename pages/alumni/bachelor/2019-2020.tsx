import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";
import Image from "next/image";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2019-2020 н. р.</h1>
        <br />
        <h2 className="h-2">
          Бакалаври спеціальностей «Комп’ютерні науки», «Комп’ютерні науки та
          інформаційні технології»
        </h2>
        <br />
        <ol>
          <li>Голубенко Роман Володимирович.</li>
          <li>Денисенко Валерій Вікторович.</li>
          <li>Дядечко Максим Валерійович.</li>
          <li>Заможський Олександр Олександрович.</li>
          <li>Лещенко Ігор Валентинович.</li>
          <li>Мельницький Ян Віталійович.</li>
          <li>Михайловський Роман Михайлович.</li>
          <li>Мороз Артур Вадимович.</li>
          <li>Недбайло Ярослав Ігорович.</li>
          <li>Ніколаєнко Олексій Васильович.</li>
          <li>Ричков Максим Вікторович.</li>
          <li>Сіам Карім Ашрафович.</li>
          <li>Спорнік Сергій Сергійович.</li>
          <li>Тітар Євгеній Васильович.</li>
          <li>Тищенко Владислав Юрійович.</li>
          <li>Фесенко Денис Ігорович.</li>
          <li>Шаркий Ярослав Іванович.</li>
          <li>Койло Максим Юрійович.</li>
          <li>Колінько Євгеній Андрійович.</li>
          <li>Кулинич Марина Костянтинівна.</li>
          <li>Міщенко Станіслав Анатолійович.</li>
          <li>Писаренко Ігор Андрійович.</li>
          <li>Цикозін Олег Вадимович.</li>
          <li>Шульга Ілля Ігорович.</li>
          <li>Алексов Сергій Вікторович.</li>
          <li>Белінський Олексій Борисович.</li>
          <li>Величко Артур Олександрович.</li>
          <li>Волосевич Максим Васильович.</li>
          <li>Князєв Олексій Миколайович.</li>
          <li>Костромін Ігор Ігорович.</li>
          <li>Скромінський Михайло Віталійович.</li>
          <li>Цехмейстер Вадим Олександрович.</li>
          <li>Мамедов Ахмед Алі огли.</li>
          <li>Рзаєв Емін Фархад огли. </li>
        </ol>
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Bachelor/2019-2020/bach20_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2019-2020/bach20_2.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2019-2020/bach20_3.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2019-2020/bach20_4.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2019-2020/bach20_5.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2019-2020/bach20_6.jpg"
              width={400}
              height={400}
              alt=""
            />,
          ]}
        />
        <br />
        <a href="http://www.matmodel.puet.edu.ua/files/grsd-info20.pdf">
          Інформація щодо працевлаштування випускників спеціальності 122
          «Комп’ютерні науки», «Комп’ютерні науки та інформаційні технології»,
          що закінчили навчання у 2020 році
        </a>
      </div>
    </main>
  );
}
