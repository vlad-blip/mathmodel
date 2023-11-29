import { TableRow, TableCell } from "@mui/material";

export default function Row({ row }: { row: any }) {
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        fontSize: "2rem",
      }}
    >
      {Object.values(row).map((cell: any) => (
        <TableCell component="th" scope="row" sx={{ fontSize: "inherit" }}>
          {cell}
        </TableCell>
      ))}
    </TableRow>
  );
}
