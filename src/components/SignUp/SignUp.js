import React, { useState } from "react";
import "./SignUp.css";
import signUpPicture from "../../pictures/signUp.jpg"

function SignUp () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
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

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleLogin = (e) => {}

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
            <label>E-Mail</label>
            <input type="email" value={email} onChange={handleEmail} placeholder="enesdemirel@sporganize.com" required/>
          </div>
        </fieldset>

        <fieldset className="sign-up-double-group">
          <div className="sign-up-form-group">
            <label>Phone Number</label>
            <input type="tel" value={phone} onChange={handlePhone} placeholder="(123) 456 78 90" required/>
          </div>

          <div className="sign-up-form-group">
            <label>Birth Date</label>
            <input type="date" value={date} onChange={handleDate} required/>
          </div>
        </fieldset>

        <fieldset className="sign-up-double-group">
          <div className="sign-up-form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={handlePassword} placeholder="*********" required/>
          </div>

          <div className="sign-up-form-group">
            <label>Gender</label>
            <div className="sign-up-gender-form">
              <label htmlFor="male">MALE</label>
              <input type="radio" id="male" name="gender" value="MALE" required/>
              <label htmlFor="female">FEMALE</label>
              <input type="radio" id="female" name="gender" value="FEMALE" required/>
            </div>
          </div>
        </fieldset>
        
        <button type="submit" className="sign-up-button">Create Account</button>
        <div className="login">Already A Member? <a href="/" onClick={handleLogin}>Login</a></div>
      </form>
    </div>
  );
};

export default SignUp;