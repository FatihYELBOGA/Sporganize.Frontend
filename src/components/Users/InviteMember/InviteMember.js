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
  const [invitedUsername, setInvitedUsername] = useState("");

  const [filter, setFilter] = useState("Football");
  const [selectedTeam, setSelectedTeam] = useState(null);

  // profile photo
  const [avatarURL, setAvatarURL] = useState(null);

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

   // convert the byte[] to file object
   const convertBase64ToFile = (base64String, fileName) => 
   {
     const contentType = 'image/*'; // Update the content type as per your file type
     const sliceSize = 1024;
     const byteCharacters = atob(base64String);
     const byteArrays = [];
 
     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
       const slice = byteCharacters.slice(offset, offset + sliceSize);
       const byteNumbers = new Array(slice.length);
 
       for (let i = 0; i < slice.length; i++) {
         byteNumbers[i] = slice.charCodeAt(i);
       }
 
       const byteArray = new Uint8Array(byteNumbers);
       byteArrays.push(byteArray);
     }
 
     const blob = new Blob(byteArrays, { type: contentType });
     const f = new File([blob], fileName, { type: contentType });
     const fileURL = URL.createObjectURL(f);
     setAvatarURL(fileURL);
   };

  const handleSeeDetails = (team) => {

  }

  const handleSendRequest = (teamId) => {

  }

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
<<<<<<< Updated upstream
            <TeamCard team={team} type="captain"/>
=======
            <Grid item xs={12} sm={6} md={4} key={team.id}>
              <Card className="card" sx={{ backgroundColor: 'rgb(37, 37, 37)' }}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography className="card-title" sx={{ color: 'whitesmoke' }}>{team.name}</Typography>
                    <Avatar sx={{ width: 80, height: 80}} src={avatarURL} />
                    <Box mt={2}>
                    <Typography variant="body1" align="center" sx={{ color: 'whitesmoke', marginBottom: '1rem' }}>
                        You can add teammates to your team with their username
                      </Typography>
                    <TextField variant="outlined" placeholder="Enter username" value={invitedUsername} onChange={(e) => setInvitedUsername(e.target.value)} className="invitee-textfield"
                        InputProps={{endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={() => handleSendRequest(team.id)} color="inherit" sx={{backgroundColor: 'green',color: 'whitesmoke','&:hover': {backgroundColor: 'green', },borderRadius: '5px', marginRight: '-8px', }}>
                                    <Typography variant="body2" sx={{ color: 'whitesmoke'}}>SEND REQUEST</Typography>
                             </IconButton>
                          </InputAdornment>),
                          className: "input-field",classes: { notchedOutline: "notched-outline"},}}
                          sx={{'& .MuiOutlinedInput-root': {'& fieldset': { borderColor: 'green',},'&:hover fieldset': {borderColor: 'darkgreen',},'&.Mui-focused fieldset': {borderColor: 'darkgreen',},},color: 'whitesmoke', '& .MuiOutlinedInput-input': {color: 'whitesmoke' },
                            '& .MuiInputLabel-root': {color: 'whitesmoke',  }, '&:hover .MuiInputLabel-root': {color: 'whitesmoke',},'& .MuiInputLabel-root.Mui-focused': {color: 'whitesmoke',}, }}/>
                    </Box>
                    <Box mt={2}><Button variant="contained"onClick={() => handleSeeDetails(team)}sx={{color: 'whitesmoke'}}>
                        {selectedTeam === team ? "Hide Details" : "See Details"}</Button>
                    </Box>
                    {selectedTeam === team && (<Box display="flex" flexDirection="column" alignItems="flex-start" marginTop={2}>
                        <Typography variant="body2" sx={{ color: 'whitesmoke' }}>Location: {team.location}</Typography>
                        <Typography variant="body2" sx={{ color: 'whitesmoke' }}>Members: {team.members.join(", ")}</Typography> </Box> )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
>>>>>>> Stashed changes
          ))}
        </Grid>

        <br/><br/>
        

        <Grid container spacing={3}>
          {teams.map((team) => (
<<<<<<< Updated upstream
            <TeamCard team={team} type="normal"/>
=======
            <Grid item xs={12} sm={6} md={4} key={team.id}>
              <Card className="card" sx={{ backgroundColor: 'rgb(37, 37, 37)' }}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography className="card-title" sx={{ color: 'whitesmoke' }}>{team.name}</Typography>
                    <Avatar sx={{ width: 80, height: 80}} src={avatarURL} />
                    <Box mt={2}><Button variant="contained"onClick={() => handleSeeDetails(team)}sx={{color: 'whitesmoke'}}>
                        {selectedTeam === team ? "Hide Details" : "See Details"}</Button>
                    </Box>
                    {selectedTeam === team && (<Box display="flex" flexDirection="column" alignItems="flex-start" marginTop={2}>
                        <Typography variant="body2" sx={{ color: 'whitesmoke' }}>Location: {team.location}</Typography>
                        <Typography variant="body2" sx={{ color: 'whitesmoke' }}>Members: {team.members.join(", ")}</Typography> </Box> )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
>>>>>>> Stashed changes
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default InviteMember;