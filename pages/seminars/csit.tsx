import Link from "next/link";
import SeminarLayout from "@/layout/SeminarLayout/SeminarLayout";

export default function Csit() {
  return (
    <SeminarLayout>
      <div>
        <h2 className="h-2">
          Seminar «Computer Science and information technology» (CSIT)
        </h2>
        <br />
        <p className="text-1">
          The following files contain the rules for designing the workshop
          materials
        </p>
        <ul className="text-1">
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csit1.doc">
              CSIT pdf file
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csit2.doc">
              CSIT rtf (doc) file
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csit3.doc">
              CSIT condition
            </Link>
          </li>
          <li>
            <Link href="http://www.matmodel.puet.edu.ua/files/csit4.doc">
              СSIT Formulas
            </Link>
          </li>
        </ul>
      </div>
    </SeminarLayout>
  );
}
