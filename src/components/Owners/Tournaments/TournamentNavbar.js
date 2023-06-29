import React, { useState } from 'react';
import { Box, Container, MenuItem,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const TournamentNavbar = (props) => {
  const {type} = props;
  const [selectedOption, setSelectedOption] = useState(type);
  const navigate = useNavigate();

  const handleOptionClick = (event, option) => {
    setSelectedOption(option);
    
  };

 

  return (
    <Box sx={containerStyles}>
     <Button onClick={(e) =>{
        navigate("/OwnerMyTournaments")
     }}>
        <ArrowBackIcon sx={{color:"green",fontSize:35,marginLeft:5}}></ArrowBackIcon>
      </Button>
      <Container maxWidth="sm" sx={optionsContainerStyles}>
       
          <MenuItem

            onClick={(event) => {
                handleOptionClick(event, 'leagueTable')
                navigate("/OwnerTournament/1")}}
            sx={{borderBottom:2,borderColor: selectedOption === "leagueTable" ? "black":"green"}}
          >
            League Table
          </MenuItem>
          <MenuItem
            onClick={(event) => {
                handleOptionClick(event, 'saveMatches')
                navigate("/OwnerTournament/1/saveMatches")}}
            sx={{borderBottom:2,borderColor: selectedOption === "saveMatches" ? "black":"green"}}
          >
            Save Matches
          </MenuItem>
        
       
      </Container>
    </Box>
  );
};

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginRight:15,
  marginTop: '20px',
  marginBottom: '50px',
};

const optionsContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};



export default TournamentNavbar;
