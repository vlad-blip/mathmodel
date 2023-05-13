import staffData from "@/data/staff.json";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Staff from "./Staff";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

import styles from "./StaffList.module.scss";

export default function StaffList() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 544 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 544, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          containerClass={styles.list}
        >
          {staffData.map((staff, i) => (
            <Staff
              key={i}
              img={staff.img}
              name={staff.name}
              description={staff.description}
              accomplishments={staff.accomplishments}
              curriculum={staff.curriculum}
              workExperience={staff.workExperience}
              scienceProfiles={staff.scienceProfiles}
            />
          ))}
        </Carousel>
      </div>
      <ButtonOutline type="button">Весь колектив</ButtonOutline>
    </div>
  );
}
