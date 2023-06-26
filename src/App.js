@@ -4,73 +4,72 @@
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
<<<<<<< Updated upstream
=======
import Home from './components/Homepage/Homepage'
>>>>>>> Stashed changes
import Homepage from './components/Homepage/Homepage'
import Reservations from './components/Reservations/Reservations'
import Teams from './components/Teams/Teams'
import Profile from './components/Profile/Profile'
import Tournaments from './components/Tournaments/Tournaments';
import MyPosts from './components/MyPosts/MyPosts'
import MyFriends from './components/MyFriends/MyFriends';
import MyTeams from './components/MyTeams/MyTeams';
import MyReservations from './components/MyReservations/MyReservations';
import MyTournaments from './components/MyTournaments/MyTournaments'
import MyAppointments from './components/MyAppointments/MyAppointments';
import Sidebar from './components/Sidebar/Sidebar';
import JoinTeam from './components/JoinTeam/JoinTeam';
import TeamsSidebar from './components/TeamsSidebar/TeamsSidebar';

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
<<<<<<< Updated upstream
=======
          <Route exact path='/home' element = {<Home/>} />
>>>>>>> Stashed changes
          <Route exact path='/home' element = {<Homepage/>} />
          <Route exact path='/reservations' element = {<Reservations/>} />
          <Route exact path='/Teams' element = { <Teams/>} />
          <Route exact path='/JoinTeam' element = {<JoinTeam/>} />
          <Route exact path='/tournaments' element = {<Tournaments/>} />
          <Route exact path='/Profile' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><Profile /></div>} />
          <Route exact path='/MyPosts' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyPosts userId={userId} /></div>} />
          <Route exact path='/MyAppointments' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyAppointments userId={userId} /></div>} />
          <Route exact path='/MyFriends' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyFriends userId={userId} /></div>} />
          <Route exact path='/MyTeams' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyTeams userId={userId} /></div> } />
          <Route exact path='/MyReservations' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyReservations userId={userId} /></div> } />
          <Route exact path='/MyTournaments' element = {<div><Sidebar setUserId={setUserId} setRole={setRole}/><MyTournaments userId={userId} /></div> } />
        </Routes>
      </BrowserRouter>
      
    );
  }
}

export default App;