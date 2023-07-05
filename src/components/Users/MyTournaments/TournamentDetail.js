import TournamentTable from "../../Owners/Tournaments/TournamentTable";
import { useParams } from "react-router-dom";
import TournamentNavbar from "./TournamentNavbar";

function TournamentDetail(){
    const {id} = useParams();
    console.log(id)
    return(
        <div>
            <TournamentNavbar></TournamentNavbar>
        <TournamentTable tournamentId={id}/>
        </div>
        
    )
}
export default TournamentDetail;