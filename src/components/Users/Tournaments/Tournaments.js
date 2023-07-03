import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Grid, Box, TextField, InputAdornment, IconButton, Chip, MenuItem, Menu } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TournamentsSidebar from './TournamentSidebar';
import './Tournaments.css';

// Turnuva logo resimleri
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
    //  fetch 
    const fetchTournaments = () => {
      const data = [
        { 
          id: 1, 
          name: "IYTE Tennis Tournament", 
          logoUrl: tournament1picture, 
          sport: "Tennis",
          applyDeadline: "30.06.20 23", 
          details: {
            location: "Urla/Izmir",
            venue: "IYTE Spor Salonu",
            startDate: "04.07.2023", 
            endDate: "06.07.2023", 
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
            location: "Urla/Izmir",
            venue: "IYTE Spor Salonu",
            startDate: "20.09.2023", 
            endDate: "25.09.2023", 
            showDetails: false,
          }
        }
      ];
      setTournaments(data);
    };
    fetchTournaments();

    // Kullanıcının takım lideri olduğu takımlar
    setUserTeams([
      { id: 1, name: "Team 1", sport: "Football" },
      // { id: 2, name: "Team 2", sport: "Tennis" }, hiç bu dalda takım olduğu yoksa takımınız yok der
      { id: 3, name: "Team 3", sport: "Football" },
    ]);
  }, []);

  // Spor dalları
  const sports = ["Football","Tennis","Basketball", "Volleyball"]; 

  // Filtrelenmiş turnuvalar
  const filteredTournaments = tournaments
    .filter(tournament => tournament.sport === filter)
    .filter(tournament => tournament.name.toLowerCase().includes(search.toLowerCase()));

  // Filtre değişimini yöneten fonksiyon
  const handleFilterChange = (sport) => {
    setFilter(sport);
  }

  // Arama değişimini yöneten fonksiyon
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  // Turnuva detaylarını göster/gizle yöneten fonksiyon
  const handleToggleDetails = (id) => {
    const updatedTournaments = tournaments.map(tournament => {
      if(tournament.id === id) {
        tournament.details.showDetails = !tournament.details.showDetails;
      }
      return tournament;
    });
    setTournaments(updatedTournaments);
  };

  // Başvuru butonuna tıklama işlemini yöneten fonksiyon
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

  // Menu kapatmayı yöneten fonksiyon
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Takım seçimini yöneten fonksiyon
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
            <Grid item xs={12} sm={6} md={4} key={tournament.id}>
              <Card className="card" sx={{ backgroundColor: 'rgb(37, 37, 37)' }}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography className="card-title" sx={{ color: 'whitesmoke' }}>{tournament.name}</Typography>
                    <CardMedia component="img" image={tournament.logoUrl}
                      alt={tournament.name}
                      sx={{ maxHeight: 175, objectFit: 'contain' }}
                    />
                    <Box bgcolor="blue" p={1} my={2} width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderRadius="10px">
                      <Typography className="see-details" onClick={() => handleToggleDetails(tournament.id)} sx={{ color: 'whitesmoke' }}>
                        {tournament.details.showDetails ? 'Hide Details' : 'See Details'}
                      </Typography>
                    </Box>
                    {tournament.details.showDetails && 
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Typography className="card-venue" sx={{ color: 'whitesmoke' }}>{tournament.details.venue}</Typography>
                      <Typography className="card-details" sx={{ color: 'whitesmoke' }}>{`Application Deadline: ${tournament.applyDeadline}`}</Typography>
                      <Typography className="card-details" sx={{ color: 'whitesmoke' }}>{`Location: ${tournament.details.location}`}</Typography>
                      <Typography className="card-details" sx={{ color: 'whitesmoke' }}>{`Start Date: ${tournament.details.startDate}`}</Typography> 
                      <Typography className="card-details" sx={{ color: 'whitesmoke' }}>{`End Date: ${tournament.details.endDate}`}</Typography> 
                    </Box>}
                  </Box>
                </CardContent>
                <Box textAlign="center" py={2}>
                  <Button variant="contained" color="success" onClick={(event) => handleApplyClick(event, tournament.id)}>Apply</Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {eligibleTeams.map((team) => (
            <MenuItem key={team.id} onClick={() => handleTeamSelect(team.name)}>
              {team.name}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
}

export default Tournaments;
