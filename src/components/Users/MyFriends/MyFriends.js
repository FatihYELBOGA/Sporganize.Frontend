import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import FriendCard from './FriendCard';

    function MyFriends(props){
      const { userId } = props;
      const [friends, setFriends] = useState([]);
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
    
      const getTeams = () =>{
        fetch("https://sporganize.azurewebsites.net/users/friends/" + userId)
          .then((res) => {
            if (res.status === 204) {
              // Handle 204 No Content response
              return Promise.resolve(null);
            } else {
              return res.json();
            }
          })
          .then(
            (result) => {
              setIsLoaded(true);
              if (result) {
                setFriends(result); 
              }
            },
            (error) => {
              console.log(error);
              setIsLoaded(true);
              setError(error);
            }
          );
        };
    
      useEffect(() => {
        getTeams() // Log the updated value of teams
      }, [userId]);
    
      if (error) {
        return <div style={{ marginLeft: "50%" }}>Error!..</div>;
      } else if (!isLoaded) {
        return (
          <div
            style={{
              marginTop: "30%",
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </div>
        );
      } else if (friends.length === 0) {
        return <div>No teams found.</div>;
      } else {
        return (
          <div style={{ display: "flex", marginLeft: "30%", marginTop: 50 }}>
            {friends.map((friend) => (
              <FriendCard
                key={friend.id} // Add a unique key for each team
                username={friend.username}
                phone={friend.phone}
                firstName={friend.firstName}
                lastName={friend.lastName}
              />
            ))}
          </div>
        );
      }
    };
   

export default MyFriends;