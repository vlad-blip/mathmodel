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
      sx={{ width: "fit-content", marginTop: "2rem" }}
    >
      <MuiTable sx={{ width: "fit-content" }} size="medium" aria-label="table">
        <TableHead>
          <MuiTableRow sx={{ fontSize: "2rem" }}>
            {headers.map((header) => (
              <TableCell sx={{ fontSize: "inherit" }}>{header}</TableCell>
            ))}
          </MuiTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <Row key={i} row={row} />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
