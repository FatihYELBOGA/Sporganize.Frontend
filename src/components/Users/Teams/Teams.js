import React, { useState, useEffect } from "react";
import { 
  TextField, Button, FormControl, Avatar, Grid, Typography, Paper, Box, InputLabel, OutlinedInput
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { createTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import TeamsSidebar from "../TeamsSidebar/TeamsSidebar";
import { Select, MenuItem } from '@mui/material';

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

const GreenOutlinedInput = withStyles({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1E7B38',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1E7B38',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1E7B38',
    },
  },
})(OutlinedInput);

const Teams = () => {
  const [teamName, setTeamName] = useState("");
  const [branch, setBranch] = useState("");
  const [branches, setBranches] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [streets, setStreets] = useState([]);

  useEffect(() => {
    fetch("https://sporganize.azurewebsites.net/branches")
      .then((res) => res.json())
      .then((result) => setBranches(result))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("https://sporganize.azurewebsites.net/provinces")
      .then((res) => res.json())
      .then((result) => setProvinces(result))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (province) {
      fetch(`https://sporganize.azurewebsites.net/districts/${province}`)
        .then((res) => res.json())
        .then((result) => setDistricts(result))
        .catch((error) => console.log(error));
    }
  }, [province]);

  useEffect(() => {
    if (district) {
      fetch(`https://sporganize.azurewebsites.net/streets/${district}`)
        .then((res) => res.json())
        .then((result) => setStreets(result))
        .catch((error) => console.log(error));
    }
  }, [district]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleCreateTeam = () => {
    // Burada yeni takımı oluşturma işlemlerini gerçekleştirin
  };

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
              <TextField 
                variant="outlined" 
                value={teamName} 
                onChange={(e) => setTeamName(e.target.value)}
                label="Team Name"
                fullWidth
              />
              <Grid container spacing={1} alignItems="center" style={{ marginTop: '1rem' }}>
                {branches.map((b) => (
                  <Grid item key={b}>
                    <Button 
                      variant={branch === b ? "contained" : "outlined"} 
                      color={branch === b ? "primary" : "default"}
                      onClick={() => setBranch(b)}
                    >
                      {b}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="province-select-label">Province</InputLabel>
                <Select
                  labelId="province-select-label"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  input={<GreenOutlinedInput label="Province" />}
                >
                  {provinces.map((p) => (
                    <MenuItem value={p.id} key={p.id}>
                      {p.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="district-select-label">District</InputLabel>
                <Select
                  labelId="district-select-label"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  input={<GreenOutlinedInput label="District" />}
                >
                  {districts.map((d) => (
                    <MenuItem value={d.id} key={d.id}>
                      {d.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="street-select-label">Street</InputLabel>
                <Select
                  labelId="street-select-label"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  input={<GreenOutlinedInput label="Street" />}
                >
                  {streets.map((s) => (
                    <MenuItem value={s.id} key={s.id}>
                      {s.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Box sx={{ width: '100%', padding: '1%'}}>
              <Button 
                variant="contained" 
                color="primary"
                fullWidth
                onClick={handleCreateTeam}
              >
                CREATE TEAM
              </Button>
            </Box>
          </Grid>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default Teams;
