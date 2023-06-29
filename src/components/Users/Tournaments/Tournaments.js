import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Grid, Box, TextField, InputAdornment, IconButton, Chip, MenuItem, Menu } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TournamentsSidebar from './TournamentSidebar';
import './Tournaments.css';

// tournament logo photos
import tournament1picture from "../../../pictures/tournament1.png";
import tournament2picture from "../../../pictures/tournament2.png";

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [filter, setFilter] = useState("Football");
  const [search, setSearch] = useState("");
  const [userTeams, setUserTeams] = useState([]);
  const [eligibleTeams, setEligibleTeams] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedTournament, setSelectedTournament] = useState('');

  useEffect(() => {
    const fetchTournaments = () => {
      const data = [
        { 
          id: 1, 
          name: "IYTE Tennis Tournament", 
          logoUrl: tournament1picture, 
          sport: "Tennis",
          applyDeadline: "30.06.2023", 
          details: {
            date: "04.07.2023",
            location: "Urla/Izmir",
            venue: "IYTE Spor Salonu",
            period: "04.07.2023 to 06.07.2023",
            showDetails: false,
          }
        },
        { 
          id: 2, 
          name: "IYTE Football Tournament", 
          logoUrl: tournament2picture, 
          sport: "Football",
          applyDeadline: "15.09.2023", 
          details: {
            date: "20.09.2023",
            location: "Urla/Izmir",
            venue: "IYTE Spor Salonu",
            period: "20.09.2023 to 25.09.2023",
            showDetails: false,
          }
        }
      ];
      setTournaments(data);
    };
    fetchTournaments();

    setUserTeams([
      { id: 1, name: "Team 1", sport: "Football" },
      { id: 2, name: "Team 2", sport: "Tennis" },
      { id: 3, name: "Team 3", sport: "Football" },
      { id: 4, name: "Team 4", sport: "Basketball" },
    ]);
  }, []);

  const sports = ["Football","Tennis","Basketball", "Volleyball"]; 

  const filteredTournaments = tournaments
    .filter(tournament => tournament.sport === filter)
    .filter(tournament => tournament.name.toLowerCase().includes(search.toLowerCase()));

  const handleFilterChange = (sport) => {
    setFilter(sport);
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  const handleToggleDetails = (id) => {
    const updatedTournaments = tournaments.map(tournament => {
      if(tournament.id === id) {
        tournament.details.showDetails = !tournament.details.showDetails;
      }
      return tournament;
    });
    setTournaments(updatedTournaments);
  };

  const handleApplyClick = (event, tournamentId) => {
    const selectedTournament = tournaments.find(tournament => tournament.id === tournamentId);
    setSelectedTournament(selectedTournament);

    const eligibleTeams
      = userTeams
      .filter(team => team.sport === selectedTournament.sport);
    setEligibleTeams(eligibleTeams);

    if(eligibleTeams.length === 0) {
      alert('You do not have a team eligible for this tournament.');
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTeamSelect = (teamName) => {
    setSelectedTeam(teamName);
    setAnchorEl(null);
    alert(`You applied to ${selectedTournament.name} with team ${teamName}`);
  };

  return (
    <Box display="flex">
      <TournamentsSidebar />
      <Box flexGrow={1} p={3}>
        <Box marginBottom={3} display="flex" justifyContent="center">
          <TextField 
            variant="outlined"
            placeholder="Search tournaments"
            value={search}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className="text-field"
          />
        </Box>
        <Box marginBottom={3} display="flex" justifyContent="flex-start" flexWrap="wrap" gap={2}>
          {sports.map(sport => (
            <Chip 
              label={sport} 
              color={filter === sport ? "success" : "default"} 
              onClick={() => handleFilterChange(sport)}
              className={filter === sport ? "sport-chip" : ""}
              sx={{
                '&:hover': {
                    backgroundColor: '#1E7B38',
                    color: '#ffffff',
                },
              }}
            />
          ))}
        </Box>

        <Grid container spacing={3}>
          {filteredTournaments.map((tournament) => (
            <Grid item xs={12} sm={6} md={4} key={tournament.id}>
              <Card className="card">
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography className="card-title">{tournament.name}</Typography>
                    <CardMedia
                      component="img"
                      image={tournament.logoUrl}
                      alt={tournament.name}
                      sx={{ maxHeight: 140, objectFit: 'contain' }}
                    />
                    <Box bgcolor="#647C31" p={1} my={2} width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderRadius="10px">
                      <Typography className="card-description">{tournament.details.venue}</Typography>
                      <Typography className="see-details" onClick={() => handleToggleDetails(tournament.id)}>See Details</Typography>
                    </Box>
                    {tournament.details.showDetails && 
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Typography className="card-details" sx={{ color: '#ffffff' }}>{`Application deadline: ${tournament.applyDeadline}`}</Typography>
                      <Typography className="card-details" sx={{ color: '#ffffff' }}>{`Location: ${tournament.details.location}`}</Typography>
                      <Typography className="card-details" sx={{ color: '#ffffff' }}>{`Period: ${tournament.details.period}`}</Typography>
                    </Box>}
                    <Box mt={2}>
                      <Button 
                        variant="contained"
                        className="join-button"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={(event) => handleApplyClick(event, tournament.id)}
                        disabled={new Date(tournament.applyDeadline) < new Date()} // disable the apply button if the apply deadline has passed
                      >
                        Apply
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> 

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {eligibleTeams.map((team) => (
            <MenuItem onClick={() => handleTeamSelect(team.name)}>{team.name}</MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  )
}

export default Tournaments;
