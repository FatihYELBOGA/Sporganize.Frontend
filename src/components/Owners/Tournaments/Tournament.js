import React from "react";
import TournamentNavbar from "./TournamentNavbar";
import TournamentTable from "./TournamentTable";


function Tournament(){

    return (
       
      <div style={{ display: "block" }}>
        <TournamentNavbar type="leagueTable"/>
        <TournamentTable/>
       
      </div>
    
    );
}

export default Tournament;