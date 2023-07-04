import { useEffect,useState } from "react";
import TournamentCard from "./TournamentCard";
import TournamentSidebar from "./TournamentsSidebar";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function MyTournaments(props){
    const {userId} = props;
    const [tournamentList,setTournamentList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() =>{
        fetch("http://yelbogafatih-001-site1.btempurl.com/tournaments/"+1)
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
                setTournamentList(result);
            },
            (error) => {
                console.log(error);
                setIsLoaded(true);
                setError(error);
            }
        )

    },[userId])
    if(error){
        return <div>Error!..</div>
    } else if(!isLoaded){
        return (
            <Box sx={{ marginTop:"30%",display: 'flex' ,textAlign: 'center',justifyContent:'center'}}>
                <CircularProgress />
            </Box>
        );
    } else{

    return(
        <div style={{display:"flex"}}>
            <TournamentSidebar></TournamentSidebar>
            
            <TournamentCard/>
            
        </div>
    )
    }

}
export default MyTournaments;
/*{tournamentList.map((tournament) =>{
                <TournamentCard 
                    id={tournament.id} 
                    name={tournament.name} 
                    title={tournament.title} 
                    description={tournament.description} 
                    startingDate={tournament.startingDate} 
                    endingDate={tournament.endingDate} 
                    branch={tournament.branch}/>
            })}*/