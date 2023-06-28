import React, { useEffect, useState } from 'react';
import {
  Box, TextField, Avatar, Typography, Grid,
  Select, MenuItem, InputLabel, FormControl, Button, createTheme, ThemeProvider
} from '@mui/material';
import "./NewPost.css"
import { useNavigate } from 'react-router-dom';

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

const NewPost = (props) => {

  const navigate = useNavigate();

  const {userId, setNewPost, setPostAdded} = props;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [branch, setBranch] = useState("");
  const [province, setProvince] = useState("");
  const [provinceId, setProvinceId] = useState(0);
  const [district, setDistrict] = useState("");
  const [districtId, setDistrictId] = useState(0);
  const [street, setStreet] = useState("");
  const [streetId, setStreetId] = useState(0);

  const [branches, setBranches] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [streets, setStreets] = useState([]);

 
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
  }, [])

  useEffect(() => {
    fetch("https://sporganize.azurewebsites.net/provinces").
    then((res) =>
      res.json()).
    then((result) => {
      setProvinces(result);
    },
    (error) => {
      console.log(error);
    })
  }, [])

  useEffect(() => {
    fetch("https://sporganize.azurewebsites.net/districts/"+provinceId).
    then((res) =>
      res.json()).
    then((result) => {
      setDistricts(result);
    },
    (error) => {
      console.log(error);
    });
  }, [provinceId])

  useEffect(() => {
    fetch("https://sporganize.azurewebsites.net/streets/"+districtId).
    then((res) =>
      res.json()).
    then((result) => {
      setStreets(result);
    },
    (error) => {
      console.log(error);
    });
  }, [districtId])

  const handleProvinceChange = (e) => {

    let pid = provinces.find(province => province.name === e.target.value)?.id;
    setProvinceId(pid);
    setProvince(e.target.value);
  };

  const handleDistrictChange = (e) => {

    let did = districts.find(district => district.name === e.target.value)?.id;
    setDistrictId(did);
    setDistrict(e.target.value);
  };

  const handleStreetChange = (e) => {

    let sid = streets.find(street => street.name === e.target.value)?.id;
    setStreetId(sid);
    setStreet(e.target.value);
  }

  const handleCancel= (e) => {
    e.preventDefault()
    setNewPost(false)
  }

  const handleSaveChanges = (e) => {
    e.preventDefault();
    fetch("https://sporganize.azurewebsites.net/appointments",
    {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body : JSON.stringify({
        title : title,
        description : desc,
        branch : branch,
        streetId : streetId,
        userId : userId
      }),    
    })
    .then((res) => {
      res.json();
      alert("the post added successfully!");
      setPostAdded(true);
    })
    .catch((err) => console.log(err))
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
                  {branches.map((b) => (
                    <MenuItem value={b}>{b}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="province-label">Province</InputLabel>
                <Select labelId="province-label" id="province-select" value={province} onChange={handleProvinceChange} >
                  {provinces.map((p) => (
                    <MenuItem key={p.id} value={p.name} >{p.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="district-label">District</InputLabel>
                <Select labelId="district-label" id="district-select" value={district} onChange={handleDistrictChange} disabled={!province}>
                  {districts.map((d) => (
                    <MenuItem key={d.id} value={d.name}>{d.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="street-label">Street</InputLabel>
                <Select labelId="street-label" id="street-select" value={street} onChange={handleStreetChange} disabled={!district}>
                  {streets.map((s) => (
                    <MenuItem key={s.id} value={s.name}>{s.name}</MenuItem>
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