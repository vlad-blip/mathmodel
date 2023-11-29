import { useRouter } from "next/router";
import styles from "./AlumniFilter.module.scss";

export default function AlumniFilter() {
  const router = useRouter();

  const { pathname } = router;
  const pathnameArray = pathname.split("/");

  const degreeType = pathnameArray[2];

  const degreeYear = pathnameArray[3];

  const degreeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    pathnameArray[2] = e.target.value;

    router.push(`/${pathnameArray.join("/")}`);
  };
  const yearChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    pathnameArray[3] = e.target.value;

    router.push(`/${pathnameArray.join("/")}`);
  };

  return (
    <form className={styles.filter}>
      <label className={styles.filter__field}>
        <span>Ступінь:</span>{" "}
        <div className={styles.filter__degree}>
          <label className={styles.filter__degree_type}>
            <input
              type="radio"
              name="degree"
              value="masters"
              checked={degreeType === "masters"}
              onChange={(e) => degreeChangeHandler(e)}
            />
            <span>Магістри</span>
          </label>
          <label className={styles.filter__degree_type}>
            <input
              type="radio"
              name="degree"
              value="bachelor"
              checked={degreeType === "bachelor"}
              onChange={(e) => degreeChangeHandler(e)}
            />
            <span>Бакалаври</span>
          </label>
        </div>
      </label>
      <label className={styles.filter__field}>
        Навчальний рік:{" "}
        <select
          className={styles.filter__select}
          defaultValue={degreeYear}
          onChange={(e) => yearChangeHandler(e)}
        >
          <option value="2022-2023">2022-2023 н. р.</option>
          <option value="2021-2022">2021-2022 н. р.</option>
          <option value="2020-2021">2020-2021 н. р.</option>
          <option value="2019-2020">2019-2020 н. р.</option>
          <option value="2018-2019">2018-2019 н. р.</option>
          <option value="2017-2018">2017-2018 н. р.</option>
          <option value="2016-2017">2016-2017 н. р.</option>
          <option value="2015-2016">2015-2016 н. р.</option>
          <option value="2014-2015">2014-2015 н. р.</option>
          <option value="2013-2014">2013-2014 н. р.</option>
          <option value="2012-2013">2012-2013 н. р.</option>
          <option value="2011-2012">2011-2012 н. р.</option>
          <option value="2010-2011">2010-2011 н. р.</option>
          <option value="2009-2010">2009-2010 н. р.</option>
          <option value="2008-2009">2008-2009 н. р.</option>
          <option value="2007-2008">2007-2008 н. р.</option>
        </select>
      </label>
    </form>
  );
}
