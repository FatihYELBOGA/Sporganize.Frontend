import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Grid, Box, TextField, InputAdornment, IconButton, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TeamsSidebar from "../TeamsSidebar/TeamsSidebar";
import './JoinTeam.css';
import team1picture from "../../pictures/team1.png";
import team2picture from "../../pictures/team2.png";
import team3picture from "../../pictures/team3.png";

function JoinTeam() {
  const [teams, setTeams] = useState([]);
  const [filter, setFilter] = useState("Soccer");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTeams = () => {
      const data = [
        { 
          id: 1, 
          name: "BESTFOOT", 
          logoUrl: team1picture, 
          description: "We are looking for two midfielders.", 
          members: ["Member 1", "Member 2",], 
          sport: "Soccer" 
        },
        { 
          id: 2, 
          name: "CHAMPIONS TEAM", 
          logoUrl: team2picture, 
          description: "We need a goalkeeper.", 
          members: ["Member 3", "Member 4"], 
          sport: "Soccer" 
        },
        { 
          id: 3, 
          name: "JAGUARS", 
          logoUrl: team3picture, 
          description: "Looking for a team member to join tournaments.", 
          members: ["Member 5", "Member 6"], 
          sport: "Basketball" 
        },
      ];
      setTeams(data);
    };
    fetchTeams();
  }, []);

  const sports = ["Soccer","Basketball", "Tennis"]; 

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
      <TeamsSidebar />
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
          />
        </Box>
        <Box marginBottom={3} display="flex" justifyContent="flex-start" flexWrap="wrap" gap={2}>
          {sports.map(sport => (
            <Chip 
              key={sport} 
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
          ))}
        </Box>

        <Grid container spacing={3}>
          {filteredTeams.map((team) => (
            <Grid item xs={12} sm={6} md={4} key={team.id}>
              <Card sx={{ borderRadius: '20px', border: '1px solid #000', background: 'rgba(56, 56, 56, 0.75)', minHeight: '350px' }}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5" component="div" my={2} sx={{ fontSize: 24, color: '#fff' }}>{team.name}</Typography>

                    <CardMedia
                      component="img"
                      image={team.logoUrl}
                      alt={team.name}
                      sx={{ maxHeight: 140, objectFit: 'contain' }}
                    />

                    <Box bgcolor="#647C31" p={1} my={2} width="100%" display="flex" justifyContent="center" borderRadius="10px">
                      <Typography variant="body2" sx={{ fontSize: 16, color: '#fff' }}>{team.description}</Typography>
                    </Box>
                    <Box bgcolor="#1E7B38" p={1} my={1} width="100%" display="flex" flexDirection="row" flexWrap="wrap" alignItems="center" maxHeight={100} overflow="auto" borderRadius="10px">
                      <Typography variant="subtitle1" sx={{ fontSize: 16, color: '#fff', whiteSpace: 'nowrap' }}>Team Members: </Typography>
                      <Box display="flex" flexDirection="row" flexWrap="wrap" pl={1}>
                        {team.members.map((member, index, arr) => 
                          <Typography 
                            key={index} // Unique key is added here
                            variant="subtitle2" 
                            sx={{ fontSize: 14, color: '#fff', margin: '0px 5px 5px 0px' }}
                          >
                            {member}{(index !== arr.length - 1) ? ',' : ''}
                          </Typography>
                        )}
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
