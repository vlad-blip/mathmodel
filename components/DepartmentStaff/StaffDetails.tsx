import Image from "next/image";
import { createPortal } from "react-dom";

import styles from "./StaffDetails.module.scss";

type StaffDetailsProps = {
  name: string;
  img: string;
  description: string;
  workExperience: string;
  accomplishments: string;
  curriculum: Array<String>;
  scienceProfiles: Array<object>;
  onClick: () => void;
};

export default function StaffDetails({
  name,
  img,
  description,
  workExperience,
  accomplishments,
  curriculum,
  scienceProfiles,
  onClick,
}: StaffDetailsProps) {
  const containerClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };
  return createPortal(
    <div className={styles.background} onClick={onClick}>
      <div className={styles.wrapper}>
        <div className={styles.container} onClick={containerClickHandler}>
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
          <button className={styles.btn_close} onClick={onClick}>
            <Image src={"/Close.svg"} width={20} height={20} alt="Close icon" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
