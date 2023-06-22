import { useState } from 'react'
import './Facility.css'
import upArrow from '../../pictures/up-arrow.svg'

function FacilityCard({ facility }) {
  const [makeReservation, setMakeReservation] = useState(false);

  const totalPrice = 0;

  const handleMakeReservation = (e) => {
    e.preventDefault()
    setMakeReservation(!makeReservation);
  }

  if (!makeReservation) {
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
  else {
    return (
      <div className='full-facility'>
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
        <div className='facility-card'>
          <div className='facility-card-column-two'>
            <img src={upArrow} onClick={handleMakeReservation} alt='up arrow'></img>
            <div>Date</div>
            <input className="facility-date-input" type='date'></input>
          </div>
          <div className='facility-card-column-two'>
            <div>Start Hour</div>
            <input className='facility-time-input' type='time'></input>
            <div>End Hour</div>
            <input className='facility-time-input' type='time'></input>
          </div>
          <div className='facility-card-column-two'>
            <div>Total | {totalPrice} TL</div>
            <button className="facility-reservation-button">Go to Payment Step</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FacilityCard;