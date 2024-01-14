import { TableRow, TableCell } from "@mui/material";
import React from "react";

export default function Row({
  row,
  className,
}: {
  row: React.ReactElement;
  className: string;
}) {
  return (
    <TableRow
      className={className}
      sx={{
        "&:last-child td, &:last-child td": { border: 0 },
        fontSize: "2rem",
      }}
    >
      {Object.values(row).map((cell: string) => (
        <TableCell component="td" scope="row" sx={{ fontSize: "inherit" }}>
          {cell}
        </TableCell>
      ))}
    </TableRow>
  );
}
