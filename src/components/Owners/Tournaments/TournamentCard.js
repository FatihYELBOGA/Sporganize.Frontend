import React from 'react';
import { Card, CardContent, Typography, Link,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const TournamentCard = () => {
    const navigate = useNavigate();
  return (
    <Card
      sx={{
        margin: 10,
        width: '450px',
        backgroundColor: '#ededed',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: 1,
            color: '#333333',
          }}
        >
          Football Tournament
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          gutterBottom
          sx={{
            fontSize: '16px',
            color: '#666666',
          }}
        >
          Tournament Type: Football
        </Typography>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 20,
            color: '#999999',
            fontSize: '14px',
          }}
        >
          <Typography variant="body2" color="textSecondary">
            Start Date: 10-10-2000
          </Typography>
          <Typography variant="body2" color="textSecondary">
            End Date: 20-5-2001
          </Typography>
        </div>
      </CardContent>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body2"
          color="green"
          sx={{
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          Active
        </Typography>
        <Link
        >
        
        <Button
          onClick={(e)=>{
            navigate("/OwnerTournament/1")
          }}
          sx={{
            color: '#1E7B38',
            fontSize: '12px',
            marginTop:0,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          See More Details
        </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default TournamentCard;

