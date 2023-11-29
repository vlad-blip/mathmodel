import staffData from "@/data/staff.json";

import StaffLargeList from "@/components/DepartmentStaff/StaffLargeList";

import styles from "@/styles/Department_staff.module.scss";

export default function DepartmentStaff() {
  return (
    <main className="main">
      <div className={`container`}>
        <h1 className="h-1 page-heading">Склад кафедри</h1>
        <StaffLargeList data={staffData.current} />
        <h2 className={`${styles.honorable_heading} h-1`}>
          Почесні працівники кафедри
        </h2>
        <StaffLargeList data={staffData.honorable} />
      </div>
    </main>
  );
}
