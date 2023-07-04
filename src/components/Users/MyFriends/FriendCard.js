import React, {useState} from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from '@mui/material';


function FriendCard(props) {
  const {username,phone,firstName,lastName } = props
  const[isDetail,setIsDetail] = useState(false);
  const handleSeeDetails = () =>{
    setIsDetail(!isDetail);
  }
  return (
    <Grid item xs={12} sm={6} md={4} sx={{minWidth:300}} >
      <Card className="card" sx={{ backgroundColor: 'rgb(37, 37, 37)' ,color:"white"}}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography className="card-title">{firstName +" "+lastName}</Typography>
            <CardMedia
              component="img"
  
              sx={{ maxHeight: 140, objectFit: 'contain' }}
            />
          </Box>
          <Box mt={2}><Button variant="contained" style={{backgroundColor:"green",marginLeft:"25%"}}  onClick={() => handleSeeDetails()}sx={{color: 'whitesmoke'}}>
                        {isDetail ? "Hide Details" : "See Details"}</Button>
                    </Box>
                    {isDetail && (<Box display="flex" flexDirection="column" alignItems="flex-start" marginTop={2}>
                    <Typography variant="body2" sx={{ color: 'whitesmoke' }}>{phone}</Typography>
                        <Typography variant="body2" sx={{ color: 'whitesmoke' }}>{username}</Typography>
                        
                </Box> )}
            
        </CardContent>
        
      </Card>
    </Grid>
  );
}

export default FriendCard;