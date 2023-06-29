import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Grid, Box, TextField, InputAdornment, IconButton, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TeamsSidebar from "../TeamsSidebar/TeamsSidebar";
import './JoinTeam.css';
// team logo photos
import team1picture from "../../../pictures/team1.png";
import team2picture from "../../../pictures/team2.png";
import team3picture from "../../../pictures/team3.png";

function JoinTeam() { 
  const [teams, setTeams] = useState([]);
  const [filter, setFilter] = useState("Football");
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
          sport: "Football" 
        },
        { 
          id: 2, 
          name: "CHAMPIONS TEAM", 
          logoUrl: team2picture, 
          description: "We need a goalkeeper.", 
          members: ["Member 3", "Member 4"], 
          sport: "Football" 
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

  const sports = ["Football", "Tennis","Basketball","Volleyball"]; 

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
                    color:'#ffffff',
                },
            }}
        />
        
          ))}
        </Box>

        <Grid container spacing={3}>
          {filteredTeams.map((team) => (
            <Grid item xs={12} sm={6} md={4} key={team.id}>
              <Card className="card">
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography className="card-title">{team.name}</Typography>
                    <CardMedia
                      component="img"
                      image={team.logoUrl}
                      alt={team.name}
                      sx={{ maxHeight: 140, objectFit: 'contain' }}
                    />
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