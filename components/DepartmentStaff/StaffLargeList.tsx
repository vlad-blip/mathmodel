import StaffLarge from "./StaffLarge";

import styles from "./StaffLargeList.module.scss";

type Staff = {
  name: string;
  img: string;
  description: string;
  workExperience: string;
  accomplishments: string;
  curriculum: Array<String>;
  scienceProfiles: Array<object>;
};

type StaffLargeListProps = {
  data: Array<Staff>;
};

export default function StaffLargeList({ data }: StaffLargeListProps) {
  return (
    <ul className={styles.list}>
      {data.map((staff, i) => (
        <li key={i}>
          <StaffLarge {...staff} />
        </li>
      ))}
    </ul>
  );
}
