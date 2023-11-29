import Table from "@/components/Table/Table";

import styles from "@/styles/Contacts.module.scss";

export default function Contact() {
  const contacts = [
    { id: 1, name: "Ольховська О.В., к.ф.-м.н.", email: "lena@olhovsky.name" },
    { id: 2, name: "Ольховський Д.М., доц.", email: "dmitriy@olhovsky.name" },
    { id: 3, name: "Парфьонова Т.О., доц.", email: "tapa.poltava@gmail.com" },
    { id: 4, name: "Чілікіна Т.В., доц.", email: "tv.0502@ukr.net" },
    { id: 5, name: "Черненко О.О., доц.", email: "oksanachernenko7@gmail.com" },
    { id: 6, name: "Олексійчук Ю.Ф., доц.", email: "olexijchuk@gmail.com" },
    { id: 7, name: "Кошова О. П., доц.", email: "koshova.o111@gmail.com" },
    { id: 8, name: "Карнаухова Г.В., ст. викл.", email: "ta.annet@gmail.com" },
    { id: 9, name: "Оріхівська О.Г., ст. викл.", email: "orikhivska@ukr.net" },
  ];

  return (
    <main className="main">
      <div className={`container`}>
        <h1 className="h-1 page-heading">Контакти</h1>
        <p className="text-1">
          Завідувач кафедри комп’ютерних наук та інформаційних технологій (КНІТ)
          – к.ф.-м.н.,{" "}
          <b>
            <i>Ольховська Олена Володимирівна.</i>
          </b>
        </p>
        <div className={styles.contact}>
          <p className="text-1">Кабінет 433а</p>
          <p className="text-1">телефон (0532) 509-204</p>
          <p className="text-1">внутр. тел. 2-04</p>
          <p className="text-1">
            e-mail: <a href="mailto:lena@olhovsky.name">lena@olhovsky.name</a>
          </p>
          <p className="text-1">моб. тел. 066 506 0968</p>
        </div>
        <br />
        <p className="text-1">Викладацька кафедри КНІТ:</p>
        <div className={styles.contact}>
          <p className="text-1">Кабінет 430а</p>
          <p className="text-1">телефон (0532) 509-204</p>
          <p className="text-1">внутр. тел. 2-13</p>
          <p className="text-1">
            e-mail: <a href="mmsi.puet@ukr.net">mmsi.puet@ukr.net</a>
            <a href="mailto:mmsi@puet.edu.ua">mmsi@puet.edu.ua</a>
          </p>
        </div>
        <br />
        <h2 className="h-2">Викладачі кафедри</h2>
        <Table
          headers={["№", "П.І.Б. викладача", "Ел. пошта"]}
          rows={contacts}
        />
      </div>
    </main>
  );
}
