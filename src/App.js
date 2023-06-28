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
import MyTeams from './components/Users/MyTeams/MyTeams';
import MyReservations from './components/Users/MyReservations/MyReservations';
import MyTournaments from './components/Users/MyTournaments/MyTournaments'
import MyAppointments from './components/Users/MyAppointments/MyAppointments';
import Sidebar from './components/Users/Sidebar/Sidebar';
import JoinTeam from './components/Users/JoinTeam/JoinTeam';

// the owner interfaces
import OwnerTournaments from './components/Owners/Tournaments/Tournaments';
import OwnerReservation from './components/Owners/Reservations/Reservations';
import About from './components/Owners/About/About';


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
          <Route exact path='/Reservations' element = {<Reservations/>} />
          <Route exact path='/Teams' element = { <Teams/>} />
          <Route exact path='/JoinTeam' element = {<JoinTeam/>} />
          <Route exact path='/Tournaments' element = {<Tournaments/>} />
          <Route exact path='/Profile' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><Profile userId={userId} /></div>} />
          <Route exact path='/MyPosts' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyPosts userId={userId} /></div>} />
          <Route exact path='/MyAppointments' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyAppointments userId={userId} /></div>} />
          <Route exact path='/MyFriends' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyFriends userId={userId} /></div>} />
          <Route exact path='/MyTeams' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyTeams userId={userId} /></div> } />
          <Route exact path='/MyReservations' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyReservations userId={userId} /></div> } />
          <Route exact path='/MyTournaments' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyTournaments userId={userId} /></div> } />
        </Routes>
      </BrowserRouter>
      
    );
  } else if(role === "OWNER"){
    return (
      <BrowserRouter> 
        <Navbar NavRole={role} /> 
        <Routes>
          <Route exact path='/OwnerTournaments' element = {<OwnerTournaments />} />
          <Route exact path='/OwnerReservations' element = {<OwnerReservation />} />
          <Route exact path='/About' element = {<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;