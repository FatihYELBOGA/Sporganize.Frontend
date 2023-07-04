import { useEffect, useState } from 'react';
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
  
  
  const convertBase64ToFile = (base64String, fileName) => {
    const contentType = 'image/*'; // Update the content type as per your file type
    const sliceSize = 1024;
    const byteCharacters = atob(base64String);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    const f = new File([blob], fileName, { type: contentType });
    const fileURL = URL.createObjectURL(f);
    setAvatarURL(fileURL);
  };
  
  useEffect(() => {
    const content = appointment.user.profile == null ? null : appointment.user.profile.content;
    const fileName = appointment.user.profile == null ? null : appointment.user.profile.name;
    convertBase64ToFile(content, fileName);
  }, [])

  const [avatarURL, setAvatarURL] = useState("");

  return (
    <div className="appointment-card">
      
      <div className='appointment-user-info' onClick={handleUserDetails}>
        <div className="appointment-user-username">{appointment.user.username}</div>
        <img src={avatarURL} class="appointment-user-pic" alt="user profile" />
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