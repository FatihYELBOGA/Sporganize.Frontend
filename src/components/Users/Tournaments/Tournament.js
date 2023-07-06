import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Grid, Box,Avatar, MenuItem, Menu } from '@mui/material';

function TournamentCard(props) 
{ 
  const {
  type,
  userId,
  id,
  name,
  title,
  description,
  startingDate,
  endingDate,
  branch,
  sportFacility,
  url} = props;
  const [isDetails,setIsDetails] = useState(false);
  // profile photo
  const [avatarURL, setAvatarURL] = useState(url);
  const [eligibleTeams, setEligibleTeams] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [userTeams, setUserTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://yelbogafatih-001-site1.btempurl.com/users/captained-teams/"+userId)
      .then((res) => res.json())
      .then((result) => {
        setUserTeams(result);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleApplyClick = (event) => {

    const eligibleTeams
      = userTeams
      .filter(team => team.branch === branch);
    setEligibleTeams(eligibleTeams);

    if(eligibleTeams.length === 0) {
      alert('You do not have a team eligible for this tournament.');
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTeamSelect = (teamName,teamId) => {
   
    setAnchorEl(null);
    alert(`You applied to with team ${teamId}`);
    fetch("http://yelbogafatih-001-site1.btempurl.com/tournaments/joining", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        teamId:teamId,
        tournamentId:id
    }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log('Response:', data);
        alert("Team was joined successfully.")
        // Perform any additional actions with the data
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  };

  return (
            
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Card className="card" sx={{ backgroundColor: '#ededed' }}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5" className="card-title" sx={{ color: 'black' }}>{name}</Typography>
                
                    <Avatar sx={{ width: 80, height: 80}} src={avatarURL} />
                    {type === "my-tournament" ? 
                    (<Box display="flex" flexDirection="column" alignItems="center" marginTop={2}>
                      <Typography variant="body2" sx={{ color: 'black'  }}>Sport Facility </Typography>
                        <Typography variant="body2" sx={{ color: 'black',marginBottom:1  }}>{sportFacility.name}</Typography>

                    </Box>):  
                    (<Box>
                    <Box mt={2}><Button style={{backgroundColor:"green"}} variant="contained"onClick={() => setIsDetails(!isDetails)}sx={{color: 'whitesmoke'}}>
                        {isDetails ? "Hide Details" : "See Details"}</Button>
                    </Box>
                    {isDetails && (<Box display="flex" flexDirection="column" alignItems="center" marginTop={2}>
                       
                        <Typography variant="body2" sx={{ color: 'black',marginBottom:1  }}>{title}</Typography>
                        <Typography variant="body2" sx={{ color: 'black',marginBottom:1  }}>{description}</Typography>
                        <Typography variant="body2" sx={{ color: 'black'  }}>Sport Facility </Typography>
                        <Typography variant="body2" sx={{ color: 'black',marginBottom:1  }}>{sportFacility.name}</Typography>
                        <Box sx={{display:"flex", justifyContent:"space-between"}}>
                        <Typography variant="body2" sx={{ color: 'black',marginRight:2}}>Starting Date: {startingDate.split("T")[0]}</Typography>
                        <Typography variant="body2" sx={{ color: 'black'}}>Ending Date: {endingDate.split("T")[0]}</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'black'}}></Typography>
                        <Typography variant="body2" sx={{ color: 'black',marginTop:1 }}>Phone </Typography> 
                        <Typography variant="body2" sx={{ color: 'black',justifyContent:"center"}}> {sportFacility.phone}</Typography> 
                        </Box> )}
                    </Box>)}
                    
                  </Box>
                  {type==="my-tournament" ? (<Box sx={{display:"flex",textAlign: "end",justifyContent:"space-between"}}>
                  <Typography
                    variant="body2"
                    color="green"
                    sx={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      marginTop:1
                    }}
                  >
                    Active
                  </Typography>
                    <Button
                      onClick={(e)=>{
                        navigate("/my-tournament/"+id)
                      }}
                      sx={{
                        color: '#1E7B38',
                        fontSize: '12px',
                        marginTop:0,
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      See More Details
                    </Button>
                  </Box>):
                  
                  (<Box textAlign="center" py={2}>
                 <Button sx={{width:"90%"}} variant="contained" color="success" >Apply</Button>
               </Box>)}
                  
                </CardContent>
              </Card>
              <Menu
                sx={{}}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                {eligibleTeams.map((team) => (
                    <MenuItem sx={{width:"90%"}} key={team.id} onClick={() => handleTeamSelect(team.name,team.id)}>
                    {team.name}
                    </MenuItem>
                ))}
                </Menu>
            </Grid>
    


  );
}

export default TournamentCard;