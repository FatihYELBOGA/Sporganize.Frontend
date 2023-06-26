import React, { useState } from 'react';
import {
  Box, TextField, Avatar, Typography, Grid,
  Select, MenuItem, InputLabel, FormControl, Button, createTheme, ThemeProvider
} from '@mui/material';

// Simulating provinces, districts and streets data
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
});

const Profile = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [avatarSrc, setAvatarSrc] = useState("");
  const provinces = Object.keys(addressData);
  const districts = province ? Object.keys(addressData[province]) : [];
  const streets = district ? addressData[province][district] : [];

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
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', transform: 'rotate(-0.392deg)', flexShrink: 0, marginBottom: 3 }}>
          <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'flex-start',paddingRight: '50%'}}>
            <Avatar sx={{ width: 80, height: 80, cursor: 'pointer' }} src={avatarSrc} onClick={() => document.getElementById('avatar-upload').click()}/>
              <Typography variant="h6" component="p" sx={{ color: '#000', textAlign: 'center', textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', fontFamily: 'Poppins', fontWeight: 300, fontSize: '32px' }}>John Doe</Typography>
                <Button variant="contained" color="primary" size="small" sx={{ mt: 1 }}>Edit Profile Photo</Button>
          </Box>
       </Box>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth InputProps={{ style: { color: "#000000" }}} sx={{ width: '50%' }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Birth Date" type="date" defaultValue=""
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              InputProps={{ style: { color: "#000000" }}}
              sx={{ width: '50%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              InputProps={{ style: { color: "#000000" }}}
              sx={{ width: '50%' }}
            />
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
          <Button variant="contained" color="primary" sx={{ width: '33%' }} onClick={handleSaveChanges}>Save Changes</Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Profile;
