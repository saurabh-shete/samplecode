import React from 'react';
import { TableContainer, Paper, Table, TableRow, TableHead, TableCell, TableBody } from '@mui/material';
import parse from 'html-react-parser';

export default function DeliveryTable({ rows, cols, onRowClick, onCompanyNameClick, ...props }) {
  return (
    <TableContainer component={Paper} {...props}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#7888D7' }}>
          <TableRow>
            {cols.map((col) => (
              <TableCell
                key={col.label} // Use the label as the key for consistency
                colSpan={col.colSpan || 1}
                sx={{
                  textAlign: props.align || 'left',
                  color: 'white',
                  fontWeight: 'bolder',
                }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {rows && (
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id} // Use a unique identifier for the key (e.g., row.id)
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:hover': { background: '#f0f0f0', cursor: 'pointer' },
                }}
                // onClick={() => onRowClick(row)}
              >
                {cols.map((col) => (
                  <TableCell
                    key={col.label} // Use the label as the key for consistency
                    colSpan={col.colSpan || 1}
                    sx={{
                      textAlign: props.align || 'left',
                      color: col.label === 'SO ID' || col.label === 'Status' ? 'purple' : 'inherit',
                    }}
                  >
                    {col.label === 'Company Name' || 'SO ID' && onRowClick ? (
                      <span className="company-name cursor-pointer" onClick={() => onRowClick(row)}>
                        {parse(`${row[col.property]}`)}
                      </span>
                    ) : (
                      parse(`${row[col.property]}`)
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
