import { useState } from 'react';
import './Appointment.css'
import checkIcon from '../../../pictures/checkIcon.svg'

function AppointmentCard ({ appointment, displayUsers }) {
  
  const [userDetails, setUserDetails] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  const handleUserDetails = () => {
    setUserDetails(!userDetails);
  };

  const handleRequest = (e) => {
    e.preventDefault();
    setClicked(true);
  }

  return (
    <div className="appointment-card">
      
      <div className='appointment-user-info' onClick={handleUserDetails}>
        <div className="appointment-user-username">{appointment.user.username}</div>
        <img src={appointment.userPicture} className="appointment-user-pic" alt='user profile'></img>
      </div>

      { userDetails ? 
      <div className="appointment-user-details">
          <div className="appointment-user-phone">{appointment.user.phone}</div>
          <div className="appointment-user-gender">{appointment.user.gender}</div>
      </div> : <div />
      }

      <div className="appointment-title">{appointment.title}</div>

      <div className="appointment-desc">{appointment.description}</div>

      <div className="appointment-row">
        <div className="appointment-location">{appointment.location.street}, {appointment.location.district} / {appointment.location.province}</div>
        <div className="appointment-branch">{appointment.branch}</div>
      </div>

      <div className="appointment-row">
        {displayUsers ? 
        <details className="appointment-accepted-users">
          <summary>Requests</summary>
          {appointment.acceptedUsers.map((acceptedUser) => (
            <div className="appointment-accepted-user">
              <div className="appointment-accepted-user-username">{acceptedUser.acceptedUser.username}</div>
              <div className="appointment-accepted-user-email">{acceptedUser.acceptedUseremail}</div>
              <div className="appointment-accepted-user-phone">{acceptedUser.acceptedUser.phone}</div>
              <div className="appointment-accepted-user-gender">{acceptedUser.acceptedUser.gender}</div>
            </div>))}
        </details> : <div />}
      </div>

      { clicked ?
        <button className='appointment-send-request-img' onClick={handleRequest}>
          <img src={checkIcon} alt='check icon'></img>
        </button>
        :
        <button className='appointment-send-request' onClick={handleRequest}>
          I'm interested
        </button>
      }
    </div>
  )
}

export default AppointmentCard