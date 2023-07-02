import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Chip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TeamsSidebar from "../TeamsSidebar/TeamsSidebar";
import team1picture from "../../../pictures/team1.png";
import team2picture from "../../../pictures/team2.png";
import team3picture from "../../../pictures/team3.png";

function InviteMember() { 
  const [teams, setTeams] = useState([]);
  const [filter, setFilter] = useState("Football");
  const [search, setSearch] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [invitees, setInvitees] = useState({});  // key: teamId, value: invitee
  const [invitedMembers, setInvitedMembers] = useState({});  // key: teamId, value: array of invitees

  useEffect(() => {
    const fetchTeams = () => {
      const data = [
        { 
          id: 1, 
          name: "BESTFOOT", 
          logoUrl: team1picture, 
          location: "Bostanci/Kadiköy/Istanbul", 
          members: ["Member 1", "Member 2"], 
          sport: "Football" 
        },
        { 
          id: 2, 
          name: "CHAMPIONS TEAM", 
          logoUrl: team2picture, 
          location: "Bostanci/Kadiköy/Istanbul", 
          members: ["Member 3", "Member 4"], 
          sport: "Football" 
        },
        { 
          id: 3, 
          name: "JAGUARS", 
          logoUrl: team3picture, 
          location: "City C", 
          members: ["Member 5", "Member 6"], 
          sport: "Basketball" 
        },
      ];
      setTeams(data);
    };
    fetchTeams();
  }, []);

  const sports = ["Football", "Tennis", "Basketball", "Volleyball"]; 

  const filteredTeams = teams
    .filter(team => team.sport === filter)
    .filter(team => team.name.toLowerCase().includes(search.toLowerCase()));

  const handleFilterChange = (sport) => {
    setFilter(sport);
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSeeDetails = (team) => {
    if (selectedTeam === team) {
      setSelectedTeam(null);
    } else {
      setSelectedTeam(team);
    }
  }

  const handleInviteeChange = (event, teamId) => {
    setInvitees({
      ...invitees,
      [teamId]: event.target.value,
    });
  }

  const handleSendRequest = (teamId) => {
    if (invitees[teamId]?.trim() !== "" && selectedTeam !== null) {
      setInvitedMembers({
        ...invitedMembers,
        [teamId]: invitedMembers[teamId] ? [...invitedMembers[teamId], invitees[teamId]] : [invitees[teamId]],
      });
      setInvitees({
        ...invitees,
        [teamId]: "",
      });
    }
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
            sx={{
              width:'50%',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'green',
                },
                '&:hover fieldset': {
                  borderColor: 'darkgreen',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'darkgreen',
                },
              },
              color: 'whitesmoke',
            }}
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
                  color:'whitesmoke',
                },
              }}
            />
          ))}
        </Box>

        <Grid container spacing={3}>
          {filteredTeams.map((team) => (
            <Grid item xs={12} sm={6} md={4} key={team.id}>
              <Card className="card" sx={{ backgroundColor: 'rgb(37, 37, 37)' }}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography className="card-title" sx={{ color: 'whitesmoke' }}>{team.name}</Typography>
                    <CardMedia
                      component="img"
                      image={team.logoUrl}
                      alt={team.name}
                      sx={{ maxHeight: 140, objectFit: 'contain' }}
                    />
                    <Box mt={2}>
                    <TextField
                        variant="outlined"
                        placeholder="Enter username"
                        value={invitees[team.id] || ""}
                        onChange={(event) => handleInviteeChange(event, team.id)}
                        className="invitee-textfield"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton 
                                    onClick={() => handleSendRequest(team.id)} 
                                    color="inherit" 
                                    sx={{
                                      backgroundColor: 'green',
                                      color: 'whitesmoke',
                                      '&:hover': {
                                        backgroundColor: 'green',
                                      },
                                      borderRadius: '5px', 
                                      marginRight: '-8px', 
                                    }}
                                  >
                                    <Typography variant="body2" sx={{ color: 'whitesmoke'}}>SEND REQUEST</Typography>
                                  </IconButton>


                            </InputAdornment>
                          ),
                          className: "input-field",
                          classes: {
                            notchedOutline: "notched-outline"
                          },
                        }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'green',
                              },
                              '&:hover fieldset': {
                                borderColor: 'darkgreen',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'darkgreen',
                              },
                            },
                            color: 'whitesmoke', 
                            '& .MuiOutlinedInput-input': {
                              color: 'whitesmoke' 
                            },
                            '& .MuiInputLabel-root': {
                              color: 'whitesmoke', 
                            },
                            '&:hover .MuiInputLabel-root': {
                              color: 'whitesmoke',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: 'whitesmoke',
                            },
                          }}
                        />

                    </Box>
                    <Box mt={2}>
                      <Button 
                        variant="contained"
                        onClick={() => handleSeeDetails(team)}
                        sx={{color: 'whitesmoke'}}
>
                        {selectedTeam === team ? "Hide Details" : "See Details"}
                      </Button>
                    </Box>
                    {selectedTeam === team && (
                      <Box display="flex" flexDirection="column" alignItems="flex-start" marginTop={2}>
                        <Typography variant="body2" sx={{ color: 'whitesmoke' }}>Location: {team.location}</Typography>
                        <Typography variant="body2" sx={{ color: 'whitesmoke' }}>Members: {team.members.join(", ")}</Typography>
                        {invitedMembers[team.id]?.length > 0 && (
                          <Typography variant="body2" sx={{ color: 'whitesmoke' }}>Invited: {invitedMembers[team.id].join(", ")}</Typography>
                        )}
                      </Box>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default InviteMember;
