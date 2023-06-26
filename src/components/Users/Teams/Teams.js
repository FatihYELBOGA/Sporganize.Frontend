import React, { useState } from "react";
import { 
  TextField, Button, FormControl, Avatar, Grid, 
  RadioGroup, FormControlLabel, Radio, Typography, Paper, InputAdornment, Box
} from "@material-ui/core";
import { 
  SportsBasketball, SportsSoccer, SportsTennis, SportsVolleyball, Add, Remove 
} from "@material-ui/icons";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import TeamsSidebar from "../TeamsSidebar/TeamsSidebar";

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
  const [sport, setSport] = useState("");
  const [selectedFriend, setSelectedFriend] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [sentRequests, setSentRequests] = useState([]);
  const [error, setError] = useState(false);
  const [errorTeamName, setErrorTeamName] = useState(false);

  const usernames = ["user1", "user2", "user3","merveozan","osmanaltunay","enesdemirel","fatihyelboga"];
  const teamNames = ["team1", "team2", "team3"];  

  const handleSendRequest = () => {
    if (selectedFriend) {
      if(usernames.includes(selectedFriend)) {
        setError(false);
        setSentRequests([...sentRequests, selectedFriend]);
        setSelectedFriend("");
      } else {
        setError(true);
      }
    }
  }

  const handleRemoveRequest = (indexToRemove) => {
    setSentRequests(sentRequests.filter((_, index) => index !== indexToRemove));
  }

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  const handleCreateTeam = () => {
    if (teamNames.includes(teamName)) {
      setErrorTeamName(true);
    } else {
      setErrorTeamName(false);
    }
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
                  setTeamName(e.target.value);
                  setErrorTeamName(false);
                }}
                error={errorTeamName}
                helperText={errorTeamName ? "This team name is already taken. Please choose another." : ""}
                fullWidth
              />
            </Grid>
          </Grid>

          <FormControl component="fieldset">
            <RadioGroup
              row
              value={sport}
              onChange={(e) => setSport(e.target.value)}
            >
              <FormControlLabel value="Football" control={<Radio color="primary" />} label={
                <Box display="flex" alignItems="center">
                  <SportsSoccer style={{ marginRight: 10 }}/>
                  Football
                </Box>
              } />
              <FormControlLabel value="Basketball" control={<Radio color="primary" />} label={
                <Box display="flex" alignItems="center">
                  <SportsBasketball style={{ marginRight: 10 }}/>
                  Basketball
                </Box>
              } />
              <FormControlLabel value="Table Tennis" control={<Radio color="primary" />} label={
                <Box display="flex" alignItems="center">
                  <SportsTennis style={{ marginRight: 10 }}/>
                  Table Tennis
                </Box>
              } />
              <FormControlLabel value="Volleyball" control={<Radio color="primary" />} label={
                <Box display="flex" alignItems="center">
                  <SportsVolleyball style={{ marginRight: 10 }}/>
                  Volleyball
                </Box>
              } />
            </RadioGroup>
          </FormControl>

          <Typography variant="body1" align="left">
            You can add friends with username
          </Typography>

          <TextField 
            variant="outlined"
            placeholder="Enter username" 
            value={selectedFriend} 
            onChange={(e) => setSelectedFriend(e.target.value)}
            error={error}
            helperText={error ? "This username doesn't exist." : ""}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={handleSendRequest}
                  >
                    SEND REQUEST
                  </Button>
                </InputAdornment>
              ),
            }}
          />

          {sentRequests.map((request, index) => (
            <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
            p={1}
            borderRadius={4}
            border="1px solid #ccc"
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar style={{ marginRight: 10 }}>{request.charAt(0)}</Avatar>
              <Typography variant="body1">{request}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => handleRemoveRequest(index)}
              >
                <Remove style={{ marginRight: 5 }}/>
                REMOVE
              </Button>
            </div>
          </Box>
          ))}

          <Box mt={2}>
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
