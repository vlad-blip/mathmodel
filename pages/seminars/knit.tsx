import Link from "next/link";
import SeminarLayout from "@/layout/SeminarLayout/SeminarLayout";

export default function Seminars() {
  return (
    <SeminarLayout>
      <div>
        <p className="text-1">
          В наступних файлах наведені правила оформлення матеріалів семінару
          "КНІТ"
        </p>
        <ul className="text-1">
          <li>
            <a href="files/knit1.doc">КНІТ Шаблон тез для pdf</a>{" "}
          </li>
          <li>
            <a href="files/knit2.doc">КНІТ Шаблон тез для rtf</a>{" "}
          </li>
          <li>
            <a href="files/knit3.doc">КНІТ правила оформлення</a>{" "}
          </li>
          <li>
            <a href="files/knit4.doc">КНІТ Формули</a>
          </li>
        </ul>
        <Link
          className="text-1"
          href={"http://www.matmodel.puet.edu.ua/files/knit-zb2022.pdf"}
        >
          Збірник праць науково-практичного семінару "Комп’ютерні науки та
          інформаційні технології" (КНІТ-2022). Випуск 1.
        </Link>
        <Link
          className="text-1"
          href={"http://www.matmodel.puet.edu.ua/files/knit-zb2022-2.pdf"}
        >
          Збірник праць науково-практичного семінару "Комп’ютерні науки та
          інформаційні технології" (КНІТ-2023). Випуск 2.
        </Link>
      </div>
    </SeminarLayout>
  );
}
