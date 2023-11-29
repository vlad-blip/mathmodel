import Link from "next/link";
import SideNavigation from "@/components/SideNavigation/SideNavigation";
import styles from "@/styles/Seminars.module.scss";

export default function SeminarLayout({
  children,
}: {
  children?: React.ReactNode[] | React.ReactNode;
}) {
  return (
    <main className="main">
      <div className={`${styles.seminar_container} container`}>
        <h1 className="h-1">Семінари</h1>
        <div className={styles.content_wrapper}>
          <SideNavigation>
            <Link href={"/seminars/knit"}>Семінар "КНІТ"</Link>
            <Link href={"/seminars/csit"}>Seminar "CSIT"</Link>
            <Link href={"/seminars/csam"}>Семінар "CS&AM"</Link>
            <Link href={"/seminars/csam_ua"}>Семінар "КНіПМ"</Link>
          </SideNavigation>
          {children}
        </div>
      </div>
    </main>
  );
}
