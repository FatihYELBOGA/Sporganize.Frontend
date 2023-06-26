import React, { useState } from 'react';
import {
  Box, TextField, Avatar, Typography, Grid,
  Select, MenuItem, InputLabel, FormControl, Button, createTheme, ThemeProvider
} from '@mui/material';

const addressData = {
  "İstanbul": {
    "Kadıköy": ["Acıbadem", "Moda", "Erenköy"],
    "Beşiktaş": ["Levent", "Etiler", "Ortaköy"],
  },
  "Ankara": {
    "Çankaya": ["Kızılay", "Dikmen", "Ayrancı"],
    "Mamak": ["Altındağ", "Demetevler", "Başak"],
  }
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ffffff',
    }
  },
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none"
          },
          "&.Mui-focused:after": {
            borderBottom: "none"
          }
        },
        root: {
          "&:hover": {
            backgroundColor: "transparent"
          },
          "&:focus": {
            backgroundColor: "transparent"
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused fieldset": {
            borderColor: "transparent"
          }
        }
      }
    }
  }
});

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [avatarSrc, setAvatarSrc] = useState("");
  const provinces = Object.keys(addressData);
  const districts = province ? Object.keys(addressData[province]) : [];
  const streets = district ? addressData[province][district] : [];
  const genders = ["Female","Male"];

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
    setDistrict("");
    setStreet("");
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
    setStreet("");
  };

  const handleAvatarChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAvatarSrc(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSaveChanges = () => {
    console.log('Changes saved!');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 3, marginTop: 2, borderRadius: 2, width: '60%', marginLeft: '30%', marginRight: '10%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', marginBottom: 3 }}>
          <input
              accept="image/*"
              id="avatar-upload"
              type="file"
              style={{ display: "none" }}
              onChange={handleAvatarChange}
            />
          <Avatar sx={{ width: 80, height: 80, cursor: 'pointer' }} src={avatarSrc} onClick={() => document.getElementById('avatar-upload').click()}/>
          <Typography variant="h6" component="p" sx={{ color: '#000', textAlign: 'center', textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', fontFamily: 'Poppins', fontWeight: 300, fontSize: '32px' }}>John Doe</Typography>
          <Button variant="contained" color="primary" size="small" sx={{ mt: 1 }} onClick={() => document.getElementById('avatar-upload').click()}>Edit Profile Photo</Button>
       </Box>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={6}>
            <TextField label="First Name" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth/>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Last Name" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth/>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Birth Date" type="date" defaultValue="" placeholder="Enter your birth date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>  
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select labelId="gender-label" id="gender-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                {genders.map((gend, index) => (
                  <MenuItem key={index} value={gend}>{gend}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="province-label">Province</InputLabel>
              <Select labelId="province-label" id="province-select" value={province} onChange={handleProvinceChange}>
                {provinces.map((prov, index) => (
                  <MenuItem key={index} value={prov}>{prov}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="district-label">District</InputLabel>
              <Select labelId="district-label" id="district-select" value={district} onChange={handleDistrictChange} disabled={!province}>
                {districts.map((dist, index) => (
                  <MenuItem key={index} value={dist}>{dist}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="street-label">Street</InputLabel>
              <Select labelId="street-label" id="street-select" value={street} onChange={(e) => setStreet(e.target.value)} disabled={!district}>
                {streets.map((str, index) => (
                  <MenuItem key={index} value={str}>{str}</MenuItem>
                ))}
              </Select>
            </FormControl>  
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button variant="contained" color="primary" onClick={handleSaveChanges}>Save Changes</Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Profile;
