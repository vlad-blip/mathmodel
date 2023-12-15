import List from "./List";
import ListItem from "./ListItem";
import Link from "next/link";
import SubjectList from "./SubjectList";

import syllabusStyles from "./SyllabusItem.module.scss";

export default function ChoosenDisciplinesMasters() {
  return (
    <List>
      <ListItem heading="Цикл професійної підготовки">
        <SubjectList>
          <Link
            className={syllabusStyles.subject_link}
            target="_blank"
            href="https://vstup.puet.edu.ua/vybirkovi-dystsypliny-na-2023-2024-n-r-dlya-magistriv/#122"
          >
            2023-2024
          </Link>
          <Link
            className={syllabusStyles.subject_link}
            target="_blank"
            href="https://vstup.puet.edu.ua/vybirkovi-dystsypliny-na-2022-2023-n-r-dlya-magistriv/#122"
          >
            2022-2023
          </Link>
        </SubjectList>
      </ListItem>
      <ListItem heading="Цикл загальної підготовки">
        <SubjectList>
          <Link
            className={syllabusStyles.subject_link}
            target="_blank"
            href="https://vstup.puet.edu.ua/vybirkovi-dystsypliny-na-2023-2024-n-r-dlya-magistriv/#"
          >
            2023-2024
          </Link>
          <Link
            className={syllabusStyles.subject_link}
            href="https://vstup.puet.edu.ua/vybirkovi-dystsypliny-na-2022-2023-n-r-dlya-magistriv/"
          >
            2022-2023
          </Link>
          <Link
            className={syllabusStyles.subject_link}
            href="https://vstup.puet.edu.ua/vybirkovi-dystsypliny-na-2021-2022-n-r-dlya-magistriv/#"
          >
            2021-2022
          </Link>
        </SubjectList>
      </ListItem>
    </List>
  );
}
