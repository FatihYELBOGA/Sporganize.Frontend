import React, { useState, useEffect } from "react";
import {  InputLabel,Select,FormControl,Autocomplete, Grid, Box, TextField, InputAdornment, IconButton, Chip, MenuItem, Menu } from '@mui/material';

import TournamentsSidebar from "../Tournaments/TournamentSidebar";

// Turnuva logo resimleri
import tournament1picture from "../../../pictures/tournament1.png";
import TournamentCard from "../Tournaments/Tournament";

function MyTournaments(props) {
  const {userId} = props;
  const [tournaments, setTournaments] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [teams,setTeams] = useState([]);
  const [captainedTeams,setCaptainedTeams] = useState([]);
 
const getTournaments= (teamId) =>{
  fetch("http://yelbogafatih-001-site1.btempurl.com/users/tournament/"+teamId)
  .then((res) => res.json())
  .then((result) => {
    setTournaments(result)
    console.log(result)
  })
  .catch((error) => console.log(error));

}


  useEffect(() => {
    fetch("http://yelbogafatih-001-site1.btempurl.com/users/teams/"+userId)
      .then((res) => res.json())
      .then((result) => {
        setTeams(result)
        console.log(result)
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://yelbogafatih-001-site1.btempurl.com/users/captained-teams/"+userId)
      .then((res) => res.json())
      .then((result) => {
        setTeams(result)
        console.log(result)
      })
      .catch((error) => console.log(error));
  }, []);

    

  const handleChange = (event) => {
      setSelectedOption(event.target.value);
      
    };

  return (
    <Box display="flex">
      <TournamentsSidebar />
      <Box flexGrow={1} p={3}>
      <Box marginBottom={3} display="flex" justifyContent="center">
      <FormControl sx={{width:"50%"}}>
      <InputLabel sx={{width:"50%"}}>Select an option</InputLabel>
      <Select value={selectedOption} onChange={handleChange}>
        <MenuItem value="">None</MenuItem>
        {teams.map((team) =>(
          <MenuItem value={team.name} key={team.id} onClick={()=>getTournaments(team.id)}>{team.name}</MenuItem>
        ))}
        {captainedTeams.map((team) =>(
          <MenuItem value={team.name} key={team.id} onClick={()=>getTournaments(team.id)}>{team.name}</MenuItem>
        ))}
        
      </Select>
    </FormControl>
    </Box>
        
        <Grid container spacing={3}>
          {tournaments.map((tournament) => (
            <TournamentCard 
              type="my-tournament"
              key={tournament.id}
              userId={userId}
              id={tournament.id} 
              name={tournament.name} 
              title={tournament.title}
              description={tournament.description}
              startingDate={tournament.startingDate}
              endingDate={tournament.endingDate}
              branch={tournament.branch}
              sportFacility={tournament.sportFacility}
              url={tournament1picture}/>
             
          ))}
        </Grid>

       
      </Box>
    </Box>
  );
}

export default MyTournaments;
