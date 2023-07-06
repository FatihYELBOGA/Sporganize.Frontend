import React, { useState, useEffect } from "react";
import {
  TextField, Button, FormControl, Avatar, Grid, InputLabel, OutlinedInput, Container,Select, MenuItem
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { createTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

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

const About = (props) => 
{
  const [facilityName, setFacilityName] = useState("");
  const [province, setProvince] = useState("");  
  const [provinceId, setProvinceId] = useState(0);
  const [district, setDistrict] = useState(""); 
  const [districtId, setDistrictId] = useState(0);
  const [street, setStreet] = useState("");
  const [streetId, setStreetId] = useState(0);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [streets, setStreets] = useState([]);  
  const [phone,setPhone] = useState("");
  
  // byte array of profile photo
  const [avatar, setAvatar] = useState(null);

  // profile photo
  const [avatarURL, setAvatarURL] = useState(null);

  // get the provinces
  useEffect(() => {
    fetch("http://yelbogafatih-001-site1.btempurl.com/provinces").
    then((res) =>
      res.json()).
    then((result) => {
      setProvinces(result);
    },
    (error) => {
      console.log(error);
    })
  }, []);

  // get the districts by provinceId
  useEffect(() => { 
    fetch("http://yelbogafatih-001-site1.btempurl.com/districts/"+provinceId).
    then((res) =>
      res.json()).
    then((result) => {
      setDistricts(result);
    },
    (error) => {
      console.log(error);
    });
  }, [provinceId]);

  // get the streets by districtId
  useEffect(() => {
    fetch("http://yelbogafatih-001-site1.btempurl.com/streets/"+districtId).
    then((res) =>
      res.json()).
    then((result) => {
      setStreets(result);
    },
    (error) => {
      console.log(error);
    });
  }, [districtId]);

  const handleFileChange = (e) => 
  {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check file size
      const fileSizeLimit = 5 * 1024 * 1024; // 5MB in bytes
      if (selectedFile.size <= fileSizeLimit) {
        const fileURL = URL.createObjectURL(selectedFile);
        setAvatar(selectedFile);
        setAvatarURL(fileURL);
      } else {
        // File size exceeds the limit
        alert("File size exceeds the limit of 5MB.");
      }
    }
  };

  const handleCreateTeam = (e) => 
  {
    e.preventDefault();

    if(avatar==null){
      alert("logo should not be null!");
      return;
    }

    const formData = new FormData();
    formData.append("Name", facilityName);
    formData.append("Profile", avatar);
    formData.append("Phone", phone);
    formData.append("StreetId", streetId);
    formData.append("OwnerId", props.userId);

    fetch("http://yelbogafatih-001-site1.btempurl.com/sport-facilities",{
      method: "POST",
      body: formData
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
      alert("the facility was added successfully!");
    })
    .catch((err) => console.log(err));
    setFacilityName("");
    setAvatar(null);
    setPhone("")
    
  };

  // change the province and provinceId
  const handleProvinceChange = (e) => 
  {
    let pid = provinces.find(province => province.name === e.target.value)?.id;
    setProvinceId(pid);
    setProvince(e.target.value);
  };

  // change the district and districtId
  const handleDistrictChange = (e) => 
  {
    let did = districts.find(district => district.name === e.target.value)?.id;
    setDistrictId(did);
    setDistrict(e.target.value);
  };

  // change the street and streetId
  const handleStreetChange = (e) => 
  {
    let sid = streets.find(street => street.name === e.target.value)?.id;
    setStreetId(sid);
    setStreet(e.target.value);
  }
  
  return (
    <ThemeProvider theme={theme}>
      
      <Container style={{ marginTop: '2rem' }}>
        <div style={{ 
          padding: '2rem', 
          maxWidth: '75%', 
          marginLeft: '20%',  
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '1rem',
        }}>
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
              src={avatarURL}
              variant="square"
              style={{ width: 150, height: 150, cursor: "pointer" }}
            >
              {!avatarURL && <Add style={{ fontSize: 70 }} />}
            </Avatar>
          </label>
          <label htmlFor="logo-upload">
            <Button 
              component="span" 
              variant="contained" 
              color="primary" 
              style={{ marginTop: '1rem' }}
            >
              Edit Facility Logo
            </Button>
          </label>
          <TextField 
            variant="outlined" 
            value={facilityName} 
            onChange={(e) => setFacilityName(e.target.value)}
            label="Facility Name"
            fullWidth
          />
          <TextField 
            variant="outlined" 
            value={phone} 
            onChange={(e) => {
              const input = e.target.value;
              const regex = /^[0-9\b]+$/; // Yalnızca sayılar ve geri silme (backspace) tuşu kabul edilir
              if (input === '' || regex.test(input)) {
                setPhone(input);
              }
            }}
            label="Phone"
            fullWidth
          />

          <Grid container spacing={1} justifyContent="space-between" style={{ marginTop: '1rem' }}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="province-select-label">Province</InputLabel>
                <Select
                  labelId="province-select-label"
                  value={province}
                  onChange={handleProvinceChange}
                  input={<GreenOutlinedInput label="Province" />}
                >
                  {provinces.map((p) => (
                    <MenuItem value={p.name} key={p.id}>
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
                  onChange={handleDistrictChange}
                  input={<GreenOutlinedInput label="District" />}
                >
                  {districts.map((d) => (
                    <MenuItem value={d.name} key={d.id}>
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
                  onChange={handleStreetChange}
                  input={<GreenOutlinedInput label="Street" />}
                >
                  {streets.map((s) => (
                    <MenuItem value={s.name} key={s.id}>
                      {s.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button 
            variant="contained" 
            color="primary"
            fullWidth
            style={{ marginTop: '1rem' }}
            onClick={handleCreateTeam}
          >
            ADD FACILITY
          </Button>
          </div>
      </Container>
    </ThemeProvider>
  );
};

export default About;
