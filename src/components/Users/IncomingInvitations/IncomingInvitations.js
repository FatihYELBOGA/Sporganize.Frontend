import React, { useState, useEffect } from 'react';
import { Grid,Box,TextField,InputAdornment,IconButton,Chip} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TeamsSidebar from '../TeamsSidebar/TeamsSidebar';

import TeamCard from '../InviteMember/TeamCard';

function IncomingInvitations(props) {
  const [teams, setTeams] = useState([]);
  const [filter, setFilter] = useState('FOOTBALL');
  const [search, setSearch] = useState('');
  const [branch,setBranch] = useState([])
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
      
      fetch("https://localhost:7120/users/invitations/"+props.userId)
          .then((res) => res.json())
          .then((result) => {
            setTeams(result);
            console.log(result)
          })
          .catch((error) => console.log(error)); 
  }, [props.userId]);

  useEffect(()=>{
    fetch("https://localhost:7120/branches")
          .then((res) => res.json())
          .then((result) => {
            setBranch(result);
          })
          .catch((error) => console.log(error));
  },[])

 

  const filteredTeams = teams
    .filter((team) => team.branch === filter)
    .filter((team) => team.name.toLowerCase().includes(search.toLowerCase()));

  const handleFilterChange = (sport) => {
    setFilter(sport);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
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
          {branch.map((sport) => ( <Chip label={sport} color={filter === sport ? 'success' : 'default'}onClick={() => handleFilterChange(sport)}className={filter === sport ? 'sport-chip' : ''}
              sx={{'&:hover': {backgroundColor: '#1E7B38', color: '#ffffff'} }} />))}
        </Box>
        <Grid container spacing={3}>{teams.map((team) => (
            <TeamCard invitationId={team.id}  team={team.team} type="incoming"></TeamCard>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default IncomingInvitations;
