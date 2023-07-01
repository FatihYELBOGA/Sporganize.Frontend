import "./FacilityCard.css"

const FacilityCard = ({ facility, handleDisplayReservations }) => {
  return (
    <div className="owner-facility-card">
      <img className="owner-facility-card-img" src={facility.picture} alt="facility"></img>
      <div className="owner-facility-card-name"> {facility.name} </div>
      <div className="owner-facility-card-row">
        <div className="owner-facility-card-phone"> {facility.phone} </div>
        <div className="owner-facility-card-address">
          {facility.location.street} {facility.location.district}/{facility.location.province}
        </div>
      </div>
      <div className="owner-facility-card-row">
        <div className="owner-facility-price"> {facility.price} TL/Hour </div>
        <div className="owner-facility-card-branches">
          {facility.branches.map(branch => (<div className="owner-facility-branch">{branch}</div>))}
        </div>
      </div>
      <button className="owner-facility-reservation-button" onClick={handleDisplayReservations}>See Reservations</button>
    </div>
  )
}

export default FacilityCard;