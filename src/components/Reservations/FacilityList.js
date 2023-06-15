import './Facility.css'
import FacilityCard from './FacilityCard'

import testPicture from '../../pictures/testFacilityPicture.jpg'

function FacilityList({ facility }) {

  const testFacility = {
    name: "Spor Salonu",
    phone: "(123) 456 78 90",
    location: {
      street: "Street",
      district: "District",
      province: "Province"
    },
    branches: ["Football", "Tennis"],
    price: 150,
    picture: testPicture,
  }

  const testFacilities = [testFacility, testFacility, testFacility]

  return (
    <div className="facility-list">
      {testFacilities.map(singleFacility => <FacilityCard facility={singleFacility}/>)}
    </div>
  )
}

export default FacilityList;