import "./DisplayReservations.css"

const DisplayReservations = ({ facility, setSeeReservations }) => {

  const testRes = {
    user: {
      firstName: "Mahmut",
      lastName: "Tuncer",
      username: "asd@gmail.com",
      phone: "(123) 456 78 90",
      gender: "MALE",
    },
    branch: "Football",
    date: "11.11.1111",
    startHour: 12,
    endHour: 16,
    price: 250
  }
  const reservations = [testRes, testRes, testRes, testRes, testRes, testRes]

  const handleBackButton = () => {
    setSeeReservations(false)
  }

  const handleCancelReservation = () => {

  }

  return (
    <div className="display-reservation-page">
      <button onClick={handleBackButton} className="facility-back-button">Back</button>
      <div className="facility-card">
        <div className="facility-card-column">
          <div className="facility-name"> {facility.name} </div>
          <div className="facility-phone"> {facility.phone} </div>
          <div className="facility-address"> {facility.location.street} {facility.location.district}/{facility.location.province} </div>
        </div>
        <div className="facility-card-column">
          <div className="facility-branches">
            {facility.branches.map(branch => (<div className="facility-branch">{branch}</div>))}
          </div>
          <div className="facility-price"> {facility.price} TL/Hour </div>
        </div>
        <div className="facility-card-img-column">
          <img className="facility-card-img" src={facility.picture} alt="facility"></img> 
        </div>
      </div>

      <div className="reservation-list">
        {reservations.map(reservation =>
          <div className="single-reservation">
            <div className="reservation-user-info">
              <div className="reservation-user-name">
                {reservation.user.firstName} {reservation.user.lastName}
              </div>
              <div className="reservation-user-detail">
                <div className="reservation-username">
                  {reservation.user.username}
                </div>
                <div className="reservation-user-phone">
                  {reservation.user.phone}
                </div>
                <div className="reservation-user-gender">
                  {reservation.user.gender}
                </div>
              </div>
            </div>

            <div className="reservation-facility-info">
              <div className="reservation-branch-name">
                {reservation.branch}
              </div>
              <div className="reservation-date">
                {reservation.date}
              </div>
              <div className="reservation-hours">
                <div>Hours</div>
                {reservation.startHour} - {reservation.endHour}
              </div>
              <div className="reservation-price">
                {reservation.price} TL
              </div>
            </div>
            <div className="cancel-button-container" onClick={handleCancelReservation}>
              <button className="cancel-reservation-button">
                Cancel
              </button>
            </div>
          </div>
          )
        }

        
      </div>
    </div>
  )
}

export default DisplayReservations;