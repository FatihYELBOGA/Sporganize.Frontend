import './Facility.css'

function FacilityCard({ facility }) {

  const handleMakeReservation = () => {
    
  }

  return (
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
        <button className="facility-reservation-button" onClick={handleMakeReservation}>Make Reservation</button>
      </div>
      <div className="facility-card-img-column">
        <img className="facility-card-img" src={facility.picture} alt="facility"></img> 
      </div>
    </div>
  )
}

export default FacilityCard;