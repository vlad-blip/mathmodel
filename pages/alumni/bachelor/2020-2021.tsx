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
          <li>Борута Іван Володимирович.</li>
          <li>Горбенко Владислав Сергійович.</li>
          <li>Рак Андрій Олександрович.</li>
          <li>Сузанська Аделіна Олександрівна.</li>
          <li>Шабоян Артур Тігранович.</li>
          <li>Закіров Ренат Раїфович.</li>
          <li>Соболєв Денис Андрійович.</li>
          <li>Бурко Андрій Олександрович.</li>
          <li>Гак Олександр Олександрович.</li>
          <li>Деркач Роман Анатолійович.</li>
          <li>Дудник Дмитро Анатолійович.</li>
          <li>Заливчий Михайло Вячеславович.</li>
          <li>Котенко Сергій Костянтинович.</li>
          <li>Коровайкін Єгор Дмитрович.</li>
          <li>Крамаренко Олександр Володимирович.</li>
          <li>Купченко Олексій Володимирович.</li>
          <li>Кучер Павло Андрійович.</li>
          <li>Мірзоєв Ібрагім Джафар огли.</li>
          <li>Нікітков Роман Дмитрович.</li>
          <li>Педченко Вадим Миколайович.</li>
          <li>Пилипченко Віталій Сергійович.</li>
          <li>Хорольський Владислав Олександрович.</li>
          <li>Бибка Богдан Миколайович.</li>
          <li>Веретельник Микита Русланович.</li>
          <li>Горєв Родіон Олександрович.</li>
          <li>Клименко Микола Миколайович.</li>
          <li>Ломака Максим Анатолійович.</li>
          <li>Малишева Дар`я Василівна.</li>
          <li>Орламенко Софія Андріївна.</li>
          <li>Парасоцький Ростислав Богданович.</li>
          <li>Пильник Сергій Олександрович.</li>
          <li>Порожняков Володимир Олександрович.</li>
          <li>Рижков Артем Віталійович.</li>
          <li>Срібний Сергій Юрійович.</li>
          <li>Ткаленко Юрій Олександрович.</li>
          <li>Яремченко Сергій Іванович.</li>
          <li>Будяй Віталій Олексійович.</li>
          <li>Дашевський Василь Андрійович.</li>
          <li>Дзяткевич Максим Олегович.</li>
          <li>Дідик Віктор Васильович.</li>
          <li>Іжевський Дмитро Олегович.</li>
          <li>Любовецький Тарас Олегович.</li>
          <li>Мойсеєнко Максим Олександрович.</li>
          <li>Нечай Валентин Володимирович.</li>
          <li>Пластуняк Руслан Богданович.</li>
          <li>Флерчук Вадим Олександрович.</li>
          <li>Франко Вадим Анатолійович.</li>
          <li>Аднан Мухаммад.</li>
          <li>Чагонда Н'яша Стенлі.</li>
          <li>Ларті Вахаб Хакім.</li>
          <li>Дарбое Амадоу.</li>
          <li>Лукіна Вікторія Володимирівна.</li>
        </ol>
        <br />
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Bachelor/2020-2021/def170621_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2020-2021/def170621_2.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2020-2021/def170621_3.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2020-2021/def170621_4.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2020-2021/def180621_1.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Bachelor/2020-2021/def260321.jpg"
              width={400}
              height={400}
              alt=""
            />,
          ]}
        />
        <a href="http://www.matmodel.puet.edu.ua/files/grsd-info20.pdf">
          Інформація щодо працевлаштування випускників спеціальності 122
          «Комп’ютерні науки», «Комп’ютерні науки та інформаційні технології»,
          що закінчили навчання у 2020 році
        </a>
      </div>
    </main>
  );
}
