import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Homepage/Homepage'
import Reservation from './components/Reservation/Reservation'
import Team from './components/Team/Team'
import Profile from './components/Profile/Profile';
import Tournament from './components/Tournament/Tournament'

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
          <Route exact path='/reservations' element = {<Reservation/>} />
          <Route exact path='/teams' element = {<Team/>} />
          <Route exact path='/tournaments' element = {<Tournament/>} />
          <Route exact path='/profile' element = {<Profile/>} />
        </Routes>
      </BrowserRouter>
    );
  }
  
}

export default App;
