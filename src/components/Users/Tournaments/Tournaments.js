import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Grid, Box, TextField, InputAdornment, IconButton, Chip, MenuItem, Menu } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TournamentsSidebar from './TournamentSidebar';
import './Tournaments.css';

// Turnuva logo resimleri
import tournament1picture from "../../../pictures/tournament1.png";
import tournament2picture from "../../../pictures/tournament2.png";
import TournamentCard from "./Tournament";

function Tournaments(props) {
  const {userId} = props;
  const [tournaments, setTournaments] = useState([]);
  const [filter, setFilter] = useState("FOOTBALL");
  const [search, setSearch] = useState("");
  const [sports,setSports] = useState([]);
 

  useEffect(() => {
    fetch("http://yelbogafatih-001-site1.btempurl.com/tournaments")
      .then((res) => res.json())
      .then((result) => {
        setTournaments(result)
        console.log(result)
      })
      .catch((error) => console.log(error));
  }, []);


  useEffect(() => {

    fetch("http://yelbogafatih-001-site1.btempurl.com/branches")
      .then((res) => res.json())
      .then((result) => {
        setSports(result);

      })
      .catch((error) => console.log(error));

  }, []);

  // Filtrelenmiş turnuvalar
  const filteredTournaments = tournaments
    .filter(tournament => tournament.branch === filter)
    .filter(tournament => tournament.name.toLowerCase().includes(search.toLowerCase()));

  // Filtre değişimini yöneten fonksiyon
  const handleFilterChange = (sport) => {
    setFilter(sport);
  }

  // Arama değişimini yöneten fonksiyon
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <Box display="flex">
      <TournamentsSidebar />
      <Box flexGrow={1} p={3}>
      <Box marginBottom={3} display="flex" justifyContent="center">
          <TextField 
            variant="outlined"
            placeholder="Search Tournaments"
            value={search}
            onChange={handleSearchChange}
            InputProps={{endAdornment: (<InputAdornment position="end"><IconButton><SearchIcon /></IconButton></InputAdornment>),}}
            sx={{width:'50%','& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'green',},'&:hover fieldset': { borderColor: 'darkgreen', },'&.Mui-focused fieldset': {borderColor: 'darkgreen',},},color: 'whitesmoke', }}
          />
        </Box>
        <Box marginBottom={3} display="flex" justifyContent="flex-start" flexWrap="wrap" gap={2}>
          {sports.map(sport => (
            <Chip label={sport} color={filter === sport ? "success" : "default"} 
              onClick={() => handleFilterChange(sport)}
              sx={{ '&:hover': {backgroundColor: '#1E7B38',color: '#ffffff',}, }}/>))}
        </Box>
        <Grid container spacing={3}>
          {filteredTournaments.map((tournament) => (
            <TournamentCard 

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

export default Tournaments;
