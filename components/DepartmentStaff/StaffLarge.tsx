import Image from "next/image";

import styles from "./StaffLarge.module.scss";

type StaffLargeProps = {
  name: string;
  img: string;
  description: string;
  workExperience: string;
  accomplishments: string;
  curriculum: Array<String>;
  scienceProfiles: Array<object>;
};

export default function StaffLarge({
  name,
  img,
  description,
  workExperience,
  accomplishments,
  curriculum,
  scienceProfiles,
}: StaffLargeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.img_wrapper}>
        <Image
          className={styles.img}
          src={img}
          width={166}
          height={270}
          alt={`${name} image`}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.name}>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.section}>
          <p>{workExperience}</p>
          <p>{accomplishments}</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.section_heading}>
            Викладає навчальні дисципліни
          </h3>
          <ul className={styles.curriculum}>
            {curriculum.map((subject, i) => (
              <li key={i}>{subject}</li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          {scienceProfiles.map((profile, i) => (
            <div className={styles.science_profile} key={i}>
              <a href={`${Object.values(profile)[0]}`}>
                {Object.keys(profile)[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
