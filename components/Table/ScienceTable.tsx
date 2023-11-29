import {
  TableContainer,
  Paper,
  Table as MuiTable,
  TableHead,
  TableRow as MuiTableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function ScienceTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "fit-content", marginTop: "2rem" }}
    >
      <MuiTable sx={{ width: "fit-content" }} size="medium" aria-label="table">
        <TableHead>
          <MuiTableRow sx={{ fontSize: "2rem" }}>
            <TableCell sx={{ fontSize: "inherit" }}>
              Назва наукового гуртка/клубу
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>ПІБ керівника</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>Посада</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>Науковий ступінь</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>Вчене звання</TableCell>
          </MuiTableRow>
        </TableHead>
        <TableBody sx={{ fontSize: "2rem" }}>
          <MuiTableRow>
            <TableCell sx={{ fontSize: "inherit" }} rowSpan={2}>
              “SkyOps: Архітектура та Бізнес в ІТ на основі вивчення дисциплін
              “Операційні системи та сучасні архітектурні рішення у хмарних
              середовищах” та “Бізнес аналіз та проєктний менеджмент в
              ІТ-галузі” <br />
              <div>
                <a href="files/sth-olh-pl23.pdf" target="_blank">
                  План наукового гуртка 2023-24 н.р.
                </a>{" "}
                Звіт наукового гуртка 2023-24 н.р.
              </div>
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>
              Ольховський Дмитро Миколайович
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>доцент</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>К. ф.-м. н.</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>доцент</TableCell>
          </MuiTableRow>
          <MuiTableRow>
            <TableCell sx={{ fontSize: "inherit" }}>
              Ольховська Олена Володимирівна
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>
              зав. кафедрою КНІТ
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>К. ф.-м. н.</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>доцент</TableCell>
          </MuiTableRow>
          <MuiTableRow>
            <TableCell sx={{ fontSize: "inherit" }}>
              «Створення програмно-інформаційного забезпечення для дистанційного
              навчання з дисциплін «Алгебра і геометрія», «Дискретна
              математика», «Теорія ймовірностей та математична статистика»,
              «Теорія інформації і кодування», «Математична логіка», «Методи
              оптимізації та дослідження операцій»
              <br />
              <div>
                <a href="files/sth-par-pl23.pdf" target="_blank">
                  План наукового гуртка 2023-24 н.р.
                </a>{" "}
                Звіт наукового гуртка 2023-24 н.р.
              </div>
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>
              Парфьонова Тетяна Олександрівна
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>доцент</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>К. ф.-м. н.</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>доцент</TableCell>
          </MuiTableRow>
          <MuiTableRow>
            <TableCell sx={{ fontSize: "inherit" }}>
              «Розробка програмного забезпечення для дистанційного навчання з
              дисциплін «Теорія програмування», «Теорія алгоритмів», «Основи
              наукових досліджень в інформатиці»{" "}
              <div>
                <a href="files/sth-cher-pl23.pdf" target="_blank">
                  План наукового гуртка 2023-24 н.р.
                </a>{" "}
                Звіт наукового гуртка 2023-24 н.р.
              </div>
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>
              Черненко Оксана Олексіївна
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>доцент</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>К. ф.-м. н.</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>доцент</TableCell>
          </MuiTableRow>
          <MuiTableRow>
            <TableCell sx={{ fontSize: "inherit" }}>
              «Створення програмного та інформаційного забезпечення для
              дистанційного навчання з дисциплін «Обчислювальні методи»,
              «Математичний аналіз», «Інтелектуальні інформаційні системи»,
              «Офісні комп’ютерні технології», «Організація та обробка
              електронної інформації», «Сучасні методи оптимізації та
              дослідження операцій» <br />
              <div>
                <a href="files/sth-chil-pl23.pdf" target="_blank">
                  План наукового гуртка 2023-24 н.р.
                </a>
                Звіт наукового гуртка 2023-24 н.р.
              </div>{" "}
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>
              Чілікіна Тетяна Василівна
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>доцент</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>К. ф.-м. н.</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>доцент</TableCell>
          </MuiTableRow>
          <MuiTableRow>
            <TableCell sx={{ fontSize: "inherit" }} rowSpan={2}>
              «Створення програмного та інформаційного забезпечення для
              дистанційного навчання з дисципліни «Аналіз алгоритмів» <br />
              <div>
                <a href="files/sth-kosh-pl23.pdf" target="_blank">
                  План наукового гуртка 2023-24 н.р.
                </a>{" "}
                Звіт наукового гуртка 2023-24 н.р.
              </div>
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>
              Кошова Оксана Петрівна
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>доцент</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>К. п. н.</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>доцент</TableCell>
          </MuiTableRow>
          <MuiTableRow>
            <TableCell sx={{ fontSize: "inherit" }}>
              Гаркуша Сергій Володимирович
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>
              В.о. директора Навчально-наукового інституту міжнародної освіти
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>Д.т.н.</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>професор</TableCell>
          </MuiTableRow>
          <MuiTableRow>
            <TableCell sx={{ fontSize: "inherit" }}>
              «Сучасна інформатика» <br />
              <div>
                <a href="files/sth-or-pl23.pdf" target="_blank">
                  План наукового гуртка 2023-24 н.р.
                </a>{" "}
                Звіт наукового гуртка 2023-24 н.р.
              </div>
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>
              Оріхівська Оксана Григорівна
            </TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>старший викладач</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>&nbsp;</TableCell>
            <TableCell sx={{ fontSize: "inherit" }}>&nbsp;</TableCell>
          </MuiTableRow>
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
