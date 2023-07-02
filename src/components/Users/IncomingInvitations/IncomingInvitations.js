import React, { useState, useEffect } from 'react';
import { Button,Card,CardContent,CardMedia,Typography,Grid,Box,TextField,InputAdornment,IconButton,Chip} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TeamsSidebar from '../TeamsSidebar/TeamsSidebar';
import team1picture from '../../../pictures/team1.png';
import team2picture from '../../../pictures/team2.png';
import team3picture from '../../../pictures/team3.png';

function IncomingInvitations() {
  const [teams, setTeams] = useState([]);
  const [filter, setFilter] = useState('Football');
  const [search, setSearch] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const fetchTeams = () => {
      const data = [
        {
          id: 1,
          name: 'BESTFOOT',
          logoUrl: team1picture,
          location: 'Bostanci/Kadiköy/Istanbul',
          members: ['Member 1', 'Member 2'],
          sport: 'Football'
        },
        {
          id: 2,
          name: 'CHAMPIONS TEAM',
          logoUrl: team2picture,
          location: 'Bostanci/Kadiköy/Istanbul',
          members: ['Member 3', 'Member 4'],
          sport: 'Football'
        },
        {
          id: 3,
          name: 'JAGUARS',
          logoUrl: team3picture,
          location: 'City C',
          members: ['Member 5', 'Member 6'],
          sport: 'Basketball'
        }
      ];
      setTeams(data);
    };
    fetchTeams();
  }, []);

  const sports = ['Football', 'Tennis', 'Basketball', 'Volleyball'];

  const filteredTeams = teams
    .filter((team) => team.sport === filter)
    .filter((team) => team.name.toLowerCase().includes(search.toLowerCase()));

  const handleFilterChange = (sport) => {
    setFilter(sport);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSeeDetails = (team) => {
    if (selectedTeam === team) {
      setSelectedTeam(null);
    } else {
      setSelectedTeam(team);
    }
  };

  const handleInvitationAccept = (invitation) => {
    console.log(`Invitation from ${invitation} accepted.`);
  };

  const handleInvitationReject = (invitation) => {
    console.log(`Invitation from ${invitation} rejected.`);
  };

  return (
    <Box display="flex">
      <TeamsSidebar />
      <Box flexGrow={1} p={3}>
        <Box marginBottom={3} display="flex" justifyContent="center">
          <TextField variant="outlined" placeholder="Search teams" value={search} onChange={handleSearchChange}
            InputProps={{endAdornment: (<InputAdornment position="end"><IconButton> <SearchIcon /></IconButton> </InputAdornment>) }}
            sx={{width:'50%','& .MuiOutlinedInput-root': { '& fieldset': {borderColor: 'green', },'&:hover fieldset': { borderColor: 'darkgreen',},'&.Mui-focused fieldset': {borderColor: 'darkgreen',},},color: 'whitesmoke',}}/>
        </Box>
        <Box marginBottom={3} display="flex" justifyContent="flex-start" flexWrap="wrap" gap={2}>
          {sports.map((sport) => ( <Chip label={sport} color={filter === sport ? 'success' : 'default'}onClick={() => handleFilterChange(sport)}className={filter === sport ? 'sport-chip' : ''}
              sx={{'&:hover': {backgroundColor: '#1E7B38', color: '#ffffff'} }} />))}
        </Box>
        <Grid container spacing={3}>{filteredTeams.map((team) => (
            <Grid item xs={12} sm={6} md={4} key={team.id}>
              <Card className="card" sx={{ backgroundColor: 'rgb(37,37,37)' }} >
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography className="card-title" sx={{ color: 'whitesmoke' }}>{team.name}</Typography>
                    <CardMedia component="img" image={team.logoUrl} alt={team.name} sx={{ maxHeight: 140, objectFit: 'contain' }}/>
                    <Box mt={2}>
                      <Button variant="contained" onClick={() => handleSeeDetails(team)} sx={{color: 'whitesmoke'}}>
                        {selectedTeam === team ? "Hide Details" : "See Details"}
                      </Button>
                    </Box>
                    {selectedTeam === team && (
                      <Box display="flex" flexDirection="column" alignItems="flex-start" marginTop={2}>
                        <Typography variant="body2" sx={{ color: 'whitesmoke' }}>Location: {team.location}</Typography>
                        <Typography variant="body2" sx={{ color: 'whitesmoke' }}>Members: {team.members.join(", ")}</Typography>
                      </Box>)
                    }
                  </Box>
                </CardContent>
                <Box display="flex" justifyContent="space-between" mt={2} px={2} pb={2}>
                  <Button variant="contained" color="error" className="reject-button" onClick={() => handleInvitationReject(team.name)}>
                    Reject </Button>
                  <Button variant="contained" color="success" className="accept-button" onClick={() => handleInvitationAccept(team.name)}>
                    Accept</Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default IncomingInvitations;
