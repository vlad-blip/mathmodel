import Link from "next/link";
import SeminarLayout from "@/layout/SeminarLayout/SeminarLayout";

export default function Csam() {
  return (
    <SeminarLayout>
      <div>
        <h2 className="h-2">
          Seminar «Computer Sciences and Applied Mathematics» (CS&AM)
        </h2>
        <br />
        <p className="text-1">
          The following files contain the rules for designing the workshop
          materials
        </p>
        <ul className="text-1">
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam_en2.rtf">
              CCandAM pdf file
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam_en1.rtf">
              CCandAM rtf file
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam_en3.docx">
              CSIT condition
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csam_en4.docx">
              ССandAM Formulas
            </Link>
          </li>
        </ul>
      </div>
    </SeminarLayout>
  );
}
