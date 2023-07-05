import React, { useState,useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const TournamentTable = (props) => {
  const{tournamentId} = props;
  const [teams,setTeams] = useState([]);

  useEffect(() => {

    fetch("http://yelbogafatih-001-site1.btempurl.com/tournaments/league/"+tournamentId)
      .then((res) => res.json())
      .then((result) => {
        setTeams(result);

      })
      .catch((error) => console.log(error));

  }, []);


  const calculatePoints = (wins, draws,loss) => {
    return wins + draws + loss;
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
            <TableCell sx={headerCellStyle}>GS</TableCell>
            <TableCell sx={headerCellStyle}>GC</TableCell>
            <TableCell sx={headerCellStyle}>Avarage</TableCell>
            <TableCell sx={headerCellStyle}>Points</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          { (teams.length!==0) ? (teams.map((row, index) => (
            <TableRow key={row.name} sx={rowStyles}>
              <TableCell sx={cellStyles}>{index + 1}</TableCell>
              <TableCell sx={cellStyles}>{row.name}</TableCell>
              <TableCell sx={cellStyles}>{calculatePoints(row.numberOfWins, row.numberOfDraws,row.numberOfLoss)}</TableCell>
              <TableCell sx={cellStyles}>{row.numberOfWins}</TableCell>
              <TableCell sx={cellStyles}>{row.numberOfDraws}</TableCell>
              <TableCell sx={cellStyles}>{row.numberOfLoss}</TableCell>
              <TableCell sx={cellStyles}>{row.goalScored}</TableCell>
              <TableCell sx={cellStyles}>{row.goalConceded}</TableCell>
              <TableCell sx={cellStyles}>{row.goalScored-row.goalConceded}</TableCell>
              <TableCell sx={pointsCellStyle}>{row.points}</TableCell>
            </TableRow>
          ))):(<div></div>)}
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
