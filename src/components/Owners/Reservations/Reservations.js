import FacilityCard from "./FacilityCard";
import DisplayReservations from "./DisplayReservations";
import testPicture from '../../../pictures/testFacilityPicture.jpg'
import { useState } from "react";
import "./Reservations.css"

const Reservations = () => {
    
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
  const testFacilities = [testFacility, testFacility, testFacility, testFacility, testFacility]

  const [facilities, setFacilities] = useState(testFacilities);
	const [seeReservations, setSeeReservations] = useState(false);
	const [displayFacility, setDisplayFacility] = useState(null);

  return (
		<div>
		{ seeReservations ?
			<div className="display-reservations"> 
				<DisplayReservations facility={displayFacility} setSeeReservations={setSeeReservations}/>
			</div> :
			<div className="owner-reservations">
				<div className="owner-facility-list">
					{facilities.map(facility => <FacilityCard facility={facility} setDisplayFacility={setDisplayFacility}
					setSeeReservations={setSeeReservations}/>)}
				</div>
    	</div>
		}
		</div>
  );
}

export default Reservations;