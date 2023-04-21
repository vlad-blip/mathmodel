import Head from "next/head";
import Fact from "@/components/Fact/Fact";
import ButtonOutline from "@/components/ButtonOutline/ButtonOutline";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Кафедра компютерних наук та інформаційних технологій</title>
        <meta
          name="description"
          content="Кафедра комп'ютерний наук та інформаційних технологій"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <main>
        <section className={`${styles.section}`}>
          <div className="container">
            <h1 className="h-1 background" data-background="Історія кафедри">
              Історія кафедри
            </h1>
            <div className={styles.description}>
              <p className="text-1">
                Кафедру створено 21 травня 2004 року в зв’язку з підготовкою до
                відкриття спеціальності {'"'}Соціальна інформатика{'"'}.
              </p>
              <p className="text-1">
                Готуючи бакалаврів та магістрів, кафедра математичного
                моделювання та соціальної інформатики (ММСІ) є випусковою
                кафедрою з набору 2017 року зі спеціальностей 122 «Комп’ютерні
                науки», <b>122 «Компютерні науки та інформаційні технології»</b>
                (набір 2016 р.), з напряму підготовки
                <b>6.040302 - «Інформатика»</b>
                (набори бакалаврів 2004-2015 рр.).
              </p>
              <p className="text-1">
                Кафедра є випусковою з набору 2017 р. по спеціальності 113
                <b>«Прикладна математика»</b> (спеціалізація «Теоретичні основи
                інформатики та кібернетики») за освітньо-науковим рівнем
                підготовки докторів філософії (PhD) та на ній діє аспірантура зі
                спеціальності 01.05.01 «Теоретичні основи інформатики та
                кібернетики» (набори 2014-2016 рр.).
              </p>
              <div className={styles.contacts}>
                <div>
                  <p className="text-1">Викладацька кафедри КНІТ</p>
                  <div className={styles.contact}>
                    <p className="text-1">Кабінет 430а</p>
                    <p className="text-1">телефон (0532) 509-204</p>
                    <p className="text-1">внутр. тел. 2-13</p>
                    <p className="text-1">
                      e-mail:{" "}
                      <a href="mailto:mmsi.puet@ukr.net">mmsi.puet@ukr.net</a>,{" "}
                      <a href="mailto:mmsi@puet.edu.ua">mmsi@puet.edu.ua</a>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-1">
                    Завідувач кафедри КНІТ – к. ф.-м. н. <b>Ольховська О.В.</b>
                  </p>
                  <div className={styles.contact}>
                    <p className="text-1">Кабінет 433а</p>
                    <p className="text-1">телефон (0532) 509-204</p>
                    <p className="text-1">внутр. тел. 2-04</p>
                    <p className="text-1">
                      e-mail:{" "}
                      <a href="mailto:lena@olhovsky.name">lena@olhovsky.name</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.facts} ${styles.section}`}>
          <div className="container">
            <h1
              className="h-1 background"
              data-background="Декілька фактів про кафедру"
            >
              Декілька фактів про кафедру
            </h1>
            <ul className={styles.facts_list}>
              <li>
                <Fact
                  img="/Person.svg"
                  title="Випустила більше"
                  number="500"
                  description="студентів"
                />
              </li>
              <li>
                <Fact
                  img="/Gold_medal.svg"
                  title="Зайняла"
                  number="1"
                  description="місце на олімпіаді 2019р."
                />
              </li>
            </ul>
          </div>
        </section>
        <section className={`${styles.news} ${styles.section}`}>
          <div className="container">
            <header>
              <h1 className="h-1 background" data-background="Останні новини">
                Останні новини
              </h1>
              <ButtonOutline type="link" href="/news">
                Всі новини
              </ButtonOutline>
            </header>
          </div>
        </section>
      </main>
    </>
  );
}
