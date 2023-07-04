import React, { useState, useEffect } from "react";
import {Button,Avatar,Card,CardContent,Typography,Grid,Box,TextField,InputAdornment,IconButton,Chip} from '@mui/material';


function TeamCard(props) 
{ 
  const {team,type,invitationId} = props;
  const [invitedUsername, setInvitedUsername] = useState("");
  const [isDetails,setIsDetails] = useState(false);

  // profile photo
  const [avatarURL, setAvatarURL] = useState(null);

  const handleInvitationAccept = () => {
    const formData = new FormData();
    formData.append("Id", invitationId);
    formData.append("Status", "APPROVED");
  
    fetch("http://yelbogafatih-001-site1.btempurl.com/teams/invitation", {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleInvitationReject = () => 
  {
    const formData = new FormData();
    formData.append("Id", invitationId);
    formData.append("Status", "DENIED");

    fetch("http://yelbogafatih-001-site1.btempurl.com/teams/invitation", {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
 
 
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

  const handleSendRequest = (teamId) => {

  }
  useEffect(()=>{
    if(team.logo !== null){
    convertBase64ToFile(team.logo.content,team.logo.name)
    }
  },[])

  return (
        
            <Grid item xs={12} sm={6} md={4} key={team.id}>
              <Card className="card" sx={{ backgroundColor: 'rgb(37, 37, 37)' }}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography className="card-title" sx={{ color: 'whitesmoke' }}>{team.name}</Typography>
                
                    <Avatar sx={{ width: 80, height: 80}} src={avatarURL} />
                    {type === "captain" ? (<Box mt={2}>
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
                    </Box>):(<div></div>)}
                    
                    <Box mt={2}><Button variant="contained"onClick={() => setIsDetails(!isDetails)}sx={{color: 'whitesmoke'}}>
                        {isDetails ? "Hide Details" : "See Details"}</Button>
                    </Box>
                    {isDetails && (<Box display="flex" flexDirection="column" alignItems="flex-start" marginTop={2}>
                        {type === "incoming" ? (<Typography variant="body2" sx={{ color: 'whitesmoke' }}></Typography>) :(<Typography variant="body2" sx={{ color: 'whitesmoke' }}>Location: {team.location.province+" "+team.location.street+"/"+team.location.district}</Typography>)}
                        
                        <Typography variant="body2" sx={{ color: 'whitesmoke' }}>Members: {team.players.map((player)=>(
                            <Typography>{player.firstName+" " +player.lastName}</Typography>
                        ))}</Typography> </Box> )}
                  </Box>
                  {(type ==="incoming") ? (<Box display="flex" justifyContent="space-between" mt={2} px={2} pb={2}>
                  <Button variant="contained" color="error" className="reject-button" onClick={() => handleInvitationReject()}>
                    Reject </Button>
                  <Button variant="contained" color="success" className="accept-button" onClick={() => handleInvitationAccept()}>
                    Accept</Button>
                </Box>):(<div></div>)}
                </CardContent>
              </Card>
            </Grid>
    


  );
}

export default TeamCard;