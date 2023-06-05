import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);

  if (login) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Navbar />}  />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  if (signUp) {
    return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SignUp />}  />
      </Routes>
    </BrowserRouter>
  );
  }
}

export default App;
