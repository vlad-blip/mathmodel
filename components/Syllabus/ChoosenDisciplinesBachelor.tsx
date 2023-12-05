import List from "./List";
import ListItem from "./ListItem";
import SyllabusItem from "./SyllabusItem";
import Link from "next/link";
import SubjectList from "./SubjectList";

import syllabusStyles from "./SyllabusItem.module.scss";

export default function ChoosenDisciplines() {
  return (
    <List>
      <ListItem heading="Цикл професійної підготовки">
        <SubjectList>
          <SyllabusItem
            title={"Аналіз даних та прикладні пакети статистичної обробки"}
            programList={["files/lic2020/rp-vp-adppso.pdf"]}
            syllabusList={["files/lic2020/syl-vp-adppso.pdf"]}
          />
          <SyllabusItem
            title={"Основи комп’ютерного дизайну"}
            programList={["files/lic2020/rp-vp-okd.pdf"]}
            syllabusList={["files/lic2020/syl-vp-okd.pdf"]}
          />
          <SyllabusItem
            title={"Проектне навчання з курсу Програмування ІІ"}
            programList={["files/lic2020/rp-vp-pnp2.pdf"]}
            syllabusList={["files/lic2020/syl-vp-pnp2.pdf"]}
          />
          <SyllabusItem
            title={"Теорія інформації і кодування"}
            programList={["files/lic2020/rp-vp-tic.pdf"]}
            syllabusList={["files/lic2020/syl-vp-tic.pdf"]}
          />
          <SyllabusItem
            title={"Математичний аналіз для комп'ютерних наук"}
            syllabusList={["files/lic2020/syl-vp-makn.pdf"]}
          />
          <SyllabusItem
            title={"Науковий практикум"}
            syllabusList={["files/lic2020/syl-vp-np.pdf"]}
          />
          <SyllabusItem
            title={"Розподілені інформаційно-аналітичні системи"}
            syllabusList={["files/lic2020/syl-vp-rias.pdf"]}
          />
          <SyllabusItem
            title={"Проектування програмних систем"}
            programList={["files/lic2020/rp-vp-pps.pdf"]}
            syllabusList={["files/lic2020/syl-vp-pps.pdf"]}
          />
          <SyllabusItem
            title={"Стандарти в інформаційних технологіях"}
            programList={["files/lic2020/rp-vp-sit.pdf"]}
            syllabusList={["files/lic2020/syl-vp-sit.pdf"]}
          />
          <SyllabusItem
            title={"Інформаційні мережі"}
            programList={["files/lic2020/rp-vp-im.pdf"]}
            syllabusList={["files/lic2020/syl-vp-im.pdf"]}
          />
          <SyllabusItem
            title={"Інтелектуальні  інформаційні системи"}
            programList={["files/lic2020/rp-vp-iis.pdf"]}
            syllabusList={["files/lic2020/syl-vp-iis.pdf"]}
          />
          <SyllabusItem
            title={"Сучасні парадигми програмування"}
            programList={["files/lic2020/rp-vp-spp.pdf"]}
            syllabusList={["files/lic2020/syl-vp-spp.pdf"]}
          />
          <SyllabusItem
            title={"Теорія систем та математичне моделювання"}
            syllabusList={["files/lic2020/syl-vp-tsmm.pdf"]}
          />
          <SyllabusItem
            title={
              "Моделювання економічних, екологічних та соціальних процесів"
            }
            syllabusList={["files/lic2020/syl-vp-meesp.pdf"]}
          />
          <SyllabusItem
            title={"Захист інформації"}
            programList={["files/lic2020/rp-vp-zi.pdf"]}
            syllabusList={["files/lic2020/syl-vp-zi.pdf"]}
          />
          <SyllabusItem
            title={"Методи оптимізації та дослідження операцій, ч.ІІ"}
            syllabusList={["files/lic2020/syl-vp-modo.pdf"]}
          />
          <SyllabusItem
            title={"Проектне навчання з курсу Інформатика"}
            syllabusList={["files/lic2020/syl-vp-pni.pdf"]}
          />
        </SubjectList>
      </ListItem>
      <ListItem heading="Цикл загальної підготовки">
        <SubjectList>
          <Link
            className={syllabusStyles.subject_link}
            href="https://vstup.puet.edu.ua/vybirkovi-dystsypliny-na-2023-2024-n-r-dlya-molodshyh-bakalavriv-bakalavriv/"
          >
            2023-2024
          </Link>
          <Link
            className={syllabusStyles.subject_link}
            href="https://vstup.puet.edu.ua/vybirkovi-dystsypliny-na-2022-2023-n-r-dlya-molodshyh-bakalavriv-bakalavriv/#"
          >
            2022-2023
          </Link>
          <Link
            className={syllabusStyles.subject_link}
            href="https://vstup.puet.edu.ua/vybirkovi-dystsypliny-na-2021-2022-n-r-dlya-molodshyh-bakalavriv-bakalavriv/#"
          >
            2021-2022
          </Link>
        </SubjectList>
      </ListItem>
    </List>
  );
}
