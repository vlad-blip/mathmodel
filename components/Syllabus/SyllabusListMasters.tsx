import ListItem from "./ListItem";
import SyllabusItem from "./SyllabusItem";
import List from "./List";
import Link from "next/link";
import SubjectList from "./SubjectList";

import syllabusStyles from "./SyllabusItem.module.scss";

export default function SyllabusList() {
  return (
    <List>
      <ListItem heading={`1 семестр`}>
        <SubjectList>
          <SyllabusItem
            title={"Основи наукових досліджень в інформатиці"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-ondi-m23.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-ondi-m23.pdf",
            ]}
          />
          <SyllabusItem
            title={
              "Операційні системи та сучасні архітектурні рішення у хмарних середовищах"
            }
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-osar-m23.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-osar-m23.pdf",
            ]}
          />
          <SyllabusItem
            title={"Сучасні методи оптимізації та їх програмування"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-smop-m23.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-smop-m23.pdf",
            ]}
          />
          <SyllabusItem
            title={"Технології зберігання та аналізу даних"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-tzad-m23.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-tzad-m23.pdf",
            ]}
          />
          <SyllabusItem
            title={"Культура української мови"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-kum-m23.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-kum-m23.pdf",
            ]}
          />
        </SubjectList>
      </ListItem>
      <ListItem heading={`2 семестр`}>
        <SubjectList>
          <SyllabusItem
            title={"Аналіз алгоритмів"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-aa-m23.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-aa-m23.pdf",
            ]}
          />
          <SyllabusItem
            title={"Методології розробки та якість програмного забезпечення"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-mrq-m23.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-mrq-m23.pdf",
            ]}
          />
          <SyllabusItem
            title={"Проєктування та програмування робототехнічних систем"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-pprs-m23.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-pprs-m23.pdf",
            ]}
          />
          <SyllabusItem
            title={"Бізнес-аналіз та проєктний менеджмент в ІТ-галузі"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-bapm-m23.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-bapm-m23.pdf",
            ]}
          />
          <div className={syllabusStyles.container}>
            <h3 className={syllabusStyles.subject_title}>
              Практична підготовка
            </h3>
            <ul className={syllabusStyles.subject_links}>
              <li>
                <Link
                  className={syllabusStyles.subject_link}
                  href={
                    "http://www.matmodel.puet.edu.ua/files/lic2020/pp-m23.pdf"
                  }
                >
                  Програма практики
                </Link>
              </li>
            </ul>
          </div>
          <div className={syllabusStyles.container}>
            <h3 className={syllabusStyles.subject_title}>
              Курсовий проект з фаху
            </h3>
            <ul className={syllabusStyles.subject_links}>
              <li>
                <Link
                  className={syllabusStyles.subject_link}
                  href={
                    "http://www.matmodel.puet.edu.ua/files/lic2020/mr-kpf-m23.pdf"
                  }
                >
                  Методичні рекомендації
                </Link>
              </li>
            </ul>
          </div>
        </SubjectList>
      </ListItem>
      <ListItem heading={`3 семестр`}>
        <SubjectList>
          <SyllabusItem
            title={
              "Методика викладання інформаційних та математичних дисциплін у закладах вищої освіти"
            }
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-mvmid-m23.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-mvmid-m23.pdf",
            ]}
          />
          <SyllabusItem
            title={"Ділова іноземна мова в ІТ-галузі"}
            programList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/rp-dim-m23.pdf",
            ]}
            syllabusList={[
              "http://www.matmodel.puet.edu.ua/files/lic2020/syl-dim-m23.pdf",
            ]}
          />
          <div className={syllabusStyles.container}>
            <h3 className={syllabusStyles.subject_title}>
              Кваліфікаційна робота
            </h3>
            <ul className={syllabusStyles.subject_links}>
              <li>
                <Link
                  className={syllabusStyles.subject_link}
                  href={
                    "http://www.matmodel.puet.edu.ua/files/lic2020/mr-kr-m23.pdf"
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
