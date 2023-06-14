import './Facility.css'

function FacilityCard({ facility }) {
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

  const facilities = [testFacility]

  return (
    <div className="facility-list">
      {facilities.map(facility => <FacilityCard facility={facility}/>)}
    </div>
  )
}

export default FacilityCard;