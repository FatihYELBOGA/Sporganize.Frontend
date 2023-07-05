import React, { useEffect, useState } from 'react';
import { Box, Container, TextField, Button, MenuItem, Grid, Typography } from '@mui/material';
import TournamentNavbar from './TournamentNavbar';
import { useParams } from 'react-router-dom';

const teams = ['Team A', 'Team B', 'Team C', 'Team D']; // Sample teams data

const TournamentSaveMatch = () => {
  const {id} = useParams();
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [scoreA, setScoreA] = useState('');
  const [scoreB, setScoreB] = useState('');

  const handleTeamAChange = (event) => {
    setTeamA(event.target.value);
  };

  const handleTeamBChange = (event) => {
    setTeamB(event.target.value);
  };

  const handleScoreAChange = (event) => {
    setScoreA(event.target.value);
  };

  const handleScoreBChange = (event) => {
    setScoreB(event.target.value);
  };
 
    

  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform save operation with the selected teams and scores
    console.log('Saving match score:', teamA, scoreA, '-', teamB, scoreB);
    fetch("http://yelbogafatih-001-site1.btempurl.com/tournaments/league", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teamAId: "",
        teamBId: "",
        date: "2000-10-01",
        result: scoreA+"-"+scoreB,
        tournamentId: id,
        
      }),
    })
        .then((res) => res.json())
        .then((result)=>{
          console.log(result);
          alert("Success")
        })
        .catch((err) => console.log(err));
    // Reset the form
    setTeamA('');
    setTeamB('');
    setScoreA('');
    setScoreB('');
  };

  return (
    <div>
        <TournamentNavbar type="saveMatches" tournamentId={id}/>

    <Box sx={containerStyles}>
      <Container maxWidth="sm" sx={{width:"100%"}}>
        <Typography variant='h5' sx={{display:"flex",justifyContent:"center",marginTop:3,marginBottom:3}}>
            Save Score of Matches
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1} sx={gridContainerStyles}>
            <Grid item xs={4}>
              <TextField
                select
                label="Team A"
                value={teamA}
                onChange={handleTeamAChange}
                fullWidth
                required
              >
                {teams.map((team) => (
                  <MenuItem key={team} value={team}>
                    {team}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                type="number"
                label="Score A"
                value={scoreA}
                onChange={handleScoreAChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                type="number"
                label="Score B"
                value={scoreB}
                onChange={handleScoreBChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                label="Team B"
                value={teamB}
                onChange={handleTeamBChange}
                fullWidth
                required
              >
                {teams.map((team) => (
                  <MenuItem key={team} value={team}>
                    {team}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={submitButtonStyles}>
            Save Score
          </Button>
        </form>
      </Container>
    </Box>
    </div>
  );
  
};

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width:"60%",
  marginLeft:"20%",
  borderRadius:5,
  backgroundColor: "#ededed"
 
  
};

const gridContainerStyles = {
  marginBottom: '20px',
};


const submitButtonStyles = {
  marginTop: '10px',
  marginBottom:3,
  width:"100%",
  backgroundColor: '#1E7B38',
  '&:hover': {
    backgroundColor: '#49A96A', // Lighter hover color
  },
};

export default TournamentSaveMatch;
