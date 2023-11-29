import styles from "@/styles/Disciplines.module.scss";

export default function Disciplines() {
  return (
    <main className="main">
      <div className={`container`}>
        <h1 className="h-1 page-heading">Дисципліни</h1>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          В 2023-2024 навчальному році кафедра КНІТ буде викладати наступні 59
          дисциплін:
        </h2>
        <br />
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          Для спеціальності Комп’ютерні науки:
        </h2>
        <br />
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>Бакалаври</h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>I курс</h3>
            <ol className={styles.disciplines_list}>
              <li>Алгебра та геометрія</li>
              <li>Дискретна математика</li>
              <li>Математичний аналіз</li>
              <li>
                Правові основи діяльності в сфері інформаційних технологій та
                інформаційної безпеки
              </li>
              <li>Програмування І ч.1, ч.2</li>
              <li>Інтернет-технології</li>
              <li>Інформатика ч1, ч.2</li>
            </ol>
          </div>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>ІІ курс</h3>
            <ol className={styles.disciplines_list}>
              <li>Офісні комп&rsquo;ютерні технології</li>
              <li>Організаціята обробка електронної інформації</li>
              <li>Теорія ймовірностей і математична статистика</li>
              <li>Алгоритми і структури даних</li>
              <li>Архітектура обчислювальних систем</li>
              <li>Операційні системи та системне програмування</li>
              <li>Програмування ІІ</li>
              <li>Основи комп&rsquo;ютерного дизайну</li>
              <li>Проектне навчання з курсу Програмування ІІ</li>
              <li>Математична логіка</li>
              <li>Теорія інформації та кодування</li>
            </ol>
          </div>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>IІІ курс</h3>
            <ol className={styles.disciplines_list}>
              <li>Елементи комбінаторної оптимізації</li>
              <li>Методи оптимізації та дослідження операцій</li>
              <li>Обробка зображень та мультімедіа</li>
              <li>Обчислювальні методи</li>
              <li>Платформи корпоративних інформаційних систем</li>
              <li>
                Проектне навчання з курсуМетоди оптимізації та дослідження
                операцій
              </li>
              <li>
                Проектне навчання з курсуСистемний аналіз та теорія прийняття
                рішень
              </li>
              <li>Програмування та підтримка веб-застосувань</li>
              <li>Системний аналіз та теорія прийняття рішень</li>
              <li>Теорія алгоритмів</li>
              <li>Теорія програмування</li>
            </ol>
          </div>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>IV курс</h3>
            <ol className={styles.disciplines_list}>
              <li>Курсовий проект з фаху</li>
              <li>Захист інформації</li>
              <li>Проектне навчання з курсу Інтернет-технології</li>
              <li>Проектне навчання з курсу Інформатика</li>
              <li>Проектування програмних систем</li>
              <li>Стандарти в інформаційних технологіях</li>
              <li>Інтелектуальні інформаційні системи</li>
              <li>Інформаційні мережі</li>
              <li>Розподілені інформаційно-аналітичні системи</li>
            </ol>
          </div>
        </div>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>Магістри</h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>І курс</h3>
            <ol className={styles.disciplines_list}>
              <li>Аналіз алгоритмів</li>
              <li>Бізнес аналіз та проєктний менеджмент в ІТ-галузі</li>
              <li>Курсовий проект з фаху</li>
              <li>Методології розробки та якість програмного забезпечення</li>
              <li>
                Операційні системи та сучасні архітектурні рішення у хмарних
                середовищах
              </li>
              <li>Основи наукових досліджень в інформатиці</li>
              <li>Сучасні методи оптимізації та їх програмування</li>
              <li>Технології зберігання аналізу даних</li>
              <li>Науковий семінар</li>
              <li>
                Методика викладання інформаційних та математичних дисциплін у
                закладах вищої освіти
              </li>
              <li>Практика перекладу в галузі інформатика (англійська мова)</li>
              <li>Імітаційне моделювання, мови моделювання та імітації</li>
              <li>Нейронно-мережеві технології в інформатиці</li>
            </ol>
          </div>
        </div>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          Дисципліни загально університетського вибору:
        </h2>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>Бакалаври</h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <ol className={styles.disciplines_list}>
              <li>Обробка зображень та мультімедіа</li>
              <li>Основи комп&rsquo;ютерного дизайну</li>
            </ol>
          </div>
        </div>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          Дисципліни для інших спеціальностей:
        </h2>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          Молодший бакалавр, бакалавр
        </h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <ol className={styles.disciplines_list}>
              <li>Вища математика</li>
              <li>Вища та прикладна математика</li>
              <li>Прикладна математика</li>
              <li>Фізика</li>
              <li>Інтернет-технології та соціальні медіа</li>
              <li>Web-аналітика</li>
              <li>Інформаційні технології та системи</li>
              <li>Сучасні інформаційні та комунікаційні технології</li>
              <li>Прикладне програмне забезпечення</li>
            </ol>
          </div>
        </div>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          В 2022-2023 навчальному році кафедра КНІТ викладає наступні 58
          дисциплін:
        </h2>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          Для спеціальності Комп&rsquo;ютерні науки:
        </h2>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>Бакалаври</h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>I курс</h3>
            <ol className={styles.disciplines_list}>
              <li>Алгебра та геометрія</li>
              <li>Дискретна математика</li>
              <li>Математичний аналіз</li>
              <li>
                Правові основи діяльності в сфері інформаційних технологій та
                інформаційної безпеки
              </li>
              <li>Програмування І ч.1, ч.2</li>
              <li>Інтернет-технології</li>
            </ol>
          </div>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>ІІ курс</h3>
            <ol className={styles.disciplines_list}>
              <li>Математична логіка</li>
              <li>Офісні комп&rsquo;ютерні технології</li>
              <li>Теорія ймовірностей і математична статистика</li>
              <li> Алгоритми і структури даних</li>
              <li>Архітектура обчислювальних систем</li>
              <li>Операційні системи та системне програмування</li>
              <li>Програмування ІІ</li>
              <li>Основи комп&rsquo;ютерного дизайну</li>
              <li>Проектне навчання з курсу Програмування ІІ</li>
            </ol>
          </div>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>IІІ курс</h3>
            <ol className={styles.disciplines_list}>
              <li>Елементи комбінаторної оптимізації </li>
              <li>Методи оптимізації та дослідження операцій</li>
              <li>Обробка зображень та мультимедіа</li>
              <li>Обчислювальні методи</li>
              <li>Платформи корпоративних інформаційних систем</li>
              <li>
                Проектне навчання з курсу Методи оптимізації та дослідження
                операцій
              </li>
              <li>
                Проектне навчання з курсу Системний аналіз та теорія прийняття
                рішень
              </li>
              <li>Програмування та підтримка веб-застосувань</li>
              <li>Системний аналіз та теорія прийняття рішень</li>
              <li>Теорія алгоритмів</li>
              <li>Теорія програмування</li>
            </ol>
          </div>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>I V курс</h3>
            <ol className={styles.disciplines_list}>
              <li>Курсовий проект з фаху</li>
              <li>Аналіз даних та прикладні пакети статистичної обробки</li>
              <li>Захист інформації</li>
              <li>Проектне навчання з курсу Інтернет-технології</li>
              <li>Проектування програмних систем</li>
              <li>Стандарти в інформаційних технологіях</li>
              <li>Сучасні парадигми програмування</li>
              <li>Інтелектуальні інформаційні системи</li>
              <li>Інформаційні мережі</li>
            </ol>
          </div>
        </div>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>Магістри</h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>І курс</h3>
            <ol className={styles.disciplines_list}>
              <li>Аналіз алгоритмів</li>
              <li>Курсовий проект з фаху</li>
              <li>Методології розробки та якість програмного забезпечення</li>
              <li>Операційні системи Unix</li>
              <li>Основи наукових досліджень в інформатиці</li>
              <li>Сучасні методи оптимізації та їх програмування</li>
              <li>Технології зберігання аналізу даних</li>
              <li> Інформаційні мережі</li>
              <li> Сучасні парадигми програмування</li>
              <li> Імітаційне моделювання, мови моделювання та імітації</li>
            </ol>
          </div>
        </div>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          Дисципліни загально університетського вибору:
        </h2>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>Бакалаври</h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <ol className={styles.disciplines_list}>
              <li>Захист інформації</li>
              <li>Основи комп&rsquo;ютерного дизайну</li>
            </ol>
          </div>
        </div>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          Дисципліни для інших спеціальностей.
        </h2>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          Молодший бакалавр, бакалавр
        </h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <ol className={styles.disciplines_list}>
              <li>Вища математика</li>
              <li>Вища та прикладна математика</li>
              <li>Прикладна математика</li>
              <li>Фізика</li>
              <li>Інтернет-технології та соціальні медіа</li>
              <li>Web-аналітика</li>
              <li>Інтернет-технології в юридичній діяльності</li>
              <li>Інформаційні технології та системи</li>
              <li>Сучасні інформаційні та комунікаційні технології</li>
              <li>Прикладне програмне забезпечення</li>
            </ol>
          </div>
        </div>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          В 2021-2022 навчальному році кафедра КНІТ викладає 48 дисциплін для
          спеціальності &laquo;Комп&rsquo;ютерні науки&raquo;:
        </h2>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>Бакалаври</h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>I курс</h3>
            <ol className={styles.disciplines_list}>
              <li> Алгебра та геометрія</li>
              <li>Дискретна математика</li>
              <li>Математичний аналіз</li>
              <li>Організація та обробка електронної інформації</li>
              <li>Програмування І ч.1, ч.2</li>
              <li>Інтернет-технології</li>
              <li>Інформатика ч1, ч.2</li>
              <li>
                Навчальна практика. Вступ до фаху (Університетська освіта)
              </li>
            </ol>
          </div>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>ІІ курс</h3>
            <ol className={styles.disciplines_list}>
              <li> Математична логіка</li>
              <li>Теорія ймовірностей і математична статистика</li>
              <li>Алгоритми і структури даних</li>
              <li>Архітектура обчислювальних систем</li>
              <li>Операційні системи та системне програмування</li>
              <li>Програмування ІІ</li>
              <li>Основи комп&rsquo;ютерного дизайну</li>
              <li>Проектне навчання з курсу Програмування ІІ</li>
            </ol>
          </div>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>IІІ курс</h3>
            <ol className={styles.disciplines_list}>
              <li> Методи оптимізації та дослідження операцій</li>
              <li>Програмування та підтримка веб-застосувань</li>
              <li>Системний аналіз та теорія прийняття рішень</li>
              <li>Теорія алгоритмів</li>
              <li>Теорія програмування</li>
              <li>Обчислювальні методи</li>
              <li>
                Проектне навчання з курсу Методи оптимізації та дослідження
                операцій
              </li>
              <li>
                Проектне навчання з курсу Системний аналіз та теорія прийняття
                рішень
              </li>
              <li> Елементи комбінаторної оптимізації</li>
              <li>Платформи корпоративних інформаційних систем</li>
              <li>Обробка зображень та мультимедіа</li>
            </ol>
          </div>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>I V курс</h3>
            <ol className={styles.disciplines_list}>
              <li> Захист інформації</li>
              <li>Курсовий проект з фаху</li>
              <li>Проектування програмних систем</li>
              <li>Стандарти в інформаційних технологіях</li>
              <li>Інтелектуальні інформаційні системи</li>
              <li>Інформаційні мережі</li>
              <li>Розподілені інформаційно-аналітичні системи</li>
            </ol>
          </div>
        </div>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>Магістри</h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <h3 className={styles.disciplines_heading}>І курс</h3>
            <ol className={styles.disciplines_list}>
              <li>Аналіз алгоритмів</li>
              <li>Курсовий проект з фаху</li>
              <li>Науковий семінар</li>
              <li>
                Методика викладання інформаційних та математичних дисциплін у
                ВНЗ
              </li>
              <li>Основи наукових досліджень в інформатиці</li>
              <li>
                Проектне навчання з курсу Сучасні методи оптимізації та їх
                програмування
              </li>
              <li>Сучасні методи оптимізації та їх програмування</li>
              <li>Комп&rsquo;ютерний аналіз статистичних даних</li>
              <li>Нейронно-мережеві технології в інформатиці</li>
              <li>Операційні системи Unix</li>
              <li>Імітаційне моделювання, мови моделювання та імітації</li>
            </ol>
          </div>
        </div>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          Дисципліни загально університетського вибору:
        </h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <ol className={styles.disciplines_list}>
              <li>Алгоритми і структури даних</li>
              <li>Обробка зображень та мультимедіа</li>
            </ol>
          </div>
        </div>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          Дисципліни для інших спеціальностей:
        </h2>
        <h2 className={`h-2 ${styles.disciplines_heading_main}`}>
          Молодший бакалавр, бакалавр:
        </h2>
        <div className={styles.disciplines_container}>
          <div className={styles.disciplines_course}>
            <ol className={styles.disciplines_list}>
              <li> Вища математика</li>
              <li>Вища та прикладна математика</li>
              <li>Прикладна математика</li>
              <li>Фізика</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
