import FacilityList from "./FacilityList";
import FilterReservation from "./FilterReservation";
import { useState } from "react";

import testPicture from '../../../pictures/testFacilityPicture.jpg'

function Reservation() {

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

    const [facilities, setFacilities] = useState(testFacilities);

    return (
        <div className="reservation-page">
            <FilterReservation facilityList={facilities} setFacilityList={setFacilities} allFacilities={testFacilities}/>
            <FacilityList allFacilities={facilities}/>
        </div>
    );
}

export default Reservation;