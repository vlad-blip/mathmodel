import Staff from "./Staff";
import ButtonSlider from "../ButtonSlider/ButtonSlider";

import styles from "./StaffList.module.scss";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

export default function StaffList() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ButtonSlider direction="left" onClick={() => {}} />
        <ul className={styles.list}>
          <li>
            <Staff
              name="Парфьонова Тетяна Олександрівна"
              description="доцент кафедри, кандидат фізико-математичних наук 
заступник завідувача кафедри"
              url="/13123"
              img="/Staff/parfenova.png"
            />
          </li>
          <li>
            <Staff
              name="Ольховська Олена Володимирівна"
              description="завідувач кафедри, кандидат фізико-математичних наук"
              url="/13123"
              img="/Staff/olkhovska.png"
            />
          </li>
          <li>
            <Staff
              name="Черненко Оксана Олексіївна"
              description="доцент кафедри, кандидат фізико-математичних наук"
              url="/13123"
              img="/Staff/chernenko.png"
            />
          </li>
          <li>
            <Staff
              name="Ольховський Дмитро Миколайович"
              description="доцент кафедри, кандидат фізико-математичних наук"
              url="/13123"
              img="/Staff/olkhovsky.png"
            />
          </li>
        </ul>
        <ButtonSlider direction="right" onClick={() => {}} />
      </div>
      <ButtonOutline type="button">Весь колектив</ButtonOutline>
    </div>
  );
}
