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
import Tournaments from './components/Tournaments/Tournaments'
import MyTournaments from './components/MyAppointments/MyAppointments'
import MyAppointments from './components/MyAppointments/MyAppointments';

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
          <Route exact path='/profile' element = {<Profile setUserId={setUserId} setRole={setRole} />} />
          <Route exact path='/my-appointments' element = {<MyAppointments userId={userId} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
