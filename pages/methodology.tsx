import ChoosenDisciplinesBachelor from "@/components/Syllabus/ChoosenDisciplinesBachelor";
import ChoosenDisciplinesMasters from "@/components/Syllabus/ChoosenDisciplinesMasters";
import List from "@/components/Syllabus/List";
import ListItem from "@/components/Syllabus/ListItem";
import SyllabusListBachelor from "@/components/Syllabus/SyllabusListBachelor";
import SyllabusListMasters from "@/components/Syllabus/SyllabusListMasters";

import styles from "@/styles/Methodology.module.scss";
import Link from "next/link";

export default function Methodology() {
  return (
    <main>
      <div className="container">
        <h1 className={`${styles.main_heading} h-1`}>
          Освітньо-професійні програми та навчально-методичне забезпечення
        </h1>
        <h2 className={`${styles.section_heading}`}>Бакалавр</h2>
        <Link
          className={styles.link_program}
          href={"http://www.matmodel.puet.edu.ua/files/122-np-b-2023.pdf"}
        >
          Освітня програма 122 "Комп'ютерні науки" бакалавра 2023
        </Link>
        <List>
          <ListItem heading="Рецензії">
            <ul className={styles.list_reviews}>
              <Link
                className="link"
                href={"http://www.matmodel.puet.edu.ua/files/rec122b23-1.pdf"}
              >
                Рецензія 1
              </Link>
              <Link
                className="link"
                href={"http://www.matmodel.puet.edu.ua/files/rec122b23-2.pdf"}
              >
                Рецензія 2
              </Link>
              <Link
                className="link"
                href={"http://www.matmodel.puet.edu.ua/files/rec122b23-3.pdf"}
              >
                Рецензія 3
              </Link>
              <Link
                className="link"
                href={"http://www.matmodel.puet.edu.ua/files/rec122b23-3.pdf"}
              >
                Рецензія 4
              </Link>
            </ul>
          </ListItem>
        </List>
        <Link
          className={styles.link_program}
          href={"http://www.matmodel.puet.edu.ua/files/compare-122-b.pdf"}
        >
          Порівняльний аналіз освітньої програми Комп’ютерні науки ступеня
          бакалавра з провідними ЗВО
        </Link>
        <h2 className={`${styles.section_heading}`}>Магістр</h2>
        <Link
          className={styles.link_program}
          href={"http://www.matmodel.puet.edu.ua/files/122-op-m-2023.pdf"}
        >
          Освітня програма 122 "Комп'ютерні науки" магістра 2023
        </Link>
        <List>
          <ListItem heading="Рецензії">
            <ul className={styles.list_reviews}>
              <Link
                className="link"
                href={"http://www.matmodel.puet.edu.ua/files/rec122m-1.pdf"}
              >
                Рецензія 1
              </Link>
              <Link
                className="link"
                href={"http://www.matmodel.puet.edu.ua/files/rec122m-2.pdf"}
              >
                Рецензія 2
              </Link>
              <Link
                className="link"
                href={"http://www.matmodel.puet.edu.ua/files/rec122m-3.pdf"}
              >
                Рецензія 3
              </Link>
              <Link
                className="link"
                href={"http://www.matmodel.puet.edu.ua/files/rec122m-4.pdf"}
              >
                Рецензія 4
              </Link>
              <Link
                className="link"
                href={"http://www.matmodel.puet.edu.ua/files/rec122m-5.pdf"}
              >
                Рецензія 5
              </Link>
            </ul>
          </ListItem>
        </List>
        <Link
          className={styles.link_program}
          href={"http://www.matmodel.puet.edu.ua/files/compare-122-m.pdf"}
        >
          Порівняльний аналіз освітньої програми Комп’ютерні науки ступеня
          бакалавра з провідними ЗВО
        </Link>
        <h2 className={`${styles.section_heading}`}>
          Освітньо-професійні програми спеціальності 122 Комп'ютерні науки
        </h2>
        <h2 className={`${styles.section_heading}`}>
          СИЛАБУСИ ТА РОБОЧІ ПРОГРАМИ НАВЧАЛЬНИХ ДИСЦИПЛІН ДЛЯ СТУДЕНТІВ ПЕРШОГО
          (БАКАЛАВРСЬКОГО) РІВНЯ ВИЩОЇ ОСВІТИ
        </h2>
        <SyllabusListBachelor />
        <h2 className={`${styles.section_heading}`}>
          Вибіркові освітні компоненти
        </h2>
        <ChoosenDisciplinesBachelor />
        <h2 className={`${styles.section_heading} `}>
          СИЛАБУСИ ТА РОБОЧІ ПРОГРАМИ НАВЧАЛЬНИХ ДИСЦИПЛІН ДЛЯ СТУДЕНТІВ ДРУГОГО
          (МАГІСТЕРСЬКОГО) РІВНЯ ВИЩОЇ ОСВІТИ
        </h2>
        <SyllabusListMasters />
        <h2 className={`${styles.section_heading} `}>
          Вибіркові освітні компоненти
        </h2>
        <ChoosenDisciplinesMasters />
      </div>
    </main>
  );
}
