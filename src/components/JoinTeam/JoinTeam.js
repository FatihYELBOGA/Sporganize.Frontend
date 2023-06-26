import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Grid, Box, TextField, InputAdornment, IconButton, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TeamsSidebar from "../TeamsSidebar/TeamsSidebar";
<<<<<<< Updated upstream
import './JoinTeam.css';

=======

// Import pictures
>>>>>>> Stashed changes
import team1picture from "../../pictures/team1.png";
import team2picture from "../../pictures/team2.png";
import team3picture from "../../pictures/team3.png";

function JoinTeam() {
  const [teams, setTeams] = useState([]);
<<<<<<< Updated upstream
  const [filter, setFilter] = useState("Soccer");
  const [search, setSearch] = useState("");

=======
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  // Simulate fetch data from API
>>>>>>> Stashed changes
  useEffect(() => {
    const fetchTeams = () => {
      const data = [
        { 
          id: 1, 
<<<<<<< Updated upstream
          name: "BESTFOOT", 
          logoUrl: team1picture, 
          description: "We are looking for two midfielders.", 
          members: ["Member 1", "Member 2",], 
=======
          name: "Team 1", 
          logoUrl: team1picture, 
          description: "We are looking for two midfielders.", 
          members: ["Member 1", "Member 2"], 
>>>>>>> Stashed changes
          sport: "Soccer" 
        },
        { 
          id: 2, 
<<<<<<< Updated upstream
          name: "CHAMPIONS TEAM", 
=======
          name: "Team 2", 
>>>>>>> Stashed changes
          logoUrl: team2picture, 
          description: "We need a goalkeeper.", 
          members: ["Member 3", "Member 4"], 
          sport: "Soccer" 
        },
        { 
          id: 3, 
<<<<<<< Updated upstream
          name: "JAGUARS", 
          logoUrl: team3picture, 
          description: "Looking for a team member to join tournaments.", 
          members: ["Member 5", "Member 6"], 
          sport: "Basketball" 
=======
          name: "Team 3", 
          logoUrl: team3picture, 
          description: "Looking for a new coach.", 
          members: ["Member 5", "Member 6"], 
          sport: "Soccer" 
>>>>>>> Stashed changes
        },
      ];
      setTeams(data);
    };
    fetchTeams();
  }, []);

<<<<<<< Updated upstream
  const sports = ["Soccer","Basketball", "Tennis"]; 
=======
  const sports = ["Basketball", "Soccer", "Tennis"]; 
>>>>>>> Stashed changes

  const filteredTeams = teams
    .filter(team => team.sport === filter)
    .filter(team => team.name.toLowerCase().includes(search.toLowerCase()));

  const handleFilterChange = (sport) => {
    setFilter(sport);
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <Box display="flex">
<<<<<<< Updated upstream
    <TeamsSidebar /> 
=======
      <TeamsSidebar />
>>>>>>> Stashed changes
      <Box flexGrow={1} p={3}>
        <Box marginBottom={3} display="flex" justifyContent="center">
          <TextField 
            variant="outlined"
            placeholder="Search teams"
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
<<<<<<< Updated upstream
            className="text-field"
=======
            sx={{ 
              width: '50%', 
              '& .MuiOutlinedInput-notchedOutline': { 
                borderColor: '#1E7B38',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1E7B38',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1E7B38',
              },
              '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1E7B38',
              },
              '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1E7B38',
              },
            }}
>>>>>>> Stashed changes
          />
        </Box>
        <Box marginBottom={3} display="flex" justifyContent="flex-start" flexWrap="wrap" gap={2}>
          {sports.map(sport => (
            <Chip 
<<<<<<< Updated upstream
            label={sport} 
            color={filter === sport ? "success" : "default"} 
            onClick={() => handleFilterChange(sport)}
            className={filter === sport ? "sport-chip" : ""}
            sx={{
                '&:hover': {
                    backgroundColor: '#1E7B38',
                },
            }}
        />
        
=======
              label={sport} 
              color={filter === sport ? "primary" : "default"} 
              onClick={() => handleFilterChange(sport)}
              sx={{ 
                backgroundColor: filter === sport ? '#1E7B38' : '',
                '&:hover': {
                  backgroundColor: filter === sport ? '#1E7B38' : '',
                },
                '&:focus': {
                  backgroundColor: filter === sport ? '#1E7B38' : '',
                },
              }}
            />
>>>>>>> Stashed changes
          ))}
        </Box>

        <Grid container spacing={3}>
          {filteredTeams.map((team) => (
            <Grid item xs={12} sm={6} md={4} key={team.id}>
<<<<<<< Updated upstream
              <Card className="card">
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography className="card-title">{team.name}</Typography>
=======
              <Card sx={{ borderRadius: '20px', border: '1px solid #000', background: 'rgba(56, 56, 56, 0.75)', minHeight: '350px' }}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5" component="div" my={2} sx={{ fontSize: 24, color: '#fff' }}>{team.name}</Typography>
>>>>>>> Stashed changes
                    <CardMedia
                      component="img"
                      image={team.logoUrl}
                      alt={team.name}
                      sx={{ maxHeight: 140, objectFit: 'contain' }}
                    />
<<<<<<< Updated upstream
                    <Box bgcolor="#647C31" p={1} my={2} width="100%" display="flex" alignItems="center" justifyContent="center" borderRadius="10px">
                      <Typography className="card-description">{team.description}</Typography>
                    </Box>
                    <Box bgcolor="#1E7B38" p={1} my={1} width="100%" display="flex" flexDirection="row" alignItems="center" maxHeight={100} overflow="auto" borderRadius="10px">
  <Typography className="team-members">Team Members: </Typography>
  <Box display="flex" flexDirection="row" flexWrap="wrap" pl={1} alignItems="center">
    {team.members.map((member, index, arr) => 
      <Typography className="card-member-name">
        {member}{(index !== arr.length - 1) ? ',' : ''}
      </Typography>
    )}
  </Box>
</Box>

                    <Box mt={2}>
                      <Button 
                        variant="contained"
                        className="join-button"
=======
                    <Box bgcolor="#647C31" p={1} my={2} width="100%" display="flex" justifyContent="center" borderRadius="10px">
                      <Typography variant="body2" sx={{ fontSize: 16, color: '#fff' }}>{team.description}</Typography>
                    </Box>
                    <Box bgcolor="#1E7B38" p={1} my={1} width="100%" display="flex" flexDirection="row" flexWrap="wrap" alignItems="center" maxHeight={100} overflow="auto" borderRadius="10px">
    <Typography variant="subtitle1" sx={{ fontSize: 16, color: '#fff', whiteSpace: 'nowrap' }}>Team Members: </Typography>
    <Box display="flex" flexDirection="row" flexWrap="wrap" pl={1}>
        {team.members.map((member, index, arr) => <Typography variant="subtitle2" sx={{ fontSize: 14, color: '#fff', margin: '0px 5px 5px 0px' }}>{member}{(index !== arr.length - 1) ? ',' : ''}</Typography>)}
    </Box>

                    </Box>
                    <Box mt={2}>
                      <Button 
                        variant="contained" 
                        sx={{ 
                          backgroundColor: '#D81A1A', 
                          color: '#fff',
                          '&:hover': {
                            backgroundColor: '#D81A1A',
                          },
                          borderRadius: '4px',
                          fontSize: 16
                        }}
>>>>>>> Stashed changes
                        onClick={() => {  }}
                      >
                        Send Request
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default JoinTeam;
