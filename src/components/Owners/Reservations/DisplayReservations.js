import "./DisplayReservations.css"

const DisplayReservations = ({ facility, setSeeReservations }) => {

  const handleBackButton = () => {
    setSeeReservations(false)
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
    </div>
  )
}

export default DisplayReservations;