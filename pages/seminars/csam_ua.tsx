import Link from "next/link";
import SeminarLayout from "@/layout/SeminarLayout/SeminarLayout";

export default function CsamUa() {
  return (
    <SeminarLayout>
      <div>
        <h2 className="h-2">
          Семінар «Комп’ютерні науки і прикладна математика» (КНіПМ)
        </h2>
        <br />
        <p className="text-1">
          В наступних файлах наведені правила оформлення матеріалів семінару
        </p>
        <ul className="text-1">
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam_ua2.rtf">
              КНіПМ Шаблон тез для pdf
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam_ua1.rtf">
              КНіПМ Шаблон тез для rtf
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam_ua3.docx">
              КНіПМ правила оформлення
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam_ua4.doc">
              КНіПМ Формули
            </Link>
          </li>
        </ul>
        <br />
        <ul className="text-1">
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam-zb2018-1.pdf">
              Збірник праць науково-практичного семінару "Комп'ютерні науки і
              прикладна математика" (КНіПМ-2018). Випуск 1
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam-zb2018-2.pdf">
              Збірник праць науково-практичного семінару "Комп'ютерні науки і
              прикладна математика" (КНіПМ-2018). Випуск 2
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam-zb2019-3.pdf">
              Збірник праць науково-практичного семінару "Комп'ютерні науки і
              прикладна математика" (КНіПМ-2019). Випуск 3
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam-zb2019-4.pdf">
              Збірник праць науково-практичного семінару "Комп'ютерні науки і
              прикладна математика" (КНіПМ-2019). Випуск 4
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam-zb2020.pdf">
              Збірник праць науково-практичного семінару "Комп'ютерні науки і
              прикладна математика" (КНіПМ-2020). Випуск 5
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam-zb2021.pdf">
              Збірник праць науково-практичного семінару "Комп'ютерні науки і
              прикладна математика" (КНіПМ-2021). Випуск 6
            </Link>
          </li>
        </ul>
      </div>
    </SeminarLayout>
  );
}
