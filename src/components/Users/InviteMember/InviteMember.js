import React, { useState, useEffect } from "react";
import {Button,Avatar,Card,CardContent,CardMedia,Typography,Grid,Box,TextField,InputAdornment,IconButton,Chip} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TeamCard from "./TeamCard";
import TeamsSidebar from "../TeamsSidebar/TeamsSidebar";

function InviteMember(props)
{

  const [branch, setBranch] = useState("");
  const [branches, setBranches] = useState([]);
  const [teams,  setTeams] = useState([]);
  const [captainedTeams, setCaptainedTeams] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Football");
 
  // get the branches
  useEffect(() => {

    fetch("http://yelbogafatih-001-site1.btempurl.com/branches")
      .then((res) => res.json())
      .then((result) => {
        setBranches(result);
      })
      .catch((error) => console.log(error));

  }, []);

 

  // get the teams

  useEffect(() => {

    fetch("http://yelbogafatih-001-site1.btempurl.com/users/teams/"+props.userId)
      .then((res) => res.json())
      .then((result) => {
        setTeams(result);
      })
      .catch((error) => console.log(error));

  }, []);

  // get the captained teams

  useEffect(() => {
    fetch("http://yelbogafatih-001-site1.btempurl.com/users/captained-teams/"+props.userId)
      .then((res) => res.json())
      .then((result) => {
        setCaptainedTeams(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box display="flex">
      <TeamsSidebar />
      <Box flexGrow={1} p={3}>
        <Box marginBottom={3} display="flex" justifyContent="center">
          <TextField variant="outlined" placeholder="Search teams" value={search}  onChange={(e) => setSearch(e.target.value)}
            InputProps={{endAdornment: (<InputAdornment position="end"><IconButton><SearchIcon /></IconButton></InputAdornment>),}}
            sx={{width:'50%','& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'green',},'&:hover fieldset': { borderColor: 'darkgreen', },'&.Mui-focused fieldset': {borderColor: 'darkgreen',},},color: 'whitesmoke', }}/>
        </Box>
        <Box marginBottom={3} display="flex" justifyContent="flex-start" flexWrap="wrap" gap={2}>

          {branches.map(sport => (<Chip label={sport} color={branch === sport ? "success" : "default"} onClick={(e) => setBranch(sport)} className={filter === sport ? "sport-chip" : ""}

              sx={{ '&:hover': {backgroundColor: '#1E7B38',color:'whitesmoke',},}}/>))}

        </Box>
        <Grid container spacing={3}>
          {captainedTeams.map((team) => (
            <TeamCard team={team} type="captain"/>
          ))}
        </Grid>
        <br/><br/>
        <Grid container spacing={3}>
          {teams.map((team) => (
            <TeamCard team={team} type="normal"/>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default InviteMember;