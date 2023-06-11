import './MyAppointments.css'

function MyAppointmentsCard ({ appointment }) {

  return (
    <div className="appointment-card">
      <div className="appointment-title">{appointment.title}</div>

      <details className="appointment-user">
        <summary className="appointment-user-username">{appointment.user.username}</summary>
        <div className="appointment-user-details">
          <div className="appointment-user-email">{appointment.user.email}</div>
          <div className="appointment-user-phone">{appointment.user.phone}</div>
          <div className="appointment-user-gender">{appointment.user.gender}</div>
        </div>
      </details>

      <div className="appointment-desc">{appointment.desc}</div>

      <div className="appointment-row">
        <div className="appointment-reason">{appointment.reason}</div>
        <div className="appointment-branch">{appointment.branch}</div>
      </div>

      <div className="appointment-row">
        <details className="appointment-accepted-users">
          <summary>Accepted Users</summary>
          {appointment.acceptedUsers.map(acceptedUser => 
            <div className="appointment-accepted-user">
              <div className="appointment-accepted-user-username">{acceptedUser.username}</div>
              <div className="appointment-accepted-user-email">{acceptedUser.email}</div>
              <div className="appointment-accepted-user-phone">{acceptedUser.phone}</div>
              <div className="appointment-accepted-user-gender">{acceptedUser.gender}</div>
            </div>)}
        </details>
        <div className="appointment-location">{appointment.location.street} {appointment.location.district}/{appointment.location.province}</div>
      </div>
      
    </div>
  )
}

export default MyAppointmentsCard