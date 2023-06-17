import './Facility.css'
import FacilityCard from './FacilityCard'

function FacilityList({ allFacilities }) {

  return (
    <div className="facility-list">
      {allFacilities.map(singleFacility => <FacilityCard facility={singleFacility}/>)}
    </div>
  )
}

export default FacilityList;