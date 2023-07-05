import React from "react";
import TournamentNavbar from "./TournamentNavbar";
import TournamentTable from "./TournamentTable";
import { useParams } from "react-router-dom";


function Tournament(){
    const {id} = useParams();
 
    return (
       
      <div style={{ display: "block" }}>
        <TournamentNavbar type="leagueTable" tournamentId={id}/>
        <TournamentTable tournamentId={id}/>
       
      </div>
    
    );
}

export default Tournament;