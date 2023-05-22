import { useState } from "react";

import Image from "next/image";

import StaffDetails from "./StaffDetails";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

import styles from "./Staff.module.scss";

type StaffProps = {
  name: string;
  img: string;
  description: string;
  workExperience: string;
  accomplishments: string;
  curriculum: Array<String>;
  scienceProfiles: Array<object>;
  url?: string;
};

export default function Staff({
  name,
  img,
  description,
  workExperience,
  accomplishments,
  curriculum,
  scienceProfiles,
}: StaffProps) {
  const [active, setActive] = useState(false);

  const onClickHandler = () => setActive((prevActive) => !prevActive);

  return (
    <>
      <div className={styles.container}>
        <Image
          className={styles.img}
          src={img}
          width={260}
          height={300}
          alt={`${name} photo`}
        />
        <h2 className="h-3">{name}</h2>
        <p className={styles.description}>{description}</p>
        <ButtonOutline type="button" onClick={onClickHandler}>
          Докладніше
        </ButtonOutline>
      </div>
      {active ? (
        <StaffDetails
          name={name}
          img={img}
          description={description}
          workExperience={workExperience}
          accomplishments={accomplishments}
          curriculum={curriculum}
          scienceProfiles={scienceProfiles}
          onClick={onClickHandler}
        />
      ) : null}
    </>
  );
}
