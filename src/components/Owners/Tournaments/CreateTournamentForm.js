import React, { useState,useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container, Select, MenuItem, FormControl, InputLabel, TextareaAutosize } from '@material-ui/core';


const CreateTournamentForm = (props) => {
  const [tournamentName, setTournamentName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sport, setSport] = useState('');
  const [description, setDescription] = useState('');
  const [tournamentTitle, setTournamentTitle] = useState('');
  const [facilityId,setFacilityId] = useState(0);
  const [facilities,setFacilities] = useState([]);
  const [branches,setBranches] = useState([]);
  const [facility,setFacility] = useState("");
  const {userId} = props;

  useEffect(() => {

      fetch("http://yelbogafatih-001-site1.btempurl.com/users/sport-facilitiles/"+userId)
        .then((res) => res.json())
        .then((result) => {
          setFacilities(result);
        })
        .catch((error) => console.log(error));
  
    }, []);

  useEffect(() => {
    fetch("http://yelbogafatih-001-site1.btempurl.com/branches")
      .then((res) => res.json())
      .then((result) => setBranches(result))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let startCompareDate = new Date(startDate).getTime()
    let FinishCompareDate = new Date(endDate).getTime()

    if(startCompareDate>FinishCompareDate){
      alert("Start date cannot be greater than end date!")
    }
    else{
    fetch("http://yelbogafatih-001-site1.btempurl.com/tournaments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: tournamentName,
        title: tournamentTitle,
        description: description,
        startingDate: startDate,
        endingDate: endDate,
        sportFacilityId: facilityId,
        
      }),
    })
        .then((res) => res.json())
        .then((result)=>{
          console.log(result);
          alert("Success")
        })
        .catch((err) => console.log(err));
        setTournamentName('');
        setTournamentTitle('');
        setSport('');
        setStartDate('');
        setEndDate('');
        setDescription('');
  }
  };

  return (
    <Container  style={{backgroundColor:"#ffffff",marginTop:50,paddingTop:25,paddingBottom:30,borderRadius:10,width:"50%"}}>
      <Typography variant="h4" align="center" gutterBottom>
        Create Tournament
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Tournament Name"
              fullWidth
              required
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tournament Title"
              fullWidth
              required
              value={tournamentTitle}
              onChange={(e) => setTournamentTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              rowsMin={4}
              required
              placeholder="Tournament Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: '100%', resize: 'vertical',backgroundColor:"#ffffff", marginTop:10 }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl style={{ borderColor: "red", "& .MuiInputLabel-root": { color: "red" } }} fullWidth>
              <InputLabel>Sport</InputLabel>
              <Select
                value={sport}
                required
                onChange={(e) => setSport(e.target.value)}
              >
                {branches.map((branch)=>(
                  <MenuItem value={branch}>{branch}</MenuItem>
                ))}
             
              </Select>
            </FormControl>
            
          </Grid>
          <Grid item xs={12}>
            <FormControl style={{ borderColor: "red", "& .MuiInputLabel-root": { color: "red" } }} fullWidth>
              <InputLabel>Facility</InputLabel>
              <Select
                value={facility}
                required
                onChange={(e) => setFacility(e.target.value)}
              >
                {facilities.map((facility)=>(
                   <MenuItem value={facility.name} onClick={(e) =>setFacilityId(facility.id)} >{facility.name}</MenuItem>
                ))}
               
                
              </Select>
            </FormControl>
            
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Start Date"
              type="date"
              fullWidth
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              
              InputLabelProps={{
                shrink: true,                
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="End Date"
              type="date"
              fullWidth
              required
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
             
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
            style={{backgroundColor:"#1E7B38",marginTop:15}}  
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth>
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateTournamentForm;
