import {
  TableContainer,
  Paper,
  Table as MuiTable,
  TableHead,
  TableRow as MuiTableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import Row from "./Row";

import styles from "./styles.module.scss";

export default function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: any[];
}) {
  return (
    <TableContainer
      component={Paper}
      className={styles.table_container}
      sx={{ width: "fit-content", maxWidth: "100%", marginTop: "2rem" }}
    >
      <MuiTable
        className={styles.table}
        sx={{ width: "fit-content" }}
        size="medium"
        aria-label="table"
      >
        <TableHead>
          <MuiTableRow className={styles.header_row} sx={{ fontSize: "2rem" }}>
            {headers.map((header) => (
              <TableCell sx={{ fontSize: "inherit" }}>{header}</TableCell>
            ))}
          </MuiTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <Row className={styles.content_row as string} key={i} row={row} />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
