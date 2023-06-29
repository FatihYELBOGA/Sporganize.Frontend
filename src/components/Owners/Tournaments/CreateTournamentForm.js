import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, Select, MenuItem, FormControl, InputLabel, TextareaAutosize } from '@material-ui/core';


const CreateTournamentForm = () => {
  const [tournamentName, setTournamentName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sport, setSport] = useState('');
  const [description, setDescription] = useState('');
  const [tournamentTitle, setTournamentTitle] = useState('');

  

  const handleSubmit = (event) => {
    event.preventDefault();
    let startCompareDate = new Date(startDate).getTime()
    let FinishCompareDate = new Date(endDate).getTime()

    if(startCompareDate>FinishCompareDate){
      alert("Start date cannot be greater than end date!")
    }
    else{
    fetch("https://sporganize.azurewebsites.net/tournaments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: tournamentName,
        title: tournamentTitle,
        description: description,
        startDate: startDate,
        endDate: endDate,
        
      }),
    })
      .then((res) => res.json())
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
    <Container  style={{backgroundColor:"#ededed",marginTop:50,paddingTop:25,paddingBottom:30,borderRadius:10,width:"50%"}}>
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
              style={{ width: '100%', resize: 'vertical',backgroundColor:"#ededed", marginTop:10 }}
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
                <MenuItem value="football">Football</MenuItem>
                <MenuItem value="basketball">Basketball</MenuItem>
                <MenuItem value="tennis">Tennis</MenuItem>
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
            style={{backgroundColor:"#1E7B38"}}  
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
