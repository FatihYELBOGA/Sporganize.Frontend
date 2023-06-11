import React, { useState } from "react";
import "./Login.css";
import loginPicture from "../../pictures/login.jpg"
import { useNavigate } from "react-router-dom";

function Login (props) {

  // navigate
  const navigate = useNavigate();

  // props
  const {setUserId, setRole} = props;

  // constants
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // e-mail assigment
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // password assigment
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // click the submit button
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://sporganize.azurewebsites.net/login",
    {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body : JSON.stringify({
        username : email,
        password : password,
      }),    
    })
    .then((res) => res.json())
    .then((res) => {
      if(res.userId != null){
        setUserId(res.userId);
        setRole(res.role);
        if(res.role === "ADMIN"){

        }else if(res.role === "OWNER"){

        }
        else if(res.role === "USER"){
          navigate("/home");
        }
      } else {
        alert(res.message);
      }
    })
    .catch((err) => console.log(err))
  }

  // go to signup page
  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <div className="login-page">
      <div className="login-image-part">
        <img className="login-img" src={loginPicture} alt="three people playing basketball"></img>
      </div>
      <form onSubmit={handleSubmit} className="login-form-part">
        <div className="login-form-header">Login</div>
        <div className="login-form-group">
          <label>Username</label>
          <input value={email} onChange={handleEmailChange} placeholder="enesdemirel@sporganize.com" required/>
        </div>
        <div className="login-form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="*********" required/>
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="sign-up">Don't have an account <a href="/" onClick={handleSignUp}>Sign Up</a></div>
      </form>
    </div>
  );
};

export default Login;