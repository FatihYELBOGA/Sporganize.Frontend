import React, { useState } from 'react';
import {
  Box, TextField, Avatar, Typography, Grid,
  Select, MenuItem, InputLabel, FormControl, Button, createTheme, ThemeProvider
} from '@mui/material';
import "./NewPost.css"

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

const branchData = [
  "Football",
  "Basketball",
  "Tennis"
]

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ffffff',
    },
    cancel: {
      main: 'tomato',
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

const NewPost = ({ setNewPost }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [branch, setBranch] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const branches = branchData;
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

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
  }

  const handleCancel= (e) => {
    e.preventDefault()
    setNewPost(false)
  }

  const handleSaveChanges = () => {

  };

  return (
    <div className='new-post'>
      <div className='new-post-header'>Create a new post</div>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '75%'}}>
          <Grid container spacing={2} sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={15}>
              <TextField label="Title" placeholder="Enter the title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth/>
            </Grid>
            <Grid item xs={15}>
              <TextField label="Description" placeholder="Enter the description" value={desc} onChange={(e) => setDesc(e.target.value)} fullWidth/>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="branch-label">Branch</InputLabel>
                <Select labelId="branch-label" id="branch-select" value={branch} onChange={(e) => setBranch(e.target.value)}>
                  {branches.map((br, index) => (
                    <MenuItem key={index} value={br}>{br}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="province-label">Province</InputLabel>
                <Select labelId="province-label" id="province-select" value={province} onChange={handleProvinceChange}>
                  {provinces.map((prov, index) => (
                    <MenuItem key={index} value={prov}>{prov}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="district-label">District</InputLabel>
                <Select labelId="district-label" id="district-select" value={district} onChange={handleDistrictChange} disabled={!province}>
                  {districts.map((dist, index) => (
                    <MenuItem key={index} value={dist}>{dist}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button variant="contained" color="cancel" onClick={handleCancel}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleSaveChanges}>Post</Button>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default NewPost;