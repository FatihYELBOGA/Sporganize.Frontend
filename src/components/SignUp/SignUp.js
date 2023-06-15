import React, { useState } from "react";
import "./SignUp.css";
import signUpPicture from "../../pictures/signUp.jpg"
import { useNavigate } from "react-router-dom";

function SignUp () {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://sporganize.azurewebsites.net/register",
    {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body : JSON.stringify({
        firstName : firstName,
        lastName : lastName,
        username : username,
        password : password
      }),    
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      navigate("/");
    })
    .catch((err) => console.log(err))
  }

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/")
  }

  return (
    <div className="sign-up-page">
      <div className="sign-up-image-part">
        <img className="sign-up-img" src={signUpPicture} alt="person shooting football"></img>
      </div>
      <form onSubmit={handleSubmit} className="sign-up-form-part">
        <div className="sign-up-form-header">Sign Up</div>

        <fieldset className="sign-up-double-group">
          <div className="sign-up-form-group">
            <label>First Name</label>
            <input type="text" value={firstName} onChange={handleFirstName} placeholder="Enes" required/>
          </div>

          <div className="sign-up-form-group">
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={handleLastName} placeholder="Demirel" required/>
          </div>
        </fieldset>

        <fieldset className="sign-up-double-group">
          <div className="sign-up-form-group">
            <label>Username</label>
            <input type="text" value={username} onChange={handleUsername} placeholder="demirelenes" required/>
          </div>

          <div className="sign-up-form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={handlePassword} placeholder="*********" required/>
          </div>
        </fieldset>
        
        <button type="submit" className="sign-up-button">Create Account</button>
        <div className="login">Already A Member? <a href="/" onClick={handleLogin}>Login</a></div>
      </form>
    </div>
  );
};

export default SignUp;