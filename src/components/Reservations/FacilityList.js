import './Facility.css'
import FacilityCard from './FacilityCard'

function FacilityList({ facility }) {

  const testFacility = {
    name: "Spor Salonu",
    phone: "123 456 78 90",
    location: {
      street: "Street",
      district: "District",
      province: "Province"
    },
    branch: ["Football", "Tennis"],
    price: 150,
    picture: "",
  }

  const testFacilities = [testFacility]

  return (
    <div className="facility-list">
      {testFacilities.map(singleFacility => <FacilityCard facility={singleFacility}/>)}
    </div>
  )
}

export default FacilityList;