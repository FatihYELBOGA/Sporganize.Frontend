import React, { useState, useEffect } from "react";
import {Button,CardMedia,Avatar,Card,CardContent,Typography,Grid,Box,TextField,InputAdornment,IconButton,Chip} from '@mui/material';




function FacilityCard(props) 
{ 
  const {facility} = props;
  const [isDetails,setIsDetails] = useState(false);
 

  // profile photo
  const [avatarURL, setAvatarURL] = useState(null);
 
 
   // convert the byte[] to file object
   const convertBase64ToFile = (base64String, fileName) => 
   {
     const contentType = 'image/*'; // Update the content type as per your file type
     const sliceSize = 1024;
     const byteCharacters = atob(base64String);
     const byteArrays = [];
 
     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
       const slice = byteCharacters.slice(offset, offset + sliceSize);
       const byteNumbers = new Array(slice.length);
 
       for (let i = 0; i < slice.length; i++) {
         byteNumbers[i] = slice.charCodeAt(i);
       }
 
       const byteArray = new Uint8Array(byteNumbers);
       byteArrays.push(byteArray);
     }
 
     const blob = new Blob(byteArrays, { type: contentType });
     const f = new File([blob], fileName, { type: contentType });
     const fileURL = URL.createObjectURL(f);
     setAvatarURL(fileURL);
   };


  useEffect(()=>{
    if(facility.profile !== null){
    convertBase64ToFile(facility.profile.content,facility.profile.name)
    }
  },[])

  return (
        
            <div  key={facility.id} style={{marginTop:5,marginLeft:5,width:"40%",marginLeft:"10%",marginBottom:40}}>
              <Card  sx={{ backgroundColor: '#ededed',width:"100%",padding:2,paddingX:3 }}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
        
                  <Typography variant="h5"  sx={{ color: 'black',marginBottom:2}}>{facility.name}</Typography>
                    <CardMedia sx={{ width: 300, height: 200}} image={avatarURL} />

                    <Typography variant="body2" sx={{ color: 'black',marginTop:1  }}>Phone </Typography>
                    <Typography variant="body2" sx={{ color: 'black',marginBottom:1  }}>{facility.phone}</Typography>
                    <Box mt={2}><Button style={{backgroundColor:"green"}} variant="contained"onClick={() => setIsDetails(!isDetails)}sx={{color: 'whitesmoke'}}>
                        {isDetails ? "Hide Details" : "See Details"}</Button>
                    </Box>
                    {isDetails && (<Box display="flex" flexDirection="column" alignItems="flex-start" marginTop={2}>
                        <Typography variant="body2" sx={{ color: 'black',marginBottom:1  }}></Typography>
                        <Typography variant="body2" sx={{ color: 'black'}}>Owner</Typography>
                        <Typography variant="body2" sx={{ color: 'black',marginBottom:1  }}>{facility.owner.firstName+" "+facility.owner.lastName}</Typography>
                        <Typography variant="body2" sx={{ color: 'black' }}>Location </Typography> 
                        <Typography variant="body2" sx={{ color: 'black' }}>{facility.location.street+","+facility.location.district+" "+facility.location.province} </Typography> </Box> )}
                  </Box>
                  
                </CardContent>
              </Card>
            </div>
    


  );
}

export default FacilityCard;