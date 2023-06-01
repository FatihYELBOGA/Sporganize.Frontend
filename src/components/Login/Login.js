import React, { useState } from "react";
import "./Login.css";
import loginPicture from "../../pictures/login.jpg"

function Login ({ displaySignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleSignUp = (e) => {
    displaySignUp()
  }

  return (
    <div className="login-page">
      <div className="login-image-part">
        <img className="login-img" src={loginPicture} alt="three people playing basketball"></img>
      </div>
      <form onSubmit={handleSubmit} className="login-form-part">
        <div className="login-form-header">Login</div>
        <div className="login-form-group">
          <label>E-Mail</label>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="enesdemirel@sporganize.com" required/>
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