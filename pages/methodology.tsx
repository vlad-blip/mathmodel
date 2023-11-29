import SyllabusList from "@/components/Syllabus/SyllabusList";

import styles from "@/styles/Methodology.module.scss";

export default function Methodology() {
  return (
    <main>
      <div className="container">
        <h1 className={`${styles.main_heading} h-1`}>
          Освітньо-професійні програми та навчально-методичне забезпечення
        </h1>
        <h2 className={`${styles.section_heading} h-2`}>
          Освітньо-професійні програми спеціальності 122 Комп'ютерні науки
        </h2>
        <h2 className={`${styles.section_heading} h-2`}>
          СИЛАБУСИ ТА РОБОЧІ ПРОГРАМИ НАВЧАЛЬНИХ ДИСЦИПЛІН ДЛЯ СТУДЕНТІВ ПЕРШОГО
          (БАКАЛАВРСЬКОГО) РІВНЯ ВИЩОЇ ОСВІТИ
        </h2>
        <SyllabusList />
        <h2 className={`${styles.section_heading} h-2`}>
          СИЛАБУСИ ТА РОБОЧІ ПРОГРАМИ НАВЧАЛЬНИХ ДИСЦИПЛІН ДЛЯ СТУДЕНТІВ ДРУГОГО
          (МАГІСТЕРСЬКОГО) РІВНЯ ВИЩОЇ ОСВІТИ
        </h2>
        <SyllabusList />
      </div>
    </main>
  );
}
