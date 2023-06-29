import React from "react";
import TournamentSidebar from "./TournamentsSidebar";
import CreateTournamentForm from "./CreateTournamentForm";


function Tournament(){

    return (
       
      <div style={{ display: "flex" }}>
        <TournamentSidebar/>
        <CreateTournamentForm/>
       
      </div>
    
    );
}

export default Tournament;