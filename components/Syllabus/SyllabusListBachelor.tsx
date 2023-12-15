import ListItem from "./ListItem";
import SyllabusItem from "./SyllabusItem";
import List from "./List";
import syllabusStyles from "./SyllabusItem.module.scss";
import Link from "next/link";
import SubjectList from "./SubjectList";

export default function SyllabusList() {
  return (
    <List>
      <ListItem heading={`1 курс`}>
        <SubjectList>
          <SyllabusItem
            title={"Інтернет-технології"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-it-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-it-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Програмування І"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-p1-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-p1-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Математичний аналіз"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-ma-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-ma-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Інформатика"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-p1-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-p1-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Дискретна математика"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-dm-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-dm-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Алгебра та геометрія"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-ag-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-ag-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Іноземна мова"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-im-a1-b.pdf",
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-im-a2-b.pdf",
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-im-b1-b.pdf",
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-im-b2-b.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-im-a1-b.pdf",
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-im-a2-b.pdf",
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-im-b1-b.pdf",
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-im-b2-b.pdf",
            ]}
          />
          <SyllabusItem
            title={"Історія та культура України"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-iku-b.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-iku-b.pdf",
            ]}
          />
          <SyllabusItem
            title={
              "Правові основи діяльності в сфері інформаційних технологій та інформаційної безпеки"
            }
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-pod-b.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-pod-b.pdf",
            ]}
          />
          <SyllabusItem
            title={"Фізичне виховання"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-fv-b.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-fv-b.pdf",
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-fv-b-en.pdf",
            ]}
          />
        </SubjectList>
      </ListItem>
      <ListItem heading={`2 курс`}>
        <SubjectList>
          <SyllabusItem
            title={"Архітектура обчислювальних систем"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-aos-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-aos-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Операційні системи та системне програмування"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-ossp-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-ossp-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Алгоритми і структури даних"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-asd-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-asd-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Математична логіка"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-ml-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-ml-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Програмування ІІ"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-pr2-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-pr2-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Теорія ймовірності та математична статистика"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-tyms-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-tyms-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Організація та обробка електронної інформації"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-ooei-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-ooei-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Офісні комп’ютерні технології"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-okt-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-okt-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Українська мова (за професійним спрямуванням)"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-um-b.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-um-b.pdf",
            ]}
          />
        </SubjectList>
      </ListItem>
      <ListItem heading={`3 курс`}>
        <SubjectList>
          <SyllabusItem
            title={"Методи оптимізації та дослідження операцій"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-modo-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-modo-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Теорія алгоритмів"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-ta-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-ta-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Теорія програмування"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-tp-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-tp-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Системний аналіз та теорія прийняття рішень"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-satrp-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-satpr-22.pdf",
            ]}
          />
          <SyllabusItem
            title={
              "Проектне навчання з курсу Системний аналіз та теорія прийняття рішень"
            }
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-pn-satrp-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-pn-satpr-22.pdf",
            ]}
          />
          <SyllabusItem
            title={
              "Проектне навчання з курсу Методи оптимізації та дослідження операцій"
            }
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-pn-modo-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-pn-modo-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Програмування та підтримка веб-застосувань"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-ppwz-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-ppwz-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Платформи корпоративних інформаційних систем"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-pkis-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-pkis-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Обробка зображень та мультимедіа"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-ozm-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-ozm-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Обчислювальні методи"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-om-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-om-22.pdf",
            ]}
          />
          <SyllabusItem
            title={"Елементи комбінаторної оптимізації"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-eco.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-eco.pdf",
            ]}
          />
          <SyllabusItem
            title={"Бази даних та інформаційні системи"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-bdis-22.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-bdis-22.pdf",
            ]}
          />
        </SubjectList>
      </ListItem>
      <ListItem heading={`4 курс`}>
        <SubjectList>
          <div className={syllabusStyles.container}>
            <h3 className={syllabusStyles.subject_title}>
              Курсовий проект з фаху
            </h3>
            <ul className={syllabusStyles.subject_links}>
              <li>
                <Link
                  className={syllabusStyles.subject_link}
                  href={
                    "http://www.matmodel.puet.edu.ua/files/lic2020/mr-kp-b.pdf"
                  }
                >
                  Методичні рекомендації
                </Link>
              </li>
            </ul>
          </div>
          <div className={syllabusStyles.container}>
            <h3 className={syllabusStyles.subject_title}>
              Практична підготовка
            </h3>
            <ul className={syllabusStyles.subject_links}>
              <li>
                <Link
                  className={syllabusStyles.subject_link}
                  href={
                    "http://www.matmodel.puet.edu.ua/files/lic2020/pp-b.pdf"
                  }
                >
                  Програма практики
                </Link>
              </li>
            </ul>
          </div>
          <div className={syllabusStyles.container}>
            <h3 className={syllabusStyles.subject_title}>
              Бакалаврська робота
            </h3>
            <ul className={syllabusStyles.subject_links}>
              <li>
                <Link
                  className={syllabusStyles.subject_link}
                  href={
                    "http://www.matmodel.puet.edu.ua/files/lic2020/mr-br-b.pdf"
                  }
                >
                  Методичні рекомендації
                </Link>
              </li>
            </ul>
          </div>
        </SubjectList>
      </ListItem>
    </List>
  );
}
