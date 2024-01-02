import AlumniFilter from "@/components/AlumniFilter/AlumniFilter";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";
import Image from "next/image";

import styles from "@/styles/Alumni.module.scss";

export default function Alumni() {
  return (
    <main className="main">
      <div className={`container ${styles.alumni_container}`}>
        <AlumniFilter />
        <h1 className="h-1 page-heading">Випускники 2022-2023 н.р</h1>
        <p>
          Всього кафедра випустила 308 спеціалістів та магістрів за 2008-2023
          рр.
        </p>
        <br />
        <h2 className="h-2">Магістри спеціальності 122 «Комп’ютерні науки»</h2>
        <br />
        <ol>
          <li>Бурко Андрій Олександрович</li>
          <li>Купченко Олексій Володимирович</li>
          <li>Пилипченко Віталій Сергійович</li>
          <li>Сімперович Микита Михайлович</li>
          <li>Литвиненко Алла Іванівна</li>
          <li>Русських Андрій Юрійович</li>
          <li>Старчик Владислав Віталійович</li>
          <li>Субота Ілона Володимирівна</li>
          <li>Ярош Андрій Віталійович</li>
          <li>Порожняков Володимир Олександрович</li>
        </ol>
        <ImagesCarousel
          images={[
            <Image
              src="/Alumni/Masters/2022-2023/mast200123-0.jpg"
              width={400}
              height={400}
              alt=""
            />,
            <Image
              src="/Alumni/Masters/2022-2023/mast200123.jpg"
              width={400}
              height={400}
              alt=""
            />,
          ]}
        />
        <br />
        <a href="http://www.matmodel.puet.edu.ua/files/grm-info23.pdf">
          Інформація щодо працевлаштування випускників спеціальності 122
          «Комп’ютерні науки», що закінчили навчання у 2022-23 н.р.
        </a>
      </div>
    </main>
  );
}
