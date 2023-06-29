import React, { useState, useEffect } from "react";

import { 
  TextField, Button, FormControl, Avatar, Grid, Typography, Paper, Box
} from "@material-ui/core";

import { Add } from "@material-ui/icons";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import TeamsSidebar from "../TeamsSidebar/TeamsSidebar";
import { Select, MenuItem, InputLabel } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1E7B38',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: '#f44336',
    },
    success: {
      main: green[500],
    }
  },
});

const Teams = () => {
  const [teamName, setTeamName] = useState("");
  const [branch, setBranch] = useState("");
  const [branches, setBranches] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // get the branches
  useEffect(() => {
    fetch(" https://sporganize.azurewebsites.net/branches").
    then((res) =>
      res.json()).
    then((result) => {
      setBranches(result);
    },
    (error) => {
      console.log(error);
    })
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  const handleCreateTeam = () => 
  {

  }

  return (
    <ThemeProvider theme={theme}>
      <TeamsSidebar/>
      <div style={{ display: "flex", justifyContent: "center", marginTop: '3rem' }}>
      <Paper style={{ 
        padding: '2rem', 
        width: '65%', 
        marginLeft: '10%',
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem',
        backgroundColor: '#c1cdc1',
        color: theme.palette.secondary.main,
      }}>
          <Grid container alignItems="flex-start" spacing={3} marginBottom="2rem">
          <Grid item xs={12} sm={3} style={{ textAlign: 'center' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <input
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      style={{ display: "none" }}
      id="logo-upload"
    />
    <label htmlFor="logo-upload">
      <Avatar
        alt="Team Logo"
        src={selectedFile}
        variant="square"
        style={{ width: 150, height: 150, cursor: "pointer" }}
      >
        {!selectedFile && <Add style={{ fontSize: 70 }} />}
      </Avatar>
    </label>
    <label htmlFor="logo-upload" style={{ marginTop: '1rem', cursor: "pointer", color: green[500], border: `1px solid ${green[500]}`, borderRadius: '5px', padding: '5px' }}>
      Edit Team Logo
    </label>
  </div>
</Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="body1" align="left" style={{ marginBottom: "0.2rem" }}>
                Team Name
              </Typography>
              <TextField 
                variant="outlined" 
                value={teamName} 
                onChange={(e) => {

                }}
                fullWidth
              />
            </Grid>
          </Grid>

<Grid item xs={12} sm={9}>
  <Grid container spacing={1} alignItems="center">
    {branches.map((b) => (
      <Grid item key={b}>
        <Button 
          variant={branch === b ? "contained" : "outlined"} 
          onClick={() => setBranch(b)}
        >
          {b}
        </Button>
      </Grid>
    ))}
  </Grid>
</Grid>


          <Box  sx={{ width: '50%', padding:'1%', marginLeft:'25%' }}>
            <Button 
              variant="contained" 
              color="primary"
              fullWidth
              onClick={handleCreateTeam}
            >
              CREATE TEAM
            </Button>
          </Box>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default Teams;
