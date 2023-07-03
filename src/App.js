import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// for general interfaces
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'

// the user interfaces
import Homepage from './components/Users/Homepage/homepage'
import Reservations from './components/Users/Reservations/Reservations'
import Teams from './components/Users/Teams/Teams'
import Profile from './components/Users/Profile/profile'
import Tournaments from './components/Users/Tournaments/Tournaments';
import MyPosts from './components/Users/MyPosts/MyPosts'
import MyFriends from './components/Users/MyFriends/MyFriends';
import MyReservations from './components/Users/MyReservations/MyReservations';
import MyTournaments from './components/Users/MyTournaments/MyTournaments'
import MyAppointments from './components/Users/MyAppointments/MyAppointments';
import Sidebar from './components/Users/Sidebar/Sidebar';
import InviteMember from './components/Users/InviteMember/InviteMember';
import IncomingInvitations from './components/Users/IncomingInvitations/IncomingInvitations';

// the owner interfaces
import OwnerTournaments from './components/Owners/Tournaments/Tournaments';
import OwnerMyTournaments from './components/Owners/Tournaments/MyTournaments'
import OwnerReservation from './components/Owners/Reservations/Reservations';
import About from './components/Owners/About/About';
import OwnerTournament from './components/Owners/Tournaments/Tournament';
import OwnerTournamentSaveMatch from './components/Owners/Tournaments/TournamentSaveMatch';

function App() {

  const [userId, setUserId] = useState(0);
  const [role, setRole] = useState(null);

  if (userId === 0) {
    return (
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element = { <Login setUserId={setUserId} setRole={setRole} /> } />
            <Route exact path='/signup' element = { <SignUp/> } />
          </Routes>
      </BrowserRouter>
    );
  }

  if(role === "ADMIN"){
    return (
      <BrowserRouter> 
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>
    );
  } else if(role === "USER"){
    return (
      <BrowserRouter>
        <Navbar NavRole={role} /> 
        <Routes>
          <Route exact path='/Home' element = {<Homepage userId={userId} />} />
          <Route exact path='/reservations' element = {<Reservations/>} />
          <Route exact path='/teams' element = {<InviteMember userId={userId}/>} />
          <Route exact path='/create-team' element = { <Teams userId={userId} />} />
          <Route exact path='/incoming-invitations' element = {<IncomingInvitations/>} />
          <Route exact path='/tournaments' element = {<Tournaments/>} />
          <Route exact path='/profile' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><Profile userId={userId} /></div>} />
          <Route exact path='/my-posts' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyPosts userId={userId} /></div>} />
          <Route exact path='/my-appointments' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyAppointments userId={userId} /></div>} />
          <Route exact path='/my-friends' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyFriends userId={userId} /></div>} />
          <Route exact path='/my-reservations' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyReservations userId={userId} /></div> } />
          <Route exact path='/my-tournaments' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyTournaments userId={userId} /></div> } />
        </Routes>
      </BrowserRouter>
      
    );
  } else if(role === "OWNER"){
    return (
      <BrowserRouter> 
        <Navbar NavRole={role} /> 
        <Routes>
          <Route exact path='/owner-tournaments' element = {<OwnerTournaments />} />
          <Route exact path='/owner-reservations' element = {<OwnerReservation />} />
          <Route exact path='/about' element = {<About />} />
          <Route exact path='/OwnerTournaments' element = {<OwnerTournaments userId={userId} />} />
          <Route exact path='/OwnerMyTournaments' element = {<OwnerMyTournaments userId={userId}/>} />
          <Route exact path='/OwnerTournament/:id' element = {<OwnerTournament userId={userId}/>}/>
           <Route exact path='/OwnerTournament/:id/saveMatches' element = {<OwnerTournamentSaveMatch userId={userId}/>}/>
          <Route exact path='/OwnerReservations' element = {<OwnerReservation userId={userId}/>} />
          <Route exact path='/About' element = {<About userId={userId} />} />

          <Route exact path='/owner-tournaments' element = {<OwnerTournaments />} />
          <Route exact path='/owner-reservations' element = {<OwnerReservation />} />
          <Route exact path='/about' element = {<About />} />

          <Route exact path='/owner-tournament' element = {<OwnerTournaments userId={userId} />} />
          <Route exact path='/owner-mytournaments' element = {<OwnerMyTournaments userId={userId}/>} />
          <Route exact path='/owner-tournament/:id' element = {<OwnerTournament userId={userId}/>}/>
           <Route exact path='/owner-tournament/:id/saveMatches' element = {<OwnerTournamentSaveMatch userId={userId}/>}/>
          <Route exact path='/owner-reservations' element = {<OwnerReservation userId={userId}/>} />
          <Route exact path='/about' element = {<About userId={userId} />} />


        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;