import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const TournamentTable = () => {
  const tableData = [
    { team: 'Brazil', matches: 3, wins: 2, draws: 1, losses: 0 },
    { team: 'France', matches: 3, wins: 2, draws: 0, losses: 1 },
    { team: 'Germany', matches: 3, wins: 1, draws: 1, losses: 1 },
    { team: 'Argentina', matches: 3, wins: 0, draws: 1, losses: 2 },
  ];

  const calculatePoints = (wins, draws) => {
    return wins * 3 + draws;
  };

  return (
    <TableContainer sx={{display:"flex",justifyContent:"center"}}>
      <Table sx={tableStyles}>
        <TableHead>
          <TableRow sx={headerRowStyles}>
            <TableCell sx={headerCellStyle}>#</TableCell>
            <TableCell sx={headerCellStyle}>Team</TableCell>
            <TableCell sx={headerCellStyle}>Matches</TableCell>
            <TableCell sx={headerCellStyle}>Wins</TableCell>
            <TableCell sx={headerCellStyle}>Draws</TableCell>
            <TableCell sx={headerCellStyle}>Losses</TableCell>
            <TableCell sx={headerCellStyle}>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={row.team} sx={rowStyles}>
              <TableCell sx={cellStyles}>{index + 1}</TableCell>
              <TableCell sx={cellStyles}>{row.team}</TableCell>
              <TableCell sx={cellStyles}>{row.matches}</TableCell>
              <TableCell sx={cellStyles}>{row.wins}</TableCell>
              <TableCell sx={cellStyles}>{row.draws}</TableCell>
              <TableCell sx={cellStyles}>{row.losses}</TableCell>
              <TableCell sx={pointsCellStyle}>{calculatePoints(row.wins, row.draws)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableStyles = {
  backgroundColor: '#f5f5f5',
  textAlign:"center",
  borderRadius: '8px',
  width:"80%",
  maxWidth:"1000px",
  
};

const headerRowStyles = {
  backgroundColor: '#ededed',
};

const headerCellStyle = {
  color: '#333',
  fontWeight: 'bold',
  padding: '12px',
  borderBottom: '2px solid #ddd',
};

const cellStyles = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
};

const pointsCellStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
  color: '#fff',
  backgroundColor: '#65C888',
};

const rowStyles = {
  '&:nth-of-type(even)': {
    backgroundColor: '#f9f9f9',
  },
};

export default TournamentTable;
