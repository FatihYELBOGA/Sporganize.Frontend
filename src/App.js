import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Homepage/Homepage'
import Reservations from './components/Reservations/Reservations'
import Teams from './components/Teams/Teams'
import Profile from './components/Profile/Profile';
import Tournaments from './components/Tournaments/Tournaments';
import MyPosts from './components/MyPosts/MyPosts'
import MyFriends from './components/MyFriends/MyFriends';
import MyTeams from './components/MyTeams/MyTeams';
import MyReservations from './components/MyReservations/MyReservations';
import MyTournaments from './components/MyTournaments/MyTournaments'
import MyAppointments from './components/UserAppointments/MyAppointments';
import Sidebar from './components/Sidebar/Sidebar';

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
  } else if(role === "OWNER"){
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
        <Navbar/> 
        <Routes>
          <Route exact path='/home' element = {<Home/>} />
          <Route exact path='/reservations' element = {<Reservations/>} />
          <Route exact path='/teams' element = {<Teams/>} />
          <Route exact path='/tournaments' element = {<Tournaments/>} />
          <Route exact path='/Profile' element = {<Profile setUserId={setUserId} setRole={setRole} />} />
          <Route exact path='/MyPosts' element = {<div><Sidebar/><MyPosts userId={userId} /></div>} />
          <Route exact path='/MyAppointments' element = {<div><Sidebar/><MyAppointments userId={userId} /></div>} />
          <Route exact path='/MyFriends' element = {<div><Sidebar/><MyFriends userId={userId} /></div>} />
          <Route exact path='/MyTeams' element = {<div><Sidebar/><MyTeams userId={userId} /></div> } />
          <Route exact path='/MyReservations' element = {<div><Sidebar/><MyReservations userId={userId} /></div> } />
          <Route exact path='/MyTournaments' element = {<div><Sidebar/><MyTournaments userId={userId} /></div> } />
        </Routes>
      </BrowserRouter>
      
    );
  }
}

export default App;
