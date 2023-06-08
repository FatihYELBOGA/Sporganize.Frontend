import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/profile';
import MyAppointments from "./components/UserAppointments/MyAppointments"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import MyTeams from './components/MyTeams/MyTeams';

function App() {
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);

  if (login) {
    return (
      <BrowserRouter> 
        <Navbar/>
        <div className="App">
          <Routes> 
             
             <Route path="/Sidebar" element={<Sidebar/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/MyTeams" element={<MyTeams />} />
            <Route path="/MyAppointments" element={<MyAppointments />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  
  if (signUp) {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<SignUp />}  />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
