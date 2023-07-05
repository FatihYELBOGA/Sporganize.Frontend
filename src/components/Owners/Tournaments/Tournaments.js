import React from "react";
import TournamentSidebar from "./TournamentsSidebar";
import CreateTournamentForm from "./CreateTournamentForm";


function Tournament(props){
    const {userId} = props
    console.log(userId)
    return (
       
      <div style={{ display: "flex" }}>
        <TournamentSidebar/>
        <CreateTournamentForm userId={userId}/>
       
      </div>
    
    );
}

export default Tournament;